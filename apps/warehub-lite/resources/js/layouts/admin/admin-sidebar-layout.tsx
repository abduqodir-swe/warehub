import { AdminSidebar } from '@/components/admin-sidebar';
import { AppContent } from '@warehub/ui';
import { AppShell } from '@warehub/ui';
import { AppSidebarHeader } from '@warehub/ui';
import type { AppLayoutProps } from '@warehub/ui';

export default function AdminSidebarLayout({
    children,
    breadcrumbs = [],
}: AppLayoutProps) {
    return (
        <AppShell variant="sidebar">
            <AdminSidebar />
            <AppContent variant="sidebar" className="overflow-x-hidden">
                <AppSidebarHeader breadcrumbs={breadcrumbs} />
                {children}
            </AppContent>
        </AppShell>
    );
}
