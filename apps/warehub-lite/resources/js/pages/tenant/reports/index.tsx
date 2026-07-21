import { Head, Link } from '@inertiajs/react';
import { Package, Star } from 'lucide-react';

const REPORTS = [
    {
        href: '/reports/stock-snapshot',
        icon: Package,
        title: 'Остатки на складе',
        description: 'Снимок текущих остатков по всем товарам',
    },
    {
        href: '/reports/top-selling',
        icon: Star,
        title: 'Топ продаваемых',
        description: 'Рейтинг товаров по количеству продаж за период',
    },
];

export default function ReportsIndex() {
    return (
        <>
            <Head title="Отчёты" />
            <div className="flex flex-col gap-6 p-6">
                <div>
                    <h1 className="text-lg font-semibold">Отчёты</h1>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                        Аналитика и данные по вашему складу
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {REPORTS.map(({ href, icon: Icon, title, description }) => (
                        <Link
                            key={href}
                            href={href}
                            className="group flex flex-col gap-3 rounded-xl border bg-card p-4 transition-shadow hover:shadow-[var(--shadow-card-hover)]"
                        >
                            <div className="flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground group-hover:bg-[var(--accent-soft)] group-hover:text-[var(--accent)]">
                                <Icon className="size-4" />
                            </div>
                            <div>
                                <div className="font-medium">{title}</div>
                                <div className="mt-0.5 text-xs text-muted-foreground">
                                    {description}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

ReportsIndex.layout = {
    breadcrumbs: [
        { title: 'Дашборд', href: '/' },
        { title: 'Отчёты', href: '/reports' },
    ],
};
