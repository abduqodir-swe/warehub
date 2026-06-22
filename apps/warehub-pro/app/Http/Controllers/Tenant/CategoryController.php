<?php

declare(strict_types=1);

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Warehub\Core\Models\Tenant\Category;

class CategoryController extends Controller
{
    public function store(Request $request): RedirectResponse|JsonResponse
    {
        $request->validate(['name' => ['required', 'string', 'max:255']]);

        $category = Category::create(['name' => $request->name]);

        if ($request->wantsJson()) {
            return response()->json($category);
        }

        return back()->with('success', 'Категория создана');
    }
}
