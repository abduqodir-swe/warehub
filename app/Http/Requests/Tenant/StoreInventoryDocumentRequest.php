<?php

declare(strict_types=1);

namespace App\Http\Requests\Tenant;

use App\Support\TenantRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreInventoryDocumentRequest extends FormRequest
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
            'warehouse_id' => ['required', 'integer', TenantRule::exists('warehouses')],
            'type' => ['required', 'in:planned,unplanned,partial'],
            'note' => ['nullable', 'string', 'max:1000'],
        ];
    }
}
