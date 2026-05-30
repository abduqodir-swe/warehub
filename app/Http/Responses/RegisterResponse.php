<?php

declare(strict_types=1);

namespace App\Http\Responses;

use App\Models\Central\Tenant;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Laravel\Fortify\Contracts\RegisterResponse as RegisterResponseContract;

class RegisterResponse implements RegisterResponseContract
{
    public function toResponse($request): RedirectResponse
    {
        abort_unless($request instanceof Request, 500);

        $path = $this->resolveTenantFromRequest($request) !== null
            ? '/'
            : config('fortify.home');

        return redirect()->intended($path);
    }

    private function resolveTenantFromRequest(Request $request): ?Tenant
    {
        return Tenant::query()
            ->whereRelation('domains', 'domain', $request->getHost())
            ->first();
    }
}
