<?php

declare(strict_types=1);

namespace App\Http\Requests\Tenant;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Warehub\Core\Support\TenantRule;

class StoreIncomingDocumentRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /** @return array<string, ValidationRule|array<mixed>|string> */
    public function rules(): array
    {
        return [
            'date' => ['required', 'date'],
            'supplier_id' => ['nullable', 'integer', TenantRule::exists('suppliers')],
            'warehouse_id' => ['required', 'integer', TenantRule::exists('warehouses')],
            'note' => ['nullable', 'string', 'max:2000'],
            'items' => ['required', 'array', 'min:1'],
            'items.*.product_id' => ['required', 'integer', TenantRule::exists('products')],
            'items.*.quantity' => ['required', 'numeric', 'min:0.001'],
            'items.*.purchase_price' => ['required', 'numeric', 'min:0'],
            'items.*.zone_id' => [
                'nullable',
                'integer',
                Rule::exists('warehouse_zones', 'id')->where(
                    fn ($query) => $query->where('warehouse_id', $this->integer('warehouse_id'))
                ),
            ],
            'items.*.cell' => ['nullable', 'string', 'max:50'],
        ];
    }
}
