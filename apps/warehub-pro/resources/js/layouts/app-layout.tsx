import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import type { BreadcrumbNavItem } from '@warehub/ui';

export default function AppLayout({
    breadcrumbs = [],
    children,
}: {
    breadcrumbs?: BreadcrumbNavItem[];
    children: React.ReactNode;
}) {
    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs}>
            {children}
        </AppLayoutTemplate>
    );
}
