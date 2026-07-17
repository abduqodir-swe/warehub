<?php

use App\Http\Controllers\LocalhostHomeController;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Warehub\Core\Support\TenantWorkspace;

/*
|--------------------------------------------------------------------------
| Central Web Routes
|--------------------------------------------------------------------------
|
| Routes for the main domain: warehub.test
| Fortify auth routes are also registered for this domain.
|
*/

$centralDomain = app()->environment('production')
    ? 'central.'.config('app.domain', 'warehub.test')
    : config('app.domain', 'warehub.test');

Route::domain('localhost')->get('/', LocalhostHomeController::class);

Route::domain($centralDomain)->group(function () {
    $redirectTenantUser = static function (): ?RedirectResponse {
        $user = auth()->user();

        if (! $user instanceof User) {
            return null;
        }

        $workspaceUrl = TenantWorkspace::urlForUser($user, request());

        if ($workspaceUrl === null) {
            return null;
        }

        return redirect()->away($workspaceUrl);
    };

    Route::get('/', fn () => $redirectTenantUser() ?? Inertia::render('welcome', [
        'canRegister' => false,
    ]))->name('home');

    Route::middleware(['auth', 'verified'])->group(function () use ($redirectTenantUser) {
        Route::get('dashboard', fn () => $redirectTenantUser() ?? Inertia::render('dashboard'))
            ->name('dashboard');
    });

    require __DIR__.'/settings.php';
});
