import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::index
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:21
* @route '/incoming'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/incoming',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::index
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:21
* @route '/incoming'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::index
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:21
* @route '/incoming'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::index
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:21
* @route '/incoming'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::index
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:21
* @route '/incoming'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::index
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:21
* @route '/incoming'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::index
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:21
* @route '/incoming'
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
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::create
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:34
* @route '/incoming/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/incoming/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::create
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:34
* @route '/incoming/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::create
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:34
* @route '/incoming/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::create
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:34
* @route '/incoming/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::create
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:34
* @route '/incoming/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::create
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:34
* @route '/incoming/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::create
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:34
* @route '/incoming/create'
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
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::store
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:42
* @route '/incoming'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/incoming',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::store
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:42
* @route '/incoming'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::store
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:42
* @route '/incoming'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::store
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:42
* @route '/incoming'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::store
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:42
* @route '/incoming'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::show
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:67
* @route '/incoming/{incomingDocument}'
*/
export const show = (args: { incomingDocument: string | number | { id: string | number } } | [incomingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/incoming/{incomingDocument}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::show
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:67
* @route '/incoming/{incomingDocument}'
*/
show.url = (args: { incomingDocument: string | number | { id: string | number } } | [incomingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { incomingDocument: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { incomingDocument: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            incomingDocument: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        incomingDocument: typeof args.incomingDocument === 'object'
        ? args.incomingDocument.id
        : args.incomingDocument,
    }

    return show.definition.url
            .replace('{incomingDocument}', parsedArgs.incomingDocument.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::show
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:67
* @route '/incoming/{incomingDocument}'
*/
show.get = (args: { incomingDocument: string | number | { id: string | number } } | [incomingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::show
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:67
* @route '/incoming/{incomingDocument}'
*/
show.head = (args: { incomingDocument: string | number | { id: string | number } } | [incomingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::show
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:67
* @route '/incoming/{incomingDocument}'
*/
const showForm = (args: { incomingDocument: string | number | { id: string | number } } | [incomingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::show
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:67
* @route '/incoming/{incomingDocument}'
*/
showForm.get = (args: { incomingDocument: string | number | { id: string | number } } | [incomingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::show
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:67
* @route '/incoming/{incomingDocument}'
*/
showForm.head = (args: { incomingDocument: string | number | { id: string | number } } | [incomingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::confirm
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:80
* @route '/incoming/{incomingDocument}/confirm'
*/
export const confirm = (args: { incomingDocument: string | number | { id: string | number } } | [incomingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: confirm.url(args, options),
    method: 'post',
})

confirm.definition = {
    methods: ["post"],
    url: '/incoming/{incomingDocument}/confirm',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::confirm
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:80
* @route '/incoming/{incomingDocument}/confirm'
*/
confirm.url = (args: { incomingDocument: string | number | { id: string | number } } | [incomingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { incomingDocument: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { incomingDocument: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            incomingDocument: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        incomingDocument: typeof args.incomingDocument === 'object'
        ? args.incomingDocument.id
        : args.incomingDocument,
    }

    return confirm.definition.url
            .replace('{incomingDocument}', parsedArgs.incomingDocument.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::confirm
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:80
* @route '/incoming/{incomingDocument}/confirm'
*/
confirm.post = (args: { incomingDocument: string | number | { id: string | number } } | [incomingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: confirm.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::confirm
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:80
* @route '/incoming/{incomingDocument}/confirm'
*/
const confirmForm = (args: { incomingDocument: string | number | { id: string | number } } | [incomingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: confirm.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::confirm
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:80
* @route '/incoming/{incomingDocument}/confirm'
*/
confirmForm.post = (args: { incomingDocument: string | number | { id: string | number } } | [incomingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: confirm.url(args, options),
    method: 'post',
})

confirm.form = confirmForm

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::destroy
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:91
* @route '/incoming/{incomingDocument}'
*/
export const destroy = (args: { incomingDocument: string | number | { id: string | number } } | [incomingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/incoming/{incomingDocument}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::destroy
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:91
* @route '/incoming/{incomingDocument}'
*/
destroy.url = (args: { incomingDocument: string | number | { id: string | number } } | [incomingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { incomingDocument: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { incomingDocument: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            incomingDocument: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        incomingDocument: typeof args.incomingDocument === 'object'
        ? args.incomingDocument.id
        : args.incomingDocument,
    }

    return destroy.definition.url
            .replace('{incomingDocument}', parsedArgs.incomingDocument.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::destroy
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:91
* @route '/incoming/{incomingDocument}'
*/
destroy.delete = (args: { incomingDocument: string | number | { id: string | number } } | [incomingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::destroy
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:91
* @route '/incoming/{incomingDocument}'
*/
const destroyForm = (args: { incomingDocument: string | number | { id: string | number } } | [incomingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\IncomingDocumentController::destroy
* @see app/Http/Controllers/Tenant/IncomingDocumentController.php:91
* @route '/incoming/{incomingDocument}'
*/
destroyForm.delete = (args: { incomingDocument: string | number | { id: string | number } } | [incomingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const incoming = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    confirm: Object.assign(confirm, confirm),
    destroy: Object.assign(destroy, destroy),
}

export default incoming