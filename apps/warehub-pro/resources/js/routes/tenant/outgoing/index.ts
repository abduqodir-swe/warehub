import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import pos28cf7d from './pos'
/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::pos
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:125
* @route '/outgoing/pos'
*/
export const pos = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pos.url(options),
    method: 'get',
})

pos.definition = {
    methods: ["get","head"],
    url: '/outgoing/pos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::pos
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:125
* @route '/outgoing/pos'
*/
pos.url = (options?: RouteQueryOptions) => {
    return pos.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::pos
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:125
* @route '/outgoing/pos'
*/
pos.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pos.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::pos
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:125
* @route '/outgoing/pos'
*/
pos.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pos.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::pos
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:125
* @route '/outgoing/pos'
*/
const posForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pos.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::pos
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:125
* @route '/outgoing/pos'
*/
posForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pos.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::pos
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:125
* @route '/outgoing/pos'
*/
posForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pos.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

pos.form = posForm

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::index
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:23
* @route '/outgoing'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/outgoing',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::index
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:23
* @route '/outgoing'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::index
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:23
* @route '/outgoing'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::index
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:23
* @route '/outgoing'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::index
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:23
* @route '/outgoing'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::index
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:23
* @route '/outgoing'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::index
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:23
* @route '/outgoing'
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
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::create
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:36
* @route '/outgoing/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/outgoing/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::create
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:36
* @route '/outgoing/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::create
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:36
* @route '/outgoing/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::create
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:36
* @route '/outgoing/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::create
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:36
* @route '/outgoing/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::create
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:36
* @route '/outgoing/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::create
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:36
* @route '/outgoing/create'
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
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::store
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:45
* @route '/outgoing'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/outgoing',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::store
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:45
* @route '/outgoing'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::store
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:45
* @route '/outgoing'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::store
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:45
* @route '/outgoing'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::store
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:45
* @route '/outgoing'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::show
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:71
* @route '/outgoing/{outgoingDocument}'
*/
export const show = (args: { outgoingDocument: string | number | { id: string | number } } | [outgoingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/outgoing/{outgoingDocument}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::show
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:71
* @route '/outgoing/{outgoingDocument}'
*/
show.url = (args: { outgoingDocument: string | number | { id: string | number } } | [outgoingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outgoingDocument: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outgoingDocument: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outgoingDocument: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outgoingDocument: typeof args.outgoingDocument === 'object'
        ? args.outgoingDocument.id
        : args.outgoingDocument,
    }

    return show.definition.url
            .replace('{outgoingDocument}', parsedArgs.outgoingDocument.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::show
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:71
* @route '/outgoing/{outgoingDocument}'
*/
show.get = (args: { outgoingDocument: string | number | { id: string | number } } | [outgoingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::show
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:71
* @route '/outgoing/{outgoingDocument}'
*/
show.head = (args: { outgoingDocument: string | number | { id: string | number } } | [outgoingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::show
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:71
* @route '/outgoing/{outgoingDocument}'
*/
const showForm = (args: { outgoingDocument: string | number | { id: string | number } } | [outgoingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::show
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:71
* @route '/outgoing/{outgoingDocument}'
*/
showForm.get = (args: { outgoingDocument: string | number | { id: string | number } } | [outgoingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::show
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:71
* @route '/outgoing/{outgoingDocument}'
*/
showForm.head = (args: { outgoingDocument: string | number | { id: string | number } } | [outgoingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::confirm
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:85
* @route '/outgoing/{outgoingDocument}/confirm'
*/
export const confirm = (args: { outgoingDocument: string | number | { id: string | number } } | [outgoingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: confirm.url(args, options),
    method: 'post',
})

confirm.definition = {
    methods: ["post"],
    url: '/outgoing/{outgoingDocument}/confirm',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::confirm
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:85
* @route '/outgoing/{outgoingDocument}/confirm'
*/
confirm.url = (args: { outgoingDocument: string | number | { id: string | number } } | [outgoingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outgoingDocument: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outgoingDocument: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outgoingDocument: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outgoingDocument: typeof args.outgoingDocument === 'object'
        ? args.outgoingDocument.id
        : args.outgoingDocument,
    }

    return confirm.definition.url
            .replace('{outgoingDocument}', parsedArgs.outgoingDocument.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::confirm
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:85
* @route '/outgoing/{outgoingDocument}/confirm'
*/
confirm.post = (args: { outgoingDocument: string | number | { id: string | number } } | [outgoingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: confirm.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::confirm
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:85
* @route '/outgoing/{outgoingDocument}/confirm'
*/
const confirmForm = (args: { outgoingDocument: string | number | { id: string | number } } | [outgoingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: confirm.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::confirm
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:85
* @route '/outgoing/{outgoingDocument}/confirm'
*/
confirmForm.post = (args: { outgoingDocument: string | number | { id: string | number } } | [outgoingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: confirm.url(args, options),
    method: 'post',
})

confirm.form = confirmForm

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::destroy
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:136
* @route '/outgoing/{outgoingDocument}'
*/
export const destroy = (args: { outgoingDocument: string | number | { id: string | number } } | [outgoingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/outgoing/{outgoingDocument}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::destroy
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:136
* @route '/outgoing/{outgoingDocument}'
*/
destroy.url = (args: { outgoingDocument: string | number | { id: string | number } } | [outgoingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outgoingDocument: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outgoingDocument: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outgoingDocument: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outgoingDocument: typeof args.outgoingDocument === 'object'
        ? args.outgoingDocument.id
        : args.outgoingDocument,
    }

    return destroy.definition.url
            .replace('{outgoingDocument}', parsedArgs.outgoingDocument.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::destroy
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:136
* @route '/outgoing/{outgoingDocument}'
*/
destroy.delete = (args: { outgoingDocument: string | number | { id: string | number } } | [outgoingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::destroy
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:136
* @route '/outgoing/{outgoingDocument}'
*/
const destroyForm = (args: { outgoingDocument: string | number | { id: string | number } } | [outgoingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::destroy
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:136
* @route '/outgoing/{outgoingDocument}'
*/
destroyForm.delete = (args: { outgoingDocument: string | number | { id: string | number } } | [outgoingDocument: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const outgoing = {
    pos: Object.assign(pos, pos28cf7d),
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    confirm: Object.assign(confirm, confirm),
    destroy: Object.assign(destroy, destroy),
}

export default outgoing