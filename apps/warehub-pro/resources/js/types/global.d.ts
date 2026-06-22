import '@inertiajs/core'

declare module '@inertiajs/core' {
    interface PageProps {
        name: string
        auth: {
            user: {
                id: number
                name: string
                email: string
                avatar?: string
                email_verified_at: string | null
                two_factor_enabled?: boolean
                created_at: string
                updated_at: string
            } | null
            superAdmin: {
                id: number
                name: string
                email: string
                created_at: string
                updated_at: string
            } | null
        }
        sidebarOpen: boolean
        flash?: { success?: string; error?: string }
    }
}