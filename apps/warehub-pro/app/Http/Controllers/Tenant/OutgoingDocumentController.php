<?php

declare(strict_types=1);

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use App\Http\Requests\Tenant\StoreOutgoingDocumentRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Warehub\Core\Actions\Tenant\ConfirmOutgoingDocument;
use Warehub\Core\Models\Tenant\Customer;
use Warehub\Core\Models\Tenant\OutgoingDocument;
use Warehub\Core\Models\Tenant\Stock;
use Warehub\Core\Models\Tenant\Warehouse;
use Warehub\Core\Support\DocumentNumber;

class OutgoingDocumentController extends Controller
{
    public function index(): Response
    {
        $documents = OutgoingDocument::with(['customer:id,name', 'warehouse:id,name'])
            ->withCount('items')
            ->orderByDesc('date')
            ->orderByDesc('id')
            ->paginate(25);

        return Inertia::render('tenant/outgoing/index', [
            'documents' => $documents,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('tenant/outgoing/create', [
            'customers' => Customer::orderBy('name')->get(['id', 'name']),
            'warehouses' => Warehouse::orderBy('name')->get(['id', 'name']),
            'stock' => $this->availableStock(),
        ]);
    }

    public function store(StoreOutgoingDocumentRequest $request): RedirectResponse
    {
        $data = $request->validated();

        $document = OutgoingDocument::create([
            'number' => DocumentNumber::temporary(),
            'date' => $data['date'],
            'customer_id' => $data['customer_id'] ?? null,
            'warehouse_id' => $data['warehouse_id'],
            'user_id' => Auth::id(),
            'note' => $data['note'] ?? null,
            'status' => 'draft',
        ]);
        DocumentNumber::assign($document, 'OUT');

        foreach ($data['items'] as $item) {
            $document->items()->create([
                'product_id' => $item['product_id'],
                'quantity' => $item['quantity'],
                'retail_price' => $item['retail_price'],
            ]);
        }

        return redirect('/outgoing');
    }

    public function show(OutgoingDocument $outgoingDocument): Response
    {
        $outgoingDocument->load([
            'customer:id,name',
            'warehouse:id,name',
            'items.product:id,name,sku,unit,currency',
            'user:id,name',
        ]);

        return Inertia::render('tenant/outgoing/show', [
            'document' => $outgoingDocument,
        ]);
    }

    public function confirm(OutgoingDocument $outgoingDocument, ConfirmOutgoingDocument $action): RedirectResponse
    {
        if ($outgoingDocument->isConfirmed()) {
            return redirect('/outgoing');
        }

        $outgoingDocument->load('items.product');
        $action($outgoingDocument);

        return redirect('/outgoing');
    }

    public function posStore(StoreOutgoingDocumentRequest $request, ConfirmOutgoingDocument $action): RedirectResponse
    {
        $data = $request->validated();

        $document = OutgoingDocument::create([
            'number' => DocumentNumber::temporary(),
            'date' => $data['date'],
            'customer_id' => $data['customer_id'] ?? null,
            'warehouse_id' => $data['warehouse_id'],
            'user_id' => Auth::id(),
            'status' => 'draft',
        ]);
        DocumentNumber::assign($document, 'OUT');

        foreach ($data['items'] as $item) {
            $document->items()->create([
                'product_id' => $item['product_id'],
                'quantity' => $item['quantity'],
                'retail_price' => $item['retail_price'],
            ]);
        }

        $document->load('items.product');
        $action($document);

        return redirect('/outgoing/pos');
    }

    public function pos(): Response
    {
        $warehouses = Warehouse::orderBy('name')->get(['id', 'name']);

        return Inertia::render('tenant/outgoing/pos', [
            'warehouses' => $warehouses,
            'customers' => Customer::orderBy('name')->get(['id', 'name']),
            'stock' => $this->availableStock(),
        ]);
    }

    public function destroy(OutgoingDocument $outgoingDocument): RedirectResponse
    {
        if ($outgoingDocument->isConfirmed()) {
            return redirect('/outgoing');
        }

        $outgoingDocument->delete();

        return redirect('/outgoing');
    }

    /** @return Collection<int, array<string, mixed>> */
    private function availableStock(): Collection
    {
        return Stock::with('product:id,name,sku,barcode,unit,retail_price,currency')
            ->get()
            ->groupBy(fn (Stock $stock): string => "{$stock->warehouse_id}:{$stock->product_id}")
            ->map(function ($locations) {
                /** @var Stock $stock */
                $stock = $locations->first();

                return [
                    'product_id' => $stock->product_id,
                    'product_name' => $stock->product->name,
                    'product_sku' => $stock->product->sku,
                    'product_barcode' => $stock->product->barcode,
                    'unit' => $stock->product->unit,
                    'retail_price' => $stock->product->retail_price,
                    'currency' => $stock->product->currency,
                    'available' => $locations->sum(fn (Stock $location): float => max(0, $location->available())),
                    'warehouse_id' => $stock->warehouse_id,
                ];
            })
            ->values();
    }
}
