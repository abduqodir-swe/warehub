<?php

declare(strict_types=1);

namespace Warehub\Core\Support;

use App\Models\User;
use Illuminate\Http\Request;

class TenantWorkspace
{
    public static function domainForUser(?User $user): ?string
    {
        if ($user === null || $user->tenant_id === null) {
            return null;
        }

        return $user->tenant?->domains()->value('domain');
    }

    public static function urlForUser(?User $user, Request $request, string $path = '/'): ?string
    {
        $domain = self::domainForUser($user);

        if ($domain === null) {
            return null;
        }

        return sprintf(
            '%s://%s/%s',
            $request->getScheme(),
            $domain,
            ltrim($path, '/'),
        );
    }
}
