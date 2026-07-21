import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::index
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:21
* @route '/transfers'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/transfers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::index
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:21
* @route '/transfers'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::index
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:21
* @route '/transfers'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::index
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:21
* @route '/transfers'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::index
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:21
* @route '/transfers'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::index
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:21
* @route '/transfers'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::index
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:21
* @route '/transfers'
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
* @see \App\Http\Controllers\Tenant\TransferDocumentController::create
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:37
* @route '/transfers/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/transfers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::create
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:37
* @route '/transfers/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::create
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:37
* @route '/transfers/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::create
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:37
* @route '/transfers/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::create
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:37
* @route '/transfers/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::create
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:37
* @route '/transfers/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::create
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:37
* @route '/transfers/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::store
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:45
* @route '/transfers'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/transfers',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::store
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:45
* @route '/transfers'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::store
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:45
* @route '/transfers'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::store
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:45
* @route '/transfers'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::store
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:45
* @route '/transfers'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::show
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:70
* @route '/transfers/{transferDocument}'
*/
export const show = (args: { transferDocument: number | { id: number } } | [transferDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/transfers/{transferDocument}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::show
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:70
* @route '/transfers/{transferDocument}'
*/
show.url = (args: { transferDocument: number | { id: number } } | [transferDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { transferDocument: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { transferDocument: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            transferDocument: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        transferDocument: typeof args.transferDocument === 'object'
        ? args.transferDocument.id
        : args.transferDocument,
    }

    return show.definition.url
            .replace('{transferDocument}', parsedArgs.transferDocument.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::show
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:70
* @route '/transfers/{transferDocument}'
*/
show.get = (args: { transferDocument: number | { id: number } } | [transferDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::show
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:70
* @route '/transfers/{transferDocument}'
*/
show.head = (args: { transferDocument: number | { id: number } } | [transferDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::show
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:70
* @route '/transfers/{transferDocument}'
*/
const showForm = (args: { transferDocument: number | { id: number } } | [transferDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::show
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:70
* @route '/transfers/{transferDocument}'
*/
showForm.get = (args: { transferDocument: number | { id: number } } | [transferDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::show
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:70
* @route '/transfers/{transferDocument}'
*/
showForm.head = (args: { transferDocument: number | { id: number } } | [transferDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::confirm
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:84
* @route '/transfers/{transferDocument}/confirm'
*/
export const confirm = (args: { transferDocument: number | { id: number } } | [transferDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: confirm.url(args, options),
    method: 'post',
})

confirm.definition = {
    methods: ["post"],
    url: '/transfers/{transferDocument}/confirm',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::confirm
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:84
* @route '/transfers/{transferDocument}/confirm'
*/
confirm.url = (args: { transferDocument: number | { id: number } } | [transferDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { transferDocument: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { transferDocument: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            transferDocument: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        transferDocument: typeof args.transferDocument === 'object'
        ? args.transferDocument.id
        : args.transferDocument,
    }

    return confirm.definition.url
            .replace('{transferDocument}', parsedArgs.transferDocument.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::confirm
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:84
* @route '/transfers/{transferDocument}/confirm'
*/
confirm.post = (args: { transferDocument: number | { id: number } } | [transferDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: confirm.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::confirm
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:84
* @route '/transfers/{transferDocument}/confirm'
*/
const confirmForm = (args: { transferDocument: number | { id: number } } | [transferDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: confirm.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::confirm
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:84
* @route '/transfers/{transferDocument}/confirm'
*/
confirmForm.post = (args: { transferDocument: number | { id: number } } | [transferDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: confirm.url(args, options),
    method: 'post',
})

confirm.form = confirmForm

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::destroy
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:95
* @route '/transfers/{transferDocument}'
*/
export const destroy = (args: { transferDocument: number | { id: number } } | [transferDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/transfers/{transferDocument}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::destroy
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:95
* @route '/transfers/{transferDocument}'
*/
destroy.url = (args: { transferDocument: number | { id: number } } | [transferDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { transferDocument: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { transferDocument: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            transferDocument: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        transferDocument: typeof args.transferDocument === 'object'
        ? args.transferDocument.id
        : args.transferDocument,
    }

    return destroy.definition.url
            .replace('{transferDocument}', parsedArgs.transferDocument.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::destroy
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:95
* @route '/transfers/{transferDocument}'
*/
destroy.delete = (args: { transferDocument: number | { id: number } } | [transferDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::destroy
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:95
* @route '/transfers/{transferDocument}'
*/
const destroyForm = (args: { transferDocument: number | { id: number } } | [transferDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\TransferDocumentController::destroy
* @see app/Http/Controllers/Tenant/TransferDocumentController.php:95
* @route '/transfers/{transferDocument}'
*/
destroyForm.delete = (args: { transferDocument: number | { id: number } } | [transferDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const transfers = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    confirm: Object.assign(confirm, confirm),
    destroy: Object.assign(destroy, destroy),
}

export default transfers