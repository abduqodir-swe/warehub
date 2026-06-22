import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import products from './products'
import warehouses from './warehouses'
import categories from './categories'
import stock from './stock'
import suppliers from './suppliers'
import incoming from './incoming'
import customers from './customers'
import outgoing from './outgoing'
import inventory from './inventory'
import transfers from './transfers'
import reports from './reports'
/**
* @see \App\Http\Controllers\Tenant\DashboardController::__invoke
* @see app/Http/Controllers/Tenant/DashboardController.php:19
* @route '/'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\DashboardController::__invoke
* @see app/Http/Controllers/Tenant/DashboardController.php:19
* @route '/'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\DashboardController::__invoke
* @see app/Http/Controllers/Tenant/DashboardController.php:19
* @route '/'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\DashboardController::__invoke
* @see app/Http/Controllers/Tenant/DashboardController.php:19
* @route '/'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\DashboardController::__invoke
* @see app/Http/Controllers/Tenant/DashboardController.php:19
* @route '/'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\DashboardController::__invoke
* @see app/Http/Controllers/Tenant/DashboardController.php:19
* @route '/'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\DashboardController::__invoke
* @see app/Http/Controllers/Tenant/DashboardController.php:19
* @route '/'
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

/**
* @see \App\Http\Controllers\Tenant\ActivityController::__invoke
* @see app/Http/Controllers/Tenant/ActivityController.php:23
* @route '/activity'
*/
export const activity = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activity.url(options),
    method: 'get',
})

activity.definition = {
    methods: ["get","head"],
    url: '/activity',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\ActivityController::__invoke
* @see app/Http/Controllers/Tenant/ActivityController.php:23
* @route '/activity'
*/
activity.url = (options?: RouteQueryOptions) => {
    return activity.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\ActivityController::__invoke
* @see app/Http/Controllers/Tenant/ActivityController.php:23
* @route '/activity'
*/
activity.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activity.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ActivityController::__invoke
* @see app/Http/Controllers/Tenant/ActivityController.php:23
* @route '/activity'
*/
activity.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: activity.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\ActivityController::__invoke
* @see app/Http/Controllers/Tenant/ActivityController.php:23
* @route '/activity'
*/
const activityForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activity.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ActivityController::__invoke
* @see app/Http/Controllers/Tenant/ActivityController.php:23
* @route '/activity'
*/
activityForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activity.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ActivityController::__invoke
* @see app/Http/Controllers/Tenant/ActivityController.php:23
* @route '/activity'
*/
activityForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activity.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

activity.form = activityForm

const tenant = {
    dashboard: Object.assign(dashboard, dashboard),
    products: Object.assign(products, products),
    warehouses: Object.assign(warehouses, warehouses),
    categories: Object.assign(categories, categories),
    stock: Object.assign(stock, stock),
    suppliers: Object.assign(suppliers, suppliers),
    incoming: Object.assign(incoming, incoming),
    customers: Object.assign(customers, customers),
    outgoing: Object.assign(outgoing, outgoing),
    inventory: Object.assign(inventory, inventory),
    transfers: Object.assign(transfers, transfers),
    activity: Object.assign(activity, activity),
    reports: Object.assign(reports, reports),
}

export default tenant