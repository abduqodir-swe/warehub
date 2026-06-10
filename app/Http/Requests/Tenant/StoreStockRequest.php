<?php

declare(strict_types=1);

namespace App\Http\Requests\Tenant;

use App\Support\TenantRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreStockRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'product_id' => ['required', 'integer', TenantRule::exists('products')],
            'warehouse_id' => ['required', 'integer', TenantRule::exists('warehouses')],
            'quantity' => ['required', 'numeric', 'min:0.001'],
        ];
    }
}
