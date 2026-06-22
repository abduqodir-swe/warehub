<?php

declare(strict_types=1);

namespace Warehub\Core;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Migrations\Migrator;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;

class CoreServiceProvider extends ServiceProvider
{
    /**
     * Register Warehub Core bindings.
     *
     * Migration paths are registered in `boot()` because the `migrator`
     * binding is provided by Laravel's MigrationServiceProvider, which only
     * runs once `register()` has completed for all providers.
     */
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        $this->registerMigrationPaths();
        $this->registerModelFactoryResolver();
    }

    /**
     * Register Warehub Core migration paths on Laravel's Migrator.
     *
     * The package ships two sets of migrations:
     *   - database/migrations/central/  (tenants, domains, super_admins)
     *   - database/migrations/tenant/   (users, products, stock, documents, ...)
     *
     * Both paths are registered so that `php artisan migrate`, `migrate:fresh`,
     * and `migrate:status` pick them up automatically — no `--path` flag
     * required by application code. The stancl/tenancy `tenants:migrate`
     * command stays scoped to the tenant path via its own
     * `tenancy.migration_parameters` config.
     */
    protected function registerMigrationPaths(): void
    {
        /** @var Migrator $migrator */
        $migrator = $this->app->make('migrator');

        $migrator->path($this->packagePath('database/migrations/central'));
        $migrator->path($this->packagePath('database/migrations/tenant'));
    }

    /**
     * Teach Laravel's factory resolver where the Warehub Core factories live.
     *
     * Eloquent's default resolver assumes models live under the application's
     * `App\Models\` namespace and looks for a factory under
     * `Database\Factories\<ModelSubNamespace>\<Model>Factory`. Since the
     * Warehub Core models live under `Warehub\Core\Models\…` but the
     * factories still live in the application's `database/factories/`
     * directory (Database\Factories\Tenant\* and Database\Factories\*),
     * we bridge the two namespaces here.
     */
    protected function registerModelFactoryResolver(): void
    {
        $appNamespace = $this->app->getNamespace();

        Factory::guessFactoryNamesUsing(function (string $modelName) use ($appNamespace): string {
            if (str_starts_with($modelName, 'Warehub\\Core\\Models\\Tenant\\')) {
                $shortName = Str::after($modelName, 'Warehub\\Core\\Models\\Tenant\\');

                return 'Database\\Factories\\Tenant\\'.$shortName.'Factory';
            }

            if (str_starts_with($modelName, 'Warehub\\Core\\Models\\Central\\')) {
                $shortName = Str::after($modelName, 'Warehub\\Core\\Models\\Central\\');

                return 'Database\\Factories\\'.$shortName.'Factory';
            }

            // Default Laravel behaviour for App\Models\… models.
            $relative = Str::startsWith($modelName, $appNamespace.'Models\\')
                ? Str::after($modelName, $appNamespace.'Models\\')
                : Str::after($modelName, $appNamespace);

            return 'Database\\Factories\\'.$relative.'Factory';
        });
    }

    protected function packagePath(string $relative): string
    {
        return __DIR__.'/../'.$relative;
    }
}
