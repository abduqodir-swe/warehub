<?php

declare(strict_types=1);

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use App\Http\Requests\Tenant\StoreTransferDocumentRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Warehub\Core\Actions\Tenant\ConfirmTransferDocument;
use Warehub\Core\Models\Tenant\Product;
use Warehub\Core\Models\Tenant\TransferDocument;
use Warehub\Core\Models\Tenant\Warehouse;
use Warehub\Core\Support\DocumentNumber;

class TransferDocumentController extends Controller
{
    public function index(): Response
    {
        $documents = TransferDocument::with([
            'fromWarehouse:id,name',
            'toWarehouse:id,name',
        ])
            ->withCount('items')
            ->orderByDesc('date')
            ->orderByDesc('id')
            ->paginate(25);

        return Inertia::render('tenant/transfers/index', [
            'documents' => $documents,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('tenant/transfers/create', [
            'warehouses' => Warehouse::orderBy('name')->get(['id', 'name']),
            'products' => Product::orderBy('name')->get(['id', 'name', 'sku', 'unit']),
        ]);
    }

    public function store(StoreTransferDocumentRequest $request): RedirectResponse
    {
        $data = $request->validated();

        $document = TransferDocument::create([
            'number' => DocumentNumber::temporary(),
            'date' => $data['date'],
            'from_warehouse_id' => $data['from_warehouse_id'],
            'to_warehouse_id' => $data['to_warehouse_id'],
            'user_id' => Auth::id(),
            'note' => $data['note'] ?? null,
            'status' => 'draft',
        ]);
        DocumentNumber::assign($document, 'TRF');

        foreach ($data['items'] as $item) {
            $document->items()->create([
                'product_id' => $item['product_id'],
                'quantity' => $item['quantity'],
            ]);
        }

        return redirect("/transfers/{$document->id}");
    }

    public function show(TransferDocument $transferDocument): Response
    {
        $transferDocument->load([
            'fromWarehouse:id,name',
            'toWarehouse:id,name',
            'items.product:id,name,sku,unit',
            'user:id,name',
        ]);

        return Inertia::render('tenant/transfers/show', [
            'document' => $transferDocument,
        ]);
    }

    public function confirm(TransferDocument $transferDocument, ConfirmTransferDocument $action): RedirectResponse
    {
        if ($transferDocument->isConfirmed()) {
            return redirect('/transfers');
        }

        $action($transferDocument);

        return redirect('/transfers');
    }

    public function destroy(TransferDocument $transferDocument): RedirectResponse
    {
        if ($transferDocument->isConfirmed()) {
            return redirect('/transfers');
        }

        $transferDocument->delete();

        return redirect('/transfers');
    }
}
