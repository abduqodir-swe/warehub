<?php

declare(strict_types=1);

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use App\Http\Requests\Tenant\StoreIncomingDocumentRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Warehub\Core\Actions\Tenant\ConfirmIncomingDocument;
use Warehub\Core\Models\Tenant\IncomingDocument;
use Warehub\Core\Models\Tenant\Product;
use Warehub\Core\Models\Tenant\Warehouse;
use Warehub\Core\Support\DocumentNumber;

class IncomingDocumentController extends Controller
{
    public function index(): Response
    {
        $documents = IncomingDocument::with(['warehouse:id,name'])
            ->withCount('items')
            ->orderByDesc('date')
            ->orderByDesc('id')
            ->paginate(25);

        return Inertia::render('tenant/incoming/index', [
            'documents' => $documents,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('tenant/incoming/create', [
            'warehouses' => Warehouse::orderBy('name')->get(['id', 'name']),
            'products' => Product::orderBy('name')->get(['id', 'name', 'sku', 'barcode', 'unit', 'purchase_price', 'currency']),
        ]);
    }

    public function store(StoreIncomingDocumentRequest $request): RedirectResponse
    {
        $data = $request->validated();

        $document = IncomingDocument::create([
            'number' => DocumentNumber::temporary(),
            'date' => $data['date'],
            'warehouse_id' => $data['warehouse_id'],
            'user_id' => Auth::id(),
            'note' => $data['note'] ?? null,
            'status' => 'draft',
        ]);
        DocumentNumber::assign($document, 'IN');

        foreach ($data['items'] as $item) {
            $document->items()->create([
                'product_id' => $item['product_id'],
                'quantity' => $item['quantity'],
                'purchase_price' => $item['purchase_price'],
            ]);
        }

        return redirect('/incoming');
    }

    public function show(IncomingDocument $incomingDocument): Response
    {
        $incomingDocument->load([
            'warehouse:id,name',
            'items.product:id,name,sku,unit,currency',
            'user:id,name',
        ]);

        return Inertia::render('tenant/incoming/show', [
            'document' => $incomingDocument,
        ]);
    }

    public function confirm(IncomingDocument $incomingDocument, ConfirmIncomingDocument $action): RedirectResponse
    {
        if ($incomingDocument->isConfirmed()) {
            return redirect('/incoming');
        }

        $action($incomingDocument);

        return redirect('/incoming');
    }

    public function destroy(IncomingDocument $incomingDocument): RedirectResponse
    {
        if ($incomingDocument->isConfirmed()) {
            return redirect('/incoming');
        }

        $incomingDocument->delete();

        return redirect('/incoming');
    }
}
