import { Head, Link, Form } from '@inertiajs/react';
import { Check, ChevronsUpDown, Search } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

type Product = { id: number; name: string; unit: string };
type Warehouse = { id: number; name: string };

type Props = {
    products: Product[];
    warehouses: Warehouse[];
};

function SearchableProductSelect({ products }: { products: Product[] }) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(
        null,
    );
    const searchRef = useRef<HTMLInputElement>(null);

    const filteredProducts = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        if (!normalizedQuery) {
            return products;
        }

        return products.filter(
            (product) =>
                product.name.toLowerCase().includes(normalizedQuery) ||
                product.unit.toLowerCase().includes(normalizedQuery),
        );
    }, [products, query]);

    function openSearch() {
        setOpen(true);
        requestAnimationFrame(() => searchRef.current?.focus());
    }

    function selectProduct(product: Product) {
        setSelectedProduct(product);
        setQuery('');
        setOpen(false);
    }

    return (
        <div className="relative">
            <input
                type="hidden"
                name="product_id"
                value={selectedProduct ? String(selectedProduct.id) : ''}
            />
            <button
                id="product_id"
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={openSearch}
                className="flex h-9 w-full items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-1 text-left text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
                <span
                    className={cn(
                        'truncate',
                        !selectedProduct && 'text-muted-foreground',
                    )}
                >
                    {selectedProduct
                        ? `${selectedProduct.name} (${selectedProduct.unit})`
                        : 'Выберите вид товара'}
                </span>
                <ChevronsUpDown className="size-4 shrink-0 opacity-50" />
            </button>

            {open && (
                <div className="absolute z-50 mt-1 w-full rounded-md border bg-popover text-popover-foreground shadow-md">
                    <div className="relative border-b p-2">
                        <Search className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            ref={searchRef}
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            onKeyDown={(event) => {
                                if (
                                    event.key === 'Enter' &&
                                    filteredProducts[0]
                                ) {
                                    event.preventDefault();
                                    selectProduct(filteredProducts[0]);
                                }

                                if (event.key === 'Escape') {
                                    setOpen(false);
                                }
                            }}
                            onBlur={(event) => {
                                if (
                                    !event.currentTarget
                                        .closest('.relative')
                                        ?.contains(event.relatedTarget as Node)
                                ) {
                                    setOpen(false);
                                }
                            }}
                            placeholder="Поиск вида товара..."
                            className="pl-9"
                        />
                    </div>
                    <div
                        role="listbox"
                        className="max-h-64 overflow-y-auto py-1"
                    >
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <button
                                    key={product.id}
                                    type="button"
                                    role="option"
                                    aria-selected={
                                        selectedProduct?.id === product.id
                                    }
                                    onMouseDown={(event) =>
                                        event.preventDefault()
                                    }
                                    onClick={() => selectProduct(product)}
                                    className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground"
                                >
                                    <Check
                                        className={cn(
                                            'size-4',
                                            selectedProduct?.id === product.id
                                                ? 'opacity-100'
                                                : 'opacity-0',
                                        )}
                                    />
                                    <span className="min-w-0 flex-1 truncate">
                                        {product.name}
                                    </span>
                                    <span className="shrink-0 text-xs text-muted-foreground">
                                        {product.unit}
                                    </span>
                                </button>
                            ))
                        ) : (
                            <div className="px-3 py-6 text-center text-sm text-muted-foreground">
                                Ничего не найдено
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default function StockCreate({ products, warehouses }: Props) {
    return (
        <>
            <Head title="Добавить товар на склад" />
            <div className="mx-auto max-w-lg p-6">
                <h1 className="mb-6 text-lg font-semibold">
                    Добавить товар на склад
                </h1>

                <Form
                    action="/stock"
                    method="post"
                    className="flex flex-col gap-5"
                >
                    {({ errors, processing }) => (
                        <>
                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="product_id">Вид товара *</Label>
                                <SearchableProductSelect products={products} />
                                {errors.product_id && (
                                    <p className="text-xs text-destructive">
                                        {errors.product_id}
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="warehouse_id">Склад *</Label>
                                <Select name="warehouse_id">
                                    <SelectTrigger id="warehouse_id">
                                        <SelectValue placeholder="Выберите склад" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {warehouses.map((w) => (
                                            <SelectItem
                                                key={w.id}
                                                value={String(w.id)}
                                            >
                                                {w.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.warehouse_id && (
                                    <p className="text-xs text-destructive">
                                        {errors.warehouse_id}
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="quantity">Количество *</Label>
                                <Input
                                    id="quantity"
                                    name="quantity"
                                    type="number"
                                    min="0"
                                    step="0.001"
                                    defaultValue="1"
                                />
                                {errors.quantity && (
                                    <p className="text-xs text-destructive">
                                        {errors.quantity}
                                    </p>
                                )}
                            </div>

                            <p className="text-xs text-muted-foreground">
                                Если этот товар уже есть на выбранном складе,
                                количество прибавится к существующему.
                            </p>

                            <div className="flex items-center gap-3 pt-2">
                                <Button type="submit" disabled={processing}>
                                    {processing
                                        ? 'Добавляем...'
                                        : 'Добавить на склад'}
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link href="/stock">Отмена</Link>
                                </Button>
                            </div>
                        </>
                    )}
                </Form>
            </div>
        </>
    );
}

StockCreate.layout = {
    breadcrumbs: [
        { title: 'Дашборд', href: '/' },
        { title: 'Инвентарь', href: '/stock' },
        { title: 'Добавить товар', href: '/stock/create' },
    ],
};
