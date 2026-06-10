<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        foreach (['incoming_documents', 'outgoing_documents', 'inventory_documents', 'transfer_documents'] as $tableName) {
            Schema::table($tableName, function (Blueprint $table): void {
                $table->unique(['tenant_id', 'number']);
                $table->foreign('tenant_id')->references('id')->on('tenants')->cascadeOnDelete();
                $table->foreign('user_id')->references('id')->on('users')->nullOnDelete();
            });
        }

        Schema::table('incoming_documents', function (Blueprint $table): void {
            $table->foreign('supplier_id')->references('id')->on('suppliers')->nullOnDelete();
            $table->foreign('warehouse_id')->references('id')->on('warehouses')->restrictOnDelete();
        });
        Schema::table('outgoing_documents', function (Blueprint $table): void {
            $table->foreign('customer_id')->references('id')->on('customers')->nullOnDelete();
            $table->foreign('warehouse_id')->references('id')->on('warehouses')->restrictOnDelete();
        });
        Schema::table('inventory_documents', function (Blueprint $table): void {
            $table->foreign('warehouse_id')->references('id')->on('warehouses')->restrictOnDelete();
        });
        Schema::table('transfer_documents', function (Blueprint $table): void {
            $table->foreign('from_warehouse_id')->references('id')->on('warehouses')->restrictOnDelete();
            $table->foreign('to_warehouse_id')->references('id')->on('warehouses')->restrictOnDelete();
        });

        $this->addItemConstraints('incoming_items', 'incoming_documents');
        $this->addItemConstraints('outgoing_items', 'outgoing_documents');
        $this->addItemConstraints('inventory_items', 'inventory_documents');
        $this->addItemConstraints('transfer_items', 'transfer_documents');

        Schema::table('incoming_items', function (Blueprint $table): void {
            $table->foreign('zone_id')->references('id')->on('warehouse_zones')->nullOnDelete();
        });

        Schema::table('stock', function (Blueprint $table): void {
            $table->dropUnique('stock_product_id_warehouse_id_zone_id_cell_unique');
        });

        if (DB::getDriverName() === 'pgsql') {
            DB::statement(
                'CREATE UNIQUE INDEX stock_tenant_location_unique '.
                'ON stock (tenant_id, product_id, warehouse_id, zone_id, cell) NULLS NOT DISTINCT'
            );
        } else {
            DB::statement(
                'CREATE UNIQUE INDEX stock_tenant_location_unique ON stock '.
                "(tenant_id, product_id, warehouse_id, COALESCE(zone_id, 0), COALESCE(cell, ''))"
            );
        }
    }

    public function down(): void
    {
        DB::statement('DROP INDEX stock_tenant_location_unique');

        Schema::table('stock', function (Blueprint $table): void {
            $table->unique(['product_id', 'warehouse_id', 'zone_id', 'cell']);
        });

        Schema::table('incoming_items', fn (Blueprint $table) => $table->dropForeign(['zone_id']));
        $this->dropItemConstraints('transfer_items');
        $this->dropItemConstraints('inventory_items');
        $this->dropItemConstraints('outgoing_items');
        $this->dropItemConstraints('incoming_items');

        Schema::table('transfer_documents', function (Blueprint $table): void {
            $table->dropForeign(['from_warehouse_id']);
            $table->dropForeign(['to_warehouse_id']);
        });
        Schema::table('inventory_documents', fn (Blueprint $table) => $table->dropForeign(['warehouse_id']));
        Schema::table('outgoing_documents', function (Blueprint $table): void {
            $table->dropForeign(['customer_id']);
            $table->dropForeign(['warehouse_id']);
        });
        Schema::table('incoming_documents', function (Blueprint $table): void {
            $table->dropForeign(['supplier_id']);
            $table->dropForeign(['warehouse_id']);
        });

        foreach (['incoming_documents', 'outgoing_documents', 'inventory_documents', 'transfer_documents'] as $tableName) {
            Schema::table($tableName, function (Blueprint $table): void {
                $table->dropForeign(['tenant_id']);
                $table->dropForeign(['user_id']);
                $table->dropUnique(['tenant_id', 'number']);
            });
        }
    }

    private function addItemConstraints(string $tableName, string $documentTable): void
    {
        Schema::table($tableName, function (Blueprint $table) use ($documentTable): void {
            $table->foreign('document_id')->references('id')->on($documentTable)->cascadeOnDelete();
            $table->foreign('product_id')->references('id')->on('products')->restrictOnDelete();
        });
    }

    private function dropItemConstraints(string $tableName): void
    {
        Schema::table($tableName, function (Blueprint $table): void {
            $table->dropForeign(['document_id']);
            $table->dropForeign(['product_id']);
        });
    }
};
