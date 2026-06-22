<?php

declare(strict_types=1);

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use App\Http\Requests\Tenant\StoreWarehouseRequest;
use App\Http\Requests\Tenant\UpdateWarehouseRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;
use Warehub\Core\Models\Tenant\Warehouse;

class WarehouseController extends Controller
{
    public function index(): Response
    {
        $warehouses = Warehouse::withCount(['stock as total_products' => function ($query) {
            $query->where('quantity', '>', 0);
        }])
            ->with('manager:id,name')
            ->latest()
            ->get();

        return Inertia::render('tenant/warehouses/index', [
            'warehouses' => $warehouses,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('tenant/warehouses/create', [
            'users' => User::orderBy('name')->get(['id', 'name']),
        ]);
    }

    public function store(StoreWarehouseRequest $request): RedirectResponse
    {
        Warehouse::create($request->validated());

        return redirect('/warehouses')->with('success', 'Склад создан');
    }

    public function show(Warehouse $warehouse): Response
    {
        return Inertia::render('tenant/warehouses/show', [
            'warehouse' => $warehouse->load(['manager:id,name', 'zones']),
        ]);
    }

    public function edit(Warehouse $warehouse): Response
    {
        return Inertia::render('tenant/warehouses/edit', [
            'warehouse' => $warehouse,
            'users' => User::orderBy('name')->get(['id', 'name']),
        ]);
    }

    public function update(UpdateWarehouseRequest $request, Warehouse $warehouse): RedirectResponse
    {
        $warehouse->update($request->validated());

        return redirect('/warehouses')->with('success', 'Склад обновлён');
    }

    public function destroy(Warehouse $warehouse): RedirectResponse
    {
        $warehouse->delete();

        return redirect('/warehouses')->with('success', 'Склад удалён');
    }
}
