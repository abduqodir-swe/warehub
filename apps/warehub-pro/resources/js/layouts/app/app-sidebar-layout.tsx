import {
    AppContent,
    AppShell,
    AppSidebar,
    AppSidebarHeader,
} from '@warehub/ui';
import type { AppLayoutProps } from '@warehub/ui';
import { toUrl } from '@warehub/ui';
import { logout } from '@/routes';
import { edit } from '@/routes/profile';

export default function AppSidebarLayout({
    children,
    breadcrumbs = [],
}: AppLayoutProps) {
    return (
        <AppShell variant="sidebar">
            <AppSidebar
                editHref={toUrl(edit())}
                logoutHref={toUrl(logout())}
            />
            <AppContent variant="sidebar" className="overflow-x-hidden">
                <AppSidebarHeader breadcrumbs={breadcrumbs} />
                {children}
            </AppContent>
        </AppShell>
    );
}
