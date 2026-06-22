<?php

declare(strict_types=1);

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Warehub\Core\Concerns\PasswordValidationRules;
use Warehub\Core\Concerns\ProfileValidationRules;
use Warehub\Core\Models\Central\Tenant;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules, ProfileValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        Validator::make($input, [
            ...$this->profileRules(),
            'password' => $this->passwordRules(),
        ])->validate();

        $tenant = $this->resolveTenantFromRequest();

        if ($tenant === null) {
            throw ValidationException::withMessages([
                'email' => __('Регистрация доступна только внутри рабочего пространства компании.'),
            ]);
        }

        return User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => $input['password'],
            'tenant_id' => $tenant->getKey(),
        ]);
    }

    private function resolveTenantFromRequest(): ?Tenant
    {
        /** @var Request $request */
        $request = app(Request::class);

        return Tenant::query()
            ->whereRelation('domains', 'domain', $request->getHost())
            ->first();
    }
}
