<?php

declare(strict_types=1);

namespace App\Http\Responses;

use App\Models\User;
use App\Support\TenantWorkspace;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;

class LoginResponse implements LoginResponseContract
{
    public function toResponse($request): RedirectResponse
    {
        abort_unless($request instanceof Request, 500);

        $user = $request->user();

        if ($user instanceof User) {
            $workspaceUrl = TenantWorkspace::urlForUser($user, $request);

            if ($workspaceUrl !== null && $request->getHost() !== parse_url($workspaceUrl, PHP_URL_HOST)) {
                return redirect()->away($workspaceUrl);
            }
        }

        return redirect()->intended(config('fortify.home'));
    }
}
