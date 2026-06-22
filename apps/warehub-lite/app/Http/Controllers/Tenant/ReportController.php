<?php

declare(strict_types=1);

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Warehub\Core\Models\Tenant\Stock;
use Warehub\Core\Models\Tenant\Warehouse;

class ReportController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('tenant/reports/index');
    }

    public function stockSnapshot(Request $request): Response
    {
        $warehouseId = $request->integer('warehouse_id') ?: null;

        $query = Stock::with(['product:id,name,sku,unit,category_id', 'product.category:id,name', 'warehouse:id,name'])
            ->when($warehouseId, fn ($q) => $q->where('warehouse_id', $warehouseId))
            ->where('quantity', '>', 0)
            ->orderByDesc('quantity');

        return Inertia::render('tenant/reports/stock-snapshot', [
            'items' => $query->get(),
            'warehouses' => Warehouse::orderBy('name')->get(['id', 'name']),
            'filters' => ['warehouse_id' => $warehouseId],
        ]);
    }

    public function topSelling(Request $request): Response
    {
        $tenantId = tenant('id');
        $from = $request->input('from', now()->subDays(30)->toDateString());
        $to = $request->input('to', now()->toDateString());
        $warehouseId = $request->integer('warehouse_id') ?: null;

        $items = DB::table('outgoing_items')
            ->join('outgoing_documents', 'outgoing_documents.id', '=', 'outgoing_items.document_id')
            ->join('products', 'products.id', '=', 'outgoing_items.product_id')
            ->where('outgoing_documents.tenant_id', $tenantId)
            ->where('products.tenant_id', $tenantId)
            ->where('outgoing_documents.status', 'confirmed')
            ->whereNull('outgoing_documents.deleted_at')
            ->whereBetween('outgoing_documents.date', [$from, $to])
            ->when($warehouseId, fn ($q) => $q->where('outgoing_documents.warehouse_id', $warehouseId))
            ->groupBy('outgoing_items.product_id', 'products.name', 'products.sku')
            ->select(
                'outgoing_items.product_id',
                'products.name',
                'products.sku',
                DB::raw('SUM(outgoing_items.quantity) as total_qty'),
                DB::raw('SUM(outgoing_items.quantity * outgoing_items.retail_price) as total_revenue')
            )
            ->orderByDesc('total_qty')
            ->limit(50)
            ->get();

        return Inertia::render('tenant/reports/top-selling', [
            'items' => $items,
            'warehouses' => Warehouse::orderBy('name')->get(['id', 'name']),
            'filters' => compact('from', 'to', 'warehouseId'),
        ]);
    }
}
