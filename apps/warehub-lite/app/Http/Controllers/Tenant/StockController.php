<?php

declare(strict_types=1);

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Warehub\Core\Models\Tenant\Stock;

class StockController extends Controller
{
    public function index(): Response
    {
        $stock = Stock::with(['product', 'warehouse'])
            ->orderBy('id', 'desc')
            ->paginate(25);

        return Inertia::render('tenant/stock/index', [
            'stock' => $stock,
        ]);
    }
}
