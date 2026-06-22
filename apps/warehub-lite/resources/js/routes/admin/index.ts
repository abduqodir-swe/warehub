import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import loginDf2c2a from './login'
import tenants from './tenants'
/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::login
* @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:15
* @route '//admin.warehub.test/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '//admin.warehub.test/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::login
* @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:15
* @route '//admin.warehub.test/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::login
* @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:15
* @route '//admin.warehub.test/login'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::login
* @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:15
* @route '//admin.warehub.test/login'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::login
* @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:15
* @route '//admin.warehub.test/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::login
* @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:15
* @route '//admin.warehub.test/login'
*/
loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::login
* @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:15
* @route '//admin.warehub.test/login'
*/
loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

login.form = loginForm

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::logout
* @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:36
* @route '//admin.warehub.test/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '//admin.warehub.test/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::logout
* @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:36
* @route '//admin.warehub.test/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::logout
* @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:36
* @route '//admin.warehub.test/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::logout
* @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:36
* @route '//admin.warehub.test/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::logout
* @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:36
* @route '//admin.warehub.test/logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm

/**
* @see routes/admin.php:28
* @route '//admin.warehub.test'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '//admin.warehub.test',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/admin.php:28
* @route '//admin.warehub.test'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see routes/admin.php:28
* @route '//admin.warehub.test'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see routes/admin.php:28
* @route '//admin.warehub.test'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see routes/admin.php:28
* @route '//admin.warehub.test'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see routes/admin.php:28
* @route '//admin.warehub.test'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see routes/admin.php:28
* @route '//admin.warehub.test'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

const admin = {
    login: Object.assign(login, loginDf2c2a),
    logout: Object.assign(logout, logout),
    dashboard: Object.assign(dashboard, dashboard),
    tenants: Object.assign(tenants, tenants),
}

export default admin