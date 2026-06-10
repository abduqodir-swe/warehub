<?php

declare(strict_types=1);

namespace Tests\Feature\Tenant;

use App\Models\Central\Tenant;
use App\Models\Tenant\Product;
use App\Models\Tenant\Stock;
use App\Models\Tenant\Warehouse;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProductionHardeningTest extends TestCase
{
    use RefreshDatabase;

    public function test_fortify_login_route_is_registered(): void
    {
        $this->assertTrue(app('router')->has('login'));
        $this->assertTrue(app('router')->has('login.store'));
    }

    public function test_duplicate_null_stock_location_is_rejected(): void
    {
        $tenant = Tenant::create([
            'subdomain' => 'stock-unique',
            'name' => 'Stock Unique',
            'owner_email' => 'stock@unique.test',
            'status' => 'active',
        ]);
        tenancy()->initialize($tenant);
        $warehouse = Warehouse::factory()->create();
        $product = Product::factory()->create();
        $attributes = [
            'product_id' => $product->id,
            'warehouse_id' => $warehouse->id,
            'zone_id' => null,
            'cell' => null,
            'quantity' => 1,
            'reserved' => 0,
        ];
        Stock::create($attributes);

        $this->expectException(QueryException::class);
        Stock::create($attributes);
    }
}
