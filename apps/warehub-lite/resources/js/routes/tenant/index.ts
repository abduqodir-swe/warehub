import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import products from './products'
import warehouses from './warehouses'
import categories from './categories'
import stock from './stock'
import incoming from './incoming'
import outgoing from './outgoing'
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

const tenant = {
    dashboard: Object.assign(dashboard, dashboard),
    products: Object.assign(products, products),
    warehouses: Object.assign(warehouses, warehouses),
    categories: Object.assign(categories, categories),
    stock: Object.assign(stock, stock),
    incoming: Object.assign(incoming, incoming),
    outgoing: Object.assign(outgoing, outgoing),
    reports: Object.assign(reports, reports),
}

export default tenant