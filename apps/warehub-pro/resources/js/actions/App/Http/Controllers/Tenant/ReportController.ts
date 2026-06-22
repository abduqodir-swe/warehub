import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Tenant\ReportController::index
* @see app/Http/Controllers/Tenant/ReportController.php:18
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
* @see app/Http/Controllers/Tenant/ReportController.php:18
* @route '/reports'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\ReportController::index
* @see app/Http/Controllers/Tenant/ReportController.php:18
* @route '/reports'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::index
* @see app/Http/Controllers/Tenant/ReportController.php:18
* @route '/reports'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::index
* @see app/Http/Controllers/Tenant/ReportController.php:18
* @route '/reports'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::index
* @see app/Http/Controllers/Tenant/ReportController.php:18
* @route '/reports'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::index
* @see app/Http/Controllers/Tenant/ReportController.php:18
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
* @see app/Http/Controllers/Tenant/ReportController.php:23
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
* @see app/Http/Controllers/Tenant/ReportController.php:23
* @route '/reports/stock-snapshot'
*/
stockSnapshot.url = (options?: RouteQueryOptions) => {
    return stockSnapshot.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\ReportController::stockSnapshot
* @see app/Http/Controllers/Tenant/ReportController.php:23
* @route '/reports/stock-snapshot'
*/
stockSnapshot.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stockSnapshot.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::stockSnapshot
* @see app/Http/Controllers/Tenant/ReportController.php:23
* @route '/reports/stock-snapshot'
*/
stockSnapshot.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stockSnapshot.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::stockSnapshot
* @see app/Http/Controllers/Tenant/ReportController.php:23
* @route '/reports/stock-snapshot'
*/
const stockSnapshotForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stockSnapshot.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::stockSnapshot
* @see app/Http/Controllers/Tenant/ReportController.php:23
* @route '/reports/stock-snapshot'
*/
stockSnapshotForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stockSnapshot.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::stockSnapshot
* @see app/Http/Controllers/Tenant/ReportController.php:23
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
* @see \App\Http\Controllers\Tenant\ReportController::movements
* @see app/Http/Controllers/Tenant/ReportController.php:39
* @route '/reports/movements'
*/
export const movements = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: movements.url(options),
    method: 'get',
})

movements.definition = {
    methods: ["get","head"],
    url: '/reports/movements',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\ReportController::movements
* @see app/Http/Controllers/Tenant/ReportController.php:39
* @route '/reports/movements'
*/
movements.url = (options?: RouteQueryOptions) => {
    return movements.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\ReportController::movements
* @see app/Http/Controllers/Tenant/ReportController.php:39
* @route '/reports/movements'
*/
movements.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: movements.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::movements
* @see app/Http/Controllers/Tenant/ReportController.php:39
* @route '/reports/movements'
*/
movements.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: movements.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::movements
* @see app/Http/Controllers/Tenant/ReportController.php:39
* @route '/reports/movements'
*/
const movementsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: movements.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::movements
* @see app/Http/Controllers/Tenant/ReportController.php:39
* @route '/reports/movements'
*/
movementsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: movements.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::movements
* @see app/Http/Controllers/Tenant/ReportController.php:39
* @route '/reports/movements'
*/
movementsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: movements.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

movements.form = movementsForm

/**
* @see \App\Http\Controllers\Tenant\ReportController::topSelling
* @see app/Http/Controllers/Tenant/ReportController.php:89
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
* @see app/Http/Controllers/Tenant/ReportController.php:89
* @route '/reports/top-selling'
*/
topSelling.url = (options?: RouteQueryOptions) => {
    return topSelling.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\ReportController::topSelling
* @see app/Http/Controllers/Tenant/ReportController.php:89
* @route '/reports/top-selling'
*/
topSelling.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: topSelling.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::topSelling
* @see app/Http/Controllers/Tenant/ReportController.php:89
* @route '/reports/top-selling'
*/
topSelling.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: topSelling.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::topSelling
* @see app/Http/Controllers/Tenant/ReportController.php:89
* @route '/reports/top-selling'
*/
const topSellingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: topSelling.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::topSelling
* @see app/Http/Controllers/Tenant/ReportController.php:89
* @route '/reports/top-selling'
*/
topSellingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: topSelling.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::topSelling
* @see app/Http/Controllers/Tenant/ReportController.php:89
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

/**
* @see \App\Http\Controllers\Tenant\ReportController::topProfitable
* @see app/Http/Controllers/Tenant/ReportController.php:124
* @route '/reports/top-profitable'
*/
export const topProfitable = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: topProfitable.url(options),
    method: 'get',
})

topProfitable.definition = {
    methods: ["get","head"],
    url: '/reports/top-profitable',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\ReportController::topProfitable
* @see app/Http/Controllers/Tenant/ReportController.php:124
* @route '/reports/top-profitable'
*/
topProfitable.url = (options?: RouteQueryOptions) => {
    return topProfitable.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\ReportController::topProfitable
* @see app/Http/Controllers/Tenant/ReportController.php:124
* @route '/reports/top-profitable'
*/
topProfitable.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: topProfitable.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::topProfitable
* @see app/Http/Controllers/Tenant/ReportController.php:124
* @route '/reports/top-profitable'
*/
topProfitable.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: topProfitable.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::topProfitable
* @see app/Http/Controllers/Tenant/ReportController.php:124
* @route '/reports/top-profitable'
*/
const topProfitableForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: topProfitable.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::topProfitable
* @see app/Http/Controllers/Tenant/ReportController.php:124
* @route '/reports/top-profitable'
*/
topProfitableForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: topProfitable.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::topProfitable
* @see app/Http/Controllers/Tenant/ReportController.php:124
* @route '/reports/top-profitable'
*/
topProfitableForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: topProfitable.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

topProfitable.form = topProfitableForm

/**
* @see \App\Http\Controllers\Tenant\ReportController::salesByCategory
* @see app/Http/Controllers/Tenant/ReportController.php:158
* @route '/reports/sales-by-category'
*/
export const salesByCategory = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: salesByCategory.url(options),
    method: 'get',
})

salesByCategory.definition = {
    methods: ["get","head"],
    url: '/reports/sales-by-category',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\ReportController::salesByCategory
* @see app/Http/Controllers/Tenant/ReportController.php:158
* @route '/reports/sales-by-category'
*/
salesByCategory.url = (options?: RouteQueryOptions) => {
    return salesByCategory.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\ReportController::salesByCategory
* @see app/Http/Controllers/Tenant/ReportController.php:158
* @route '/reports/sales-by-category'
*/
salesByCategory.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: salesByCategory.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::salesByCategory
* @see app/Http/Controllers/Tenant/ReportController.php:158
* @route '/reports/sales-by-category'
*/
salesByCategory.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: salesByCategory.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::salesByCategory
* @see app/Http/Controllers/Tenant/ReportController.php:158
* @route '/reports/sales-by-category'
*/
const salesByCategoryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: salesByCategory.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::salesByCategory
* @see app/Http/Controllers/Tenant/ReportController.php:158
* @route '/reports/sales-by-category'
*/
salesByCategoryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: salesByCategory.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::salesByCategory
* @see app/Http/Controllers/Tenant/ReportController.php:158
* @route '/reports/sales-by-category'
*/
salesByCategoryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: salesByCategory.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

salesByCategory.form = salesByCategoryForm

/**
* @see \App\Http\Controllers\Tenant\ReportController::abc
* @see app/Http/Controllers/Tenant/ReportController.php:188
* @route '/reports/abc'
*/
export const abc = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: abc.url(options),
    method: 'get',
})

abc.definition = {
    methods: ["get","head"],
    url: '/reports/abc',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\ReportController::abc
* @see app/Http/Controllers/Tenant/ReportController.php:188
* @route '/reports/abc'
*/
abc.url = (options?: RouteQueryOptions) => {
    return abc.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\ReportController::abc
* @see app/Http/Controllers/Tenant/ReportController.php:188
* @route '/reports/abc'
*/
abc.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: abc.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::abc
* @see app/Http/Controllers/Tenant/ReportController.php:188
* @route '/reports/abc'
*/
abc.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: abc.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::abc
* @see app/Http/Controllers/Tenant/ReportController.php:188
* @route '/reports/abc'
*/
const abcForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: abc.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::abc
* @see app/Http/Controllers/Tenant/ReportController.php:188
* @route '/reports/abc'
*/
abcForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: abc.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::abc
* @see app/Http/Controllers/Tenant/ReportController.php:188
* @route '/reports/abc'
*/
abcForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: abc.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

abc.form = abcForm

/**
* @see \App\Http\Controllers\Tenant\ReportController::operators
* @see app/Http/Controllers/Tenant/ReportController.php:230
* @route '/reports/operators'
*/
export const operators = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: operators.url(options),
    method: 'get',
})

operators.definition = {
    methods: ["get","head"],
    url: '/reports/operators',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\ReportController::operators
* @see app/Http/Controllers/Tenant/ReportController.php:230
* @route '/reports/operators'
*/
operators.url = (options?: RouteQueryOptions) => {
    return operators.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\ReportController::operators
* @see app/Http/Controllers/Tenant/ReportController.php:230
* @route '/reports/operators'
*/
operators.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: operators.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::operators
* @see app/Http/Controllers/Tenant/ReportController.php:230
* @route '/reports/operators'
*/
operators.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: operators.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::operators
* @see app/Http/Controllers/Tenant/ReportController.php:230
* @route '/reports/operators'
*/
const operatorsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: operators.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::operators
* @see app/Http/Controllers/Tenant/ReportController.php:230
* @route '/reports/operators'
*/
operatorsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: operators.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::operators
* @see app/Http/Controllers/Tenant/ReportController.php:230
* @route '/reports/operators'
*/
operatorsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: operators.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

operators.form = operatorsForm

/**
* @see \App\Http\Controllers\Tenant\ReportController::dailyChart
* @see app/Http/Controllers/Tenant/ReportController.php:258
* @route '/reports/daily-chart'
*/
export const dailyChart = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dailyChart.url(options),
    method: 'get',
})

dailyChart.definition = {
    methods: ["get","head"],
    url: '/reports/daily-chart',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\ReportController::dailyChart
* @see app/Http/Controllers/Tenant/ReportController.php:258
* @route '/reports/daily-chart'
*/
dailyChart.url = (options?: RouteQueryOptions) => {
    return dailyChart.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\ReportController::dailyChart
* @see app/Http/Controllers/Tenant/ReportController.php:258
* @route '/reports/daily-chart'
*/
dailyChart.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dailyChart.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::dailyChart
* @see app/Http/Controllers/Tenant/ReportController.php:258
* @route '/reports/daily-chart'
*/
dailyChart.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dailyChart.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::dailyChart
* @see app/Http/Controllers/Tenant/ReportController.php:258
* @route '/reports/daily-chart'
*/
const dailyChartForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dailyChart.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::dailyChart
* @see app/Http/Controllers/Tenant/ReportController.php:258
* @route '/reports/daily-chart'
*/
dailyChartForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dailyChart.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\ReportController::dailyChart
* @see app/Http/Controllers/Tenant/ReportController.php:258
* @route '/reports/daily-chart'
*/
dailyChartForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dailyChart.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dailyChart.form = dailyChartForm

const ReportController = { index, stockSnapshot, movements, topSelling, topProfitable, salesByCategory, abc, operators, dailyChart }

export default ReportController