<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;

class LocalhostHomeController
{
    public function __invoke(): RedirectResponse
    {
        return auth()->check()
            ? redirect()->route('dashboard')
            : redirect('/login');
    }
}
