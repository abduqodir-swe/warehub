import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Tenant\ReportController::index
* @see app/Http/Controllers/Tenant/ReportController.php:17
* @route '/reports'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/reports',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\ReportController::index
* @see app/Http/Controllers/Tenant/ReportController.php:17
* @route '/reports'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\ReportController::index
* @see app/Http/Controllers/Tenant/ReportController.php:17
* @route '/reports'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::index
* @see app/Http/Controllers/Tenant/ReportController.php:17
* @route '/reports'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::index
* @see app/Http/Controllers/Tenant/ReportController.php:17
* @route '/reports'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::index
* @see app/Http/Controllers/Tenant/ReportController.php:17
* @route '/reports'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::index
* @see app/Http/Controllers/Tenant/ReportController.php:17
* @route '/reports'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Tenant\ReportController::stockSnapshot
* @see app/Http/Controllers/Tenant/ReportController.php:22
* @route '/reports/stock-snapshot'
*/
export const stockSnapshot = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stockSnapshot.url(options),
    method: 'get',
})

stockSnapshot.definition = {
    methods: ["get","head"],
    url: '/reports/stock-snapshot',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\ReportController::stockSnapshot
* @see app/Http/Controllers/Tenant/ReportController.php:22
* @route '/reports/stock-snapshot'
*/
stockSnapshot.url = (options?: RouteQueryOptions) => {
    return stockSnapshot.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\ReportController::stockSnapshot
* @see app/Http/Controllers/Tenant/ReportController.php:22
* @route '/reports/stock-snapshot'
*/
stockSnapshot.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stockSnapshot.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::stockSnapshot
* @see app/Http/Controllers/Tenant/ReportController.php:22
* @route '/reports/stock-snapshot'
*/
stockSnapshot.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stockSnapshot.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::stockSnapshot
* @see app/Http/Controllers/Tenant/ReportController.php:22
* @route '/reports/stock-snapshot'
*/
const stockSnapshotForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stockSnapshot.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::stockSnapshot
* @see app/Http/Controllers/Tenant/ReportController.php:22
* @route '/reports/stock-snapshot'
*/
stockSnapshotForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stockSnapshot.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::stockSnapshot
* @see app/Http/Controllers/Tenant/ReportController.php:22
* @route '/reports/stock-snapshot'
*/
stockSnapshotForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stockSnapshot.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

stockSnapshot.form = stockSnapshotForm

/**
* @see \App\Http\Controllers\Tenant\ReportController::topSelling
* @see app/Http/Controllers/Tenant/ReportController.php:38
* @route '/reports/top-selling'
*/
export const topSelling = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: topSelling.url(options),
    method: 'get',
})

topSelling.definition = {
    methods: ["get","head"],
    url: '/reports/top-selling',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\ReportController::topSelling
* @see app/Http/Controllers/Tenant/ReportController.php:38
* @route '/reports/top-selling'
*/
topSelling.url = (options?: RouteQueryOptions) => {
    return topSelling.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\ReportController::topSelling
* @see app/Http/Controllers/Tenant/ReportController.php:38
* @route '/reports/top-selling'
*/
topSelling.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: topSelling.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::topSelling
* @see app/Http/Controllers/Tenant/ReportController.php:38
* @route '/reports/top-selling'
*/
topSelling.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: topSelling.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::topSelling
* @see app/Http/Controllers/Tenant/ReportController.php:38
* @route '/reports/top-selling'
*/
const topSellingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: topSelling.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::topSelling
* @see app/Http/Controllers/Tenant/ReportController.php:38
* @route '/reports/top-selling'
*/
topSellingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: topSelling.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::topSelling
* @see app/Http/Controllers/Tenant/ReportController.php:38
* @route '/reports/top-selling'
*/
topSellingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: topSelling.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

topSelling.form = topSellingForm

const reports = {
    index: Object.assign(index, index),
    stockSnapshot: Object.assign(stockSnapshot, stockSnapshot),
    topSelling: Object.assign(topSelling, topSelling),
}

export default reports