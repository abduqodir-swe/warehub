<?php

declare(strict_types=1);

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use App\Http\Requests\Tenant\StoreInventoryDocumentRequest;
use App\Http\Requests\Tenant\UpdateInventoryItemRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Warehub\Core\Actions\Tenant\ConfirmInventoryDocument;
use Warehub\Core\Models\Tenant\InventoryDocument;
use Warehub\Core\Models\Tenant\InventoryItem;
use Warehub\Core\Models\Tenant\Stock;
use Warehub\Core\Models\Tenant\Warehouse;
use Warehub\Core\Support\DocumentNumber;

class InventoryDocumentController extends Controller
{
    public function index(): Response
    {
        $documents = InventoryDocument::with(['warehouse:id,name'])
            ->withCount('items')
            ->orderByDesc('date')
            ->orderByDesc('id')
            ->paginate(25);

        return Inertia::render('tenant/inventory/index', [
            'documents' => $documents,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('tenant/inventory/create', [
            'warehouses' => Warehouse::orderBy('name')->get(['id', 'name']),
        ]);
    }

    public function store(StoreInventoryDocumentRequest $request): RedirectResponse
    {
        $data = $request->validated();

        $document = InventoryDocument::create([
            'number' => DocumentNumber::temporary(),
            'date' => $data['date'],
            'warehouse_id' => $data['warehouse_id'],
            'user_id' => Auth::id(),
            'type' => $data['type'],
            'status' => 'in_progress',
            'note' => $data['note'] ?? null,
        ]);
        DocumentNumber::assign($document, 'INV');

        Stock::where('warehouse_id', $data['warehouse_id'])
            ->selectRaw('product_id, SUM(quantity) as expected_qty')
            ->groupBy('product_id')
            ->get()
            ->each(function (Stock $stock) use ($document): void {
                $document->items()->create([
                    'product_id' => $stock->product_id,
                    'expected_qty' => $stock->expected_qty,
                    'actual_qty' => null,
                ]);
            });

        return redirect("/inventory/{$document->id}");
    }

    public function show(InventoryDocument $inventoryDocument): Response
    {
        $inventoryDocument->load([
            'warehouse:id,name',
            'items.product:id,name,sku,unit',
            'user:id,name',
        ]);

        return Inertia::render('tenant/inventory/show', [
            'document' => $inventoryDocument,
        ]);
    }

    public function updateItem(InventoryDocument $inventoryDocument, InventoryItem $inventoryItem, UpdateInventoryItemRequest $request): RedirectResponse
    {
        if ($inventoryDocument->isCompleted()) {
            return redirect("/inventory/{$inventoryDocument->id}");
        }

        $item = $inventoryDocument->items()->findOrFail($inventoryItem->getKey());
        $item->update(['actual_qty' => $request->validated()['actual_qty']]);

        return redirect("/inventory/{$inventoryDocument->id}");
    }

    public function confirm(InventoryDocument $inventoryDocument, ConfirmInventoryDocument $action): RedirectResponse
    {
        if ($inventoryDocument->isCompleted()) {
            return redirect('/inventory');
        }

        $action($inventoryDocument);

        return redirect('/inventory');
    }

    public function destroy(InventoryDocument $inventoryDocument): RedirectResponse
    {
        if ($inventoryDocument->isCompleted()) {
            return redirect('/inventory');
        }

        $inventoryDocument->delete();

        return redirect('/inventory');
    }
}
