<?php

declare(strict_types=1);

namespace App\Actions\Tenant;

use App\Models\Tenant\Stock;
use App\Models\Tenant\TransferDocument;
use App\Models\Tenant\TransferItem;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class ConfirmTransferDocument
{
    public function __invoke(TransferDocument $document): void
    {
        DB::transaction(function () use ($document) {
            $lockedDocument = TransferDocument::query()
                ->whereKey($document->getKey())
                ->lockForUpdate()
                ->firstOrFail();

            if ($lockedDocument->isConfirmed()) {
                return;
            }

            foreach ($lockedDocument->items()->with('product')->get() as $item) {
                /** @var TransferItem $item */
                $fromStocks = Stock::where('product_id', $item->product_id)
                    ->where('warehouse_id', $lockedDocument->from_warehouse_id)
                    ->orderBy('id')
                    ->lockForUpdate()
                    ->get();

                $available = $fromStocks->sum(fn (Stock $stock): float => max(0, $stock->available()));

                if ($available < (float) $item->quantity) {
                    throw ValidationException::withMessages([
                        'items' => "Недостаточно товара «{$item->product->name}» на складе-источнике. Доступно: {$available}, нужно: {$item->quantity}.",
                    ]);
                }

                $remaining = (float) $item->quantity;

                foreach ($fromStocks as $fromStock) {
                    $deduction = min($remaining, max(0, $fromStock->available()));

                    if ($deduction > 0) {
                        $fromStock->decrement('quantity', $deduction);
                        $remaining -= $deduction;
                    }

                    if ($remaining <= 0) {
                        break;
                    }
                }

                $toStock = Stock::firstOrNew([
                    'product_id' => $item->product_id,
                    'warehouse_id' => $lockedDocument->to_warehouse_id,
                    'zone_id' => null,
                    'cell' => null,
                ]);

                $toStock->quantity = (float) $toStock->quantity + (float) $item->quantity;
                $toStock->reserved = $toStock->reserved ?? 0;
                $toStock->save();
            }

            $lockedDocument->update([
                'status' => 'confirmed',
                'confirmed_at' => now(),
            ]);
        });
    }
}
