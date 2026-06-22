<?php

declare(strict_types=1);

namespace App\Http\Requests\Tenant;

use Illuminate\Foundation\Http\FormRequest;
use Warehub\Core\Support\TenantRule;

class StoreTransferDocumentRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /** @return array<string, mixed> */
    public function rules(): array
    {
        return [
            'date' => ['required', 'date'],
            'from_warehouse_id' => ['required', 'integer', 'different:to_warehouse_id', TenantRule::exists('warehouses')],
            'to_warehouse_id' => ['required', 'integer', TenantRule::exists('warehouses')],
            'note' => ['nullable', 'string', 'max:1000'],
            'items' => ['required', 'array', 'min:1'],
            'items.*.product_id' => ['required', 'integer', TenantRule::exists('products')],
            'items.*.quantity' => ['required', 'numeric', 'min:0.001'],
        ];
    }
}
