<?php

declare(strict_types=1);

namespace Warehub\Core\Actions\Tenant;

use Illuminate\Support\Facades\DB;
use Warehub\Core\Models\Tenant\InventoryDocument;
use Warehub\Core\Models\Tenant\InventoryItem;
use Warehub\Core\Models\Tenant\Stock;

class ConfirmInventoryDocument
{
    public function __invoke(InventoryDocument $document): void
    {
        DB::transaction(function () use ($document) {
            $lockedDocument = InventoryDocument::query()
                ->whereKey($document->getKey())
                ->lockForUpdate()
                ->firstOrFail();

            if ($lockedDocument->isCompleted()) {
                return;
            }

            $lockedDocument->items()->get()->each(function (InventoryItem $item) use ($lockedDocument): void {
                if ($item->actual_qty === null) {
                    return;
                }

                $stocks = Stock::where('product_id', $item->product_id)
                    ->where('warehouse_id', $lockedDocument->warehouse_id)
                    ->orderBy('id')
                    ->lockForUpdate()
                    ->get();
                $currentQuantity = (float) $stocks->sum('quantity');
                $difference = (float) $item->actual_qty - $currentQuantity;

                if ($difference === 0.0) {
                    return;
                }

                if ($difference > 0) {
                    $stock = $stocks->first() ?? Stock::firstOrNew([
                        'product_id' => $item->product_id,
                        'warehouse_id' => $lockedDocument->warehouse_id,
                        'zone_id' => null,
                        'cell' => null,
                    ]);
                    $stock->quantity = (float) $stock->quantity + $difference;
                    $stock->reserved = $stock->reserved ?? 0;
                    $stock->save();

                    return;
                }

                $remaining = abs($difference);

                foreach ($stocks as $stock) {
                    $deduction = min($remaining, (float) $stock->quantity);
                    $stock->decrement('quantity', $deduction);
                    $remaining -= $deduction;

                    if ($remaining <= 0) {
                        break;
                    }
                }
            });

            $lockedDocument->update([
                'status' => 'completed',
                'confirmed_at' => now(),
            ]);
        });
    }
}
