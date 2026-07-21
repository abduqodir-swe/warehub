import { Form, Head, Link } from '@inertiajs/react';
import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Button, Input, Label } from '@warehub/ui';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@warehub/ui';

type Product = { id: number; name: string; unit: string };
type Warehouse = { id: number; name: string };

type Props = {
    products: Product[];
    warehouses: Warehouse[];
};

export default function StockCreate({ products, warehouses }: Props) {
    const [productQuery, setProductQuery] = useState('');
    const [selectedProductId, setSelectedProductId] = useState('');
    const [isProductListOpen, setIsProductListOpen] = useState(false);

    const matchingProducts = useMemo(() => {
        const query = productQuery.trim().toLocaleLowerCase('ru');

        if (!query) {
            return products;
        }

        return products.filter((product) =>
            product.name.toLocaleLowerCase('ru').includes(query),
        );
    }, [productQuery, products]);

    const selectedProduct = products.find(
        (product) => String(product.id) === selectedProductId,
    );

    function selectProduct(product: Product): void {
        setSelectedProductId(String(product.id));
        setProductQuery(product.name);
        setIsProductListOpen(false);
    }

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
                                <Label htmlFor="product-search">
                                    Вид товара *
                                </Label>
                                <input
                                    type="hidden"
                                    name="product_id"
                                    value={selectedProductId}
                                />
                                <div className="relative">
                                    <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                                    <Input
                                        id="product-search"
                                        value={productQuery}
                                        placeholder="Найдите или выберите товар"
                                        className="pl-9"
                                        autoComplete="off"
                                        onChange={(event) => {
                                            setProductQuery(event.target.value);
                                            setSelectedProductId('');
                                            setIsProductListOpen(true);
                                        }}
                                        onFocus={() =>
                                            setIsProductListOpen(true)
                                        }
                                        onBlur={() => {
                                            window.setTimeout(
                                                () =>
                                                    setIsProductListOpen(false),
                                                150,
                                            );
                                        }}
                                    />
                                    {isProductListOpen && (
                                        <div className="absolute z-20 mt-1 max-h-60 w-full overflow-y-auto rounded-md border bg-popover p-1 shadow-md">
                                            {matchingProducts.length === 0 ? (
                                                <p className="px-3 py-2 text-sm text-muted-foreground">
                                                    Товары не найдены
                                                </p>
                                            ) : (
                                                matchingProducts.map(
                                                    (product) => (
                                                        <button
                                                            key={product.id}
                                                            type="button"
                                                            className="flex w-full items-center justify-between rounded-sm px-3 py-2 text-left text-sm hover:bg-accent"
                                                            onMouseDown={(
                                                                event,
                                                            ) => {
                                                                event.preventDefault();
                                                                selectProduct(
                                                                    product,
                                                                );
                                                            }}
                                                        >
                                                            <span>
                                                                {product.name}
                                                            </span>
                                                            <span className="text-muted-foreground">
                                                                {product.unit}
                                                            </span>
                                                        </button>
                                                    ),
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                                {selectedProduct && (
                                    <p className="text-xs text-muted-foreground">
                                        Выбран: {selectedProduct.name} (
                                        {selectedProduct.unit})
                                    </p>
                                )}
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
                                        {warehouses.map((warehouse) => (
                                            <SelectItem
                                                key={warehouse.id}
                                                value={String(warehouse.id)}
                                            >
                                                {warehouse.name}
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
