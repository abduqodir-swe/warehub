import Admin from './Admin'
import Settings from './Settings'
import Tenant from './Tenant'

const Controllers = {
    Admin: Object.assign(Admin, Admin),
    Settings: Object.assign(Settings, Settings),
    Tenant: Object.assign(Tenant, Tenant),
}

export default Controllers