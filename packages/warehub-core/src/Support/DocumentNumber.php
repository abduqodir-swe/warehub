<?php

declare(strict_types=1);

namespace Warehub\Core\Support;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class DocumentNumber
{
    public static function temporary(): string
    {
        return (string) Str::uuid();
    }

    public static function assign(Model $document, string $prefix): string
    {
        $number = sprintf('%s-%s-%04d', $prefix, now()->format('Y'), $document->getKey());

        $document->forceFill(['number' => $number])->save();

        return $number;
    }
}
