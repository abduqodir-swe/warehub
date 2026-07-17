<?php

declare(strict_types=1);

namespace App\Http\Responses;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;
use Symfony\Component\HttpFoundation\Response;
use Warehub\Core\Support\TenantWorkspace;

class LoginResponse implements LoginResponseContract
{
    public function toResponse($request): Response
    {
        abort_unless($request instanceof Request, 500);

        $user = $request->user();

        if ($user instanceof User) {
            $workspaceUrl = TenantWorkspace::urlForUser($user, $request);
            $workspaceHost = is_string($workspaceUrl) ? parse_url($workspaceUrl, PHP_URL_HOST) : null;

            if ($workspaceUrl !== null && $request->getHost() !== $workspaceHost) {
                return $this->externalWorkspaceRedirect($request, $workspaceUrl);
            }

            if ($workspaceUrl !== null || tenancy()->initialized) {
                return redirect('/');
            }
        }

        return redirect()->intended(config('fortify.home'));
    }

    private function externalWorkspaceRedirect(Request $request, string $workspaceUrl): Response
    {
        if ($request->headers->has('X-Inertia')) {
            return Inertia::location($workspaceUrl);
        }

        return new RedirectResponse($workspaceUrl);
    }
}
