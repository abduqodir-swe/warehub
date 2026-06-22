<?php

declare(strict_types=1);

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Fortify\Features;
use Tests\TestCase;
use Warehub\Core\Models\Central\Tenant;

class RegistrationTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private string $tenantDomain;

    protected function setUp(): void
    {
        parent::setUp();

        $this->skipUnlessFortifyHas(Features::registration());

        $this->tenant = Tenant::create([
            'subdomain' => 'testco',
            'name' => 'Test Company',
            'owner_email' => 'owner@testco.test',
            'status' => 'active',
        ]);

        $this->tenant->domains()->create([
            'domain' => 'testco.'.config('app.domain', 'warehub.test'),
        ]);

        $this->tenantDomain = 'testco.'.config('app.domain', 'warehub.test');
    }

    public function test_registration_screen_is_not_available_on_the_central_domain(): void
    {
        $response = $this->get(route('register'));

        $response->assertNotFound();
    }

    public function test_registration_screen_can_be_rendered_on_a_tenant_domain(): void
    {
        $response = $this->get("http://{$this->tenantDomain}/register");

        $response->assertOk();
    }

    public function test_central_domain_registration_does_not_create_an_orphan_user(): void
    {
        $response = $this->post(route('register.store'), [
            'name' => 'Central User',
            'email' => 'central@example.com',
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $response->assertSessionHasErrors('email');
        $this->assertGuest();
        $this->assertDatabaseMissing('users', [
            'email' => 'central@example.com',
        ]);
    }

    public function test_new_users_can_register_on_a_tenant_domain(): void
    {
        $response = $this->post("http://{$this->tenantDomain}/register", [
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect("http://{$this->tenantDomain}");

        $user = User::where('email', 'test@example.com')->first();

        $this->assertNotNull($user);
        $this->assertSame($this->tenant->getKey(), $user->tenant_id);
    }
}
