<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Central\SuperAdmin;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use RuntimeException;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        if (! app()->isProduction()) {
            $this->seedDevelopmentData();

            return;
        }

        $email = env('SUPER_ADMIN_EMAIL');
        $password = env('SUPER_ADMIN_PASSWORD');

        if (! is_string($email) || ! is_string($password) || $email === '' || $password === '') {
            throw new RuntimeException('SUPER_ADMIN_EMAIL and SUPER_ADMIN_PASSWORD are required for production seeding.');
        }

        SuperAdmin::firstOrCreate(
            ['email' => $email],
            ['name' => 'Super Admin', 'password' => Hash::make($password)]
        );
    }

    private function seedDevelopmentData(): void
    {
        SuperAdmin::firstOrCreate(
            ['email' => 'admin@'.config('app.domain', 'warehub.test')],
            ['name' => 'Super Admin', 'password' => Hash::make('password')]
        );
        $this->call(DemoDataSeeder::class);
    }
}
