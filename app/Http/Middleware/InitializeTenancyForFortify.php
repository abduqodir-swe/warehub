<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use App\Models\Central\Tenant;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class InitializeTenancyForFortify
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (! tenancy()->initialized) {
            $tenant = Tenant::query()
                ->whereRelation('domains', 'domain', $request->getHost())
                ->first();

            if ($tenant !== null) {
                tenancy()->initialize($tenant);
            }
        }

        return $next($request);
    }
}
