<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Warehub\Core\Models\Central\Tenant;

class DashboardTest extends TestCase
{
    use RefreshDatabase;

    public function test_guests_are_redirected_to_the_login_page()
    {
        $response = $this->get(route('dashboard'));
        $response->assertRedirect('/login');
    }

    public function test_guests_visiting_localhost_are_redirected_to_the_login_page(): void
    {
        $response = $this->get('http://localhost/');

        $response->assertRedirect('/login');
    }

    public function test_authenticated_users_can_visit_the_dashboard()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $response = $this->get(route('dashboard'));
        $response->assertOk();
    }

    public function test_tenant_users_are_redirected_from_the_central_dashboard_to_their_workspace(): void
    {
        $tenant = Tenant::create([
            'subdomain' => 'testco',
            'name' => 'Test Company',
            'owner_email' => 'owner@testco.test',
            'status' => 'active',
        ]);

        $tenant->domains()->create([
            'domain' => 'testco.'.config('app.domain', 'warehub.test'),
        ]);

        tenancy()->initialize($tenant);
        $user = User::factory()->create();
        tenancy()->end();

        $response = $this->actingAs($user)->get(route('dashboard'));

        $response->assertRedirect('http://testco.'.config('app.domain', 'warehub.test').'/');
    }
}
