import type { User } from './index'

declare module '@inertiajs/core' {
    interface PageProps {
        name: string
        auth: { user: User; superAdmin: unknown }
        sidebarOpen: boolean
        flash?: { success?: string; error?: string }
    }
}
