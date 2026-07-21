<?php

declare(strict_types=1);

namespace Tests\Feature\Tenant;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Warehub\Core\Models\Central\Tenant;
use Warehub\Core\Models\Tenant\Customer;
use Warehub\Core\Models\Tenant\OutgoingDocument;
use Warehub\Core\Models\Tenant\Product;
use Warehub\Core\Models\Tenant\Stock;
use Warehub\Core\Models\Tenant\Warehouse;

class OutgoingDocumentTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private string $tenantDomain;

    private User $user;

    private Warehouse $warehouse;

    private Product $product;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create([
            'subdomain' => 'testco',
            'name' => 'Test Company',
            'owner_email' => 'owner@testco.test',
            'status' => 'active',
        ]);

        $this->tenant->domains()->create([
            'domain' => 'testco.'.config('app.domain', 'warehub.test'),
        ]);

        $this->tenantDomain = 'testco.'.config('app.domain', 'warehub.test');

        tenancy()->initialize($this->tenant);
        $this->user = User::factory()->create();
        $this->warehouse = Warehouse::factory()->create();
        $this->product = Product::factory()->create(['retail_price' => 1000]);
        Customer::factory()->create(['name' => 'POS customer']);
        tenancy()->end();
    }

    public function test_pos_page_requires_auth(): void
    {
        $response = $this->get("http://{$this->tenantDomain}/outgoing/pos");

        $response->assertRedirect('/login');
    }

    public function test_pos_page_is_accessible_to_authenticated_user(): void
    {
        $response = $this->actingAs($this->user)
            ->get("http://{$this->tenantDomain}/outgoing/pos");

        $response->assertOk();
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('tenant/outgoing/pos')
            ->has('warehouses')
            ->has('customers', 1)
            ->has('stock')
        );
    }

    public function test_pos_store_creates_outgoing_document_and_decrements_stock(): void
    {
        tenancy()->initialize($this->tenant);
        Stock::create([
            'tenant_id' => $this->tenant->id,
            'product_id' => $this->product->id,
            'warehouse_id' => $this->warehouse->id,
            'quantity' => 50,
            'reserved' => 0,
        ]);
        tenancy()->end();

        $response = $this->actingAs($this->user)
            ->post("http://{$this->tenantDomain}/outgoing/pos", [
                'date' => now()->toDateString(),
                'warehouse_id' => $this->warehouse->id,
                'items' => [
                    ['product_id' => $this->product->id, 'quantity' => 3, 'retail_price' => 1000],
                ],
            ]);

        $response->assertRedirect('/outgoing/pos');

        tenancy()->initialize($this->tenant);
        $document = OutgoingDocument::first();
        $this->assertNotNull($document);
        $this->assertSame('confirmed', $document->status);
        $this->assertNotNull($document->confirmed_at);
        $this->assertEquals(47, Stock::first()->quantity);
        tenancy()->end();
    }

    public function test_pos_store_fails_if_insufficient_stock(): void
    {
        tenancy()->initialize($this->tenant);
        Stock::create([
            'tenant_id' => $this->tenant->id,
            'product_id' => $this->product->id,
            'warehouse_id' => $this->warehouse->id,
            'quantity' => 2,
            'reserved' => 0,
        ]);
        tenancy()->end();

        $response = $this->actingAs($this->user)
            ->post("http://{$this->tenantDomain}/outgoing/pos", [
                'date' => now()->toDateString(),
                'warehouse_id' => $this->warehouse->id,
                'items' => [
                    ['product_id' => $this->product->id, 'quantity' => 5, 'retail_price' => 1000],
                ],
            ]);

        $response->assertSessionHasErrors();

        // OutgoingDocument was created in DB (draft) but confirm() threw
        // insufficient-stock error and Stock wasn't decremented. So the
        // document may exist, but no stock movement happened.
        $this->assertEquals(2, (float) Stock::first()->quantity);
    }

    public function test_pos_store_validates_warehouse_required(): void
    {
        $response = $this->actingAs($this->user)
            ->post("http://{$this->tenantDomain}/outgoing/pos", [
                'date' => now()->toDateString(),
                'items' => [
                    ['product_id' => $this->product->id, 'quantity' => 1, 'retail_price' => 1000],
                ],
            ]);

        $response->assertSessionHasErrors('warehouse_id');
    }

    public function test_pos_store_validates_items_required(): void
    {
        $response = $this->actingAs($this->user)
            ->post("http://{$this->tenantDomain}/outgoing/pos", [
                'date' => now()->toDateString(),
                'warehouse_id' => $this->warehouse->id,
                'items' => [],
            ]);

        $response->assertSessionHasErrors('items');
    }
}
