<?php

declare(strict_types=1);

namespace App\Actions\Tenant;

use App\Models\Tenant\IncomingDocument;
use App\Models\Tenant\Stock;
use Illuminate\Support\Facades\DB;

class ConfirmIncomingDocument
{
    public function __invoke(IncomingDocument $document): void
    {
        DB::transaction(function () use ($document) {
            $lockedDocument = IncomingDocument::query()
                ->whereKey($document->getKey())
                ->lockForUpdate()
                ->firstOrFail();

            if ($lockedDocument->isConfirmed()) {
                return;
            }

            $lockedDocument->items()->each(function ($item) use ($lockedDocument) {
                $stock = Stock::firstOrNew([
                    'product_id' => $item->product_id,
                    'warehouse_id' => $lockedDocument->warehouse_id,
                    'zone_id' => $item->zone_id,
                    'cell' => $item->cell,
                ]);

                $stock->quantity = (float) $stock->quantity + (float) $item->quantity;
                $stock->reserved = $stock->reserved ?? 0;
                $stock->save();
            });

            $lockedDocument->update([
                'status' => 'confirmed',
                'confirmed_at' => now(),
            ]);
        });
    }
}
