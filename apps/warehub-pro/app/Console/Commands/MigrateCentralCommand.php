<?php

declare(strict_types=1);

namespace App\Console\Commands;

use Illuminate\Console\Command;

class MigrateCentralCommand extends Command
{
    protected $signature = 'migrate:central
                            {--fresh : Drop all tables and re-run all migrations}
                            {--seed : Indicates if the seed task should be re-run}
                            {--force : Force the operation to run when in production}';

    protected $description = 'Run database migrations for the central schema only';

    public function handle(): int
    {
        $options = [
            '--path' => database_path('migrations/central'),
            '--realpath' => true,
            '--force' => $this->shouldForce(),
        ];

        if ($this->option('fresh')) {
            return $this->call('migrate:fresh', $options);
        }

        return $this->call('migrate', $options);
    }

    protected function shouldForce(): bool
    {
        return $this->option('force') || $this->option('fresh') || app()->isProduction();
    }
}
