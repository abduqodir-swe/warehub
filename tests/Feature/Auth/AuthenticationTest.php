<?php

declare(strict_types=1);

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Fortify\Features;
use Tests\TestCase;
use Warehub\Core\Models\Central\Tenant;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private string $tenantDomain;

    protected function setUp(): void
    {
        parent::setUp();

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

    public function test_login_screen_can_be_rendered()
    {
        $response = $this->get("http://{$this->tenantDomain}/login");

        $response->assertOk();
    }

    public function test_users_can_authenticate_using_the_login_screen()
    {
        tenancy()->initialize($this->tenant);
        $user = User::factory()->create();
        tenancy()->end();

        $response = $this->post("http://{$this->tenantDomain}/login", [
            'email' => $user->email,
            'password' => 'password',
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect('/');
    }

    public function test_tenant_users_are_redirected_to_their_workspace_after_central_login(): void
    {
        tenancy()->initialize($this->tenant);
        $user = User::factory()->create();
        tenancy()->end();

        $response = $this->post("http://{$this->tenantDomain}/login", [
            'email' => $user->email,
            'password' => 'password',
        ]);

        $response->assertRedirect('/');
    }

    public function test_users_with_two_factor_enabled_are_redirected_to_two_factor_challenge()
    {
        $this->skipUnlessFortifyHas(Features::twoFactorAuthentication());
        Features::twoFactorAuthentication([
            'confirm' => true,
            'confirmPassword' => true,
        ]);

        tenancy()->initialize($this->tenant);
        $user = User::factory()->create();
        tenancy()->end();

        $user->forceFill([
            'two_factor_secret' => encrypt('test-secret'),
            'two_factor_recovery_codes' => encrypt(json_encode(['code1', 'code2'])),
            'two_factor_confirmed_at' => now(),
        ])->save();

        $response = $this->post("http://{$this->tenantDomain}/login", [
            'email' => $user->email,
            'password' => 'password',
        ]);

        $response->assertRedirect(route('two-factor.login'));
        $response->assertSessionHas('login.id', $user->id);
        $this->assertGuest();
    }

    public function test_users_can_not_authenticate_with_invalid_password()
    {
        tenancy()->initialize($this->tenant);
        $user = User::factory()->create();
        tenancy()->end();

        $this->post("http://{$this->tenantDomain}/login", [
            'email' => $user->email,
            'password' => 'wrong-password',
        ]);

        $this->assertGuest();
    }

    public function test_users_can_logout()
    {
        tenancy()->initialize($this->tenant);
        $user = User::factory()->create();
        tenancy()->end();

        $response = $this->actingAs($user)->post("http://{$this->tenantDomain}/logout");

        $this->assertGuest();
        $response->assertRedirect('/login');
    }

    public function test_users_are_rate_limited()
    {
        tenancy()->initialize($this->tenant);
        $user = User::factory()->create();
        tenancy()->end();

        foreach (range(1, 5) as $_attempt) {
            $this->post("http://{$this->tenantDomain}/login", [
                'email' => $user->email,
                'password' => 'wrong-password',
            ]);
        }

        $response = $this->post("http://{$this->tenantDomain}/login", [
            'email' => $user->email,
            'password' => 'wrong-password',
        ]);

        $response->assertTooManyRequests();
    }
}
