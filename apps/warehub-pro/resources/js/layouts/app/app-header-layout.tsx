import { AppContent, AppHeader, AppShell } from '@warehub/ui';
import type { AppLayoutProps } from '@warehub/ui';
import { toUrl } from '@warehub/ui';
import { logout } from '@/routes';
import { edit } from '@/routes/profile';

export default function AppHeaderLayout({
    children,
    breadcrumbs,
}: AppLayoutProps) {
    return (
        <AppShell variant="header">
            <AppHeader
                breadcrumbs={breadcrumbs}
                editHref={toUrl(edit())}
                logoutHref={toUrl(logout())}
            />
            <AppContent variant="header">{children}</AppContent>
        </AppShell>
    );
}
