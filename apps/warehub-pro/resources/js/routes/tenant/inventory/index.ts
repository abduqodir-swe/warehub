import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::index
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:23
* @route '/inventory'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/inventory',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::index
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:23
* @route '/inventory'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::index
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:23
* @route '/inventory'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::index
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:23
* @route '/inventory'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::index
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:23
* @route '/inventory'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::index
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:23
* @route '/inventory'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::index
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:23
* @route '/inventory'
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
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::create
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:36
* @route '/inventory/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/inventory/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::create
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:36
* @route '/inventory/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::create
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:36
* @route '/inventory/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::create
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:36
* @route '/inventory/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::create
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:36
* @route '/inventory/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::create
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:36
* @route '/inventory/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::create
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:36
* @route '/inventory/create'
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
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::store
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:43
* @route '/inventory'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/inventory',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::store
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:43
* @route '/inventory'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::store
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:43
* @route '/inventory'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::store
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:43
* @route '/inventory'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::store
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:43
* @route '/inventory'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::show
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:73
* @route '/inventory/{inventoryDocument}'
*/
export const show = (args: { inventoryDocument: number | { id: number } } | [inventoryDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/inventory/{inventoryDocument}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::show
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:73
* @route '/inventory/{inventoryDocument}'
*/
show.url = (args: { inventoryDocument: number | { id: number } } | [inventoryDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { inventoryDocument: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { inventoryDocument: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            inventoryDocument: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        inventoryDocument: typeof args.inventoryDocument === 'object'
        ? args.inventoryDocument.id
        : args.inventoryDocument,
    }

    return show.definition.url
            .replace('{inventoryDocument}', parsedArgs.inventoryDocument.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::show
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:73
* @route '/inventory/{inventoryDocument}'
*/
show.get = (args: { inventoryDocument: number | { id: number } } | [inventoryDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::show
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:73
* @route '/inventory/{inventoryDocument}'
*/
show.head = (args: { inventoryDocument: number | { id: number } } | [inventoryDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::show
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:73
* @route '/inventory/{inventoryDocument}'
*/
const showForm = (args: { inventoryDocument: number | { id: number } } | [inventoryDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::show
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:73
* @route '/inventory/{inventoryDocument}'
*/
showForm.get = (args: { inventoryDocument: number | { id: number } } | [inventoryDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::show
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:73
* @route '/inventory/{inventoryDocument}'
*/
showForm.head = (args: { inventoryDocument: number | { id: number } } | [inventoryDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::updateItem
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:86
* @route '/inventory/{inventoryDocument}/items/{inventoryItem}'
*/
export const updateItem = (args: { inventoryDocument: number | { id: number }, inventoryItem: number | { id: number } } | [inventoryDocument: number | { id: number }, inventoryItem: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateItem.url(args, options),
    method: 'patch',
})

updateItem.definition = {
    methods: ["patch"],
    url: '/inventory/{inventoryDocument}/items/{inventoryItem}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::updateItem
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:86
* @route '/inventory/{inventoryDocument}/items/{inventoryItem}'
*/
updateItem.url = (args: { inventoryDocument: number | { id: number }, inventoryItem: number | { id: number } } | [inventoryDocument: number | { id: number }, inventoryItem: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            inventoryDocument: args[0],
            inventoryItem: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        inventoryDocument: typeof args.inventoryDocument === 'object'
        ? args.inventoryDocument.id
        : args.inventoryDocument,
        inventoryItem: typeof args.inventoryItem === 'object'
        ? args.inventoryItem.id
        : args.inventoryItem,
    }

    return updateItem.definition.url
            .replace('{inventoryDocument}', parsedArgs.inventoryDocument.toString())
            .replace('{inventoryItem}', parsedArgs.inventoryItem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::updateItem
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:86
* @route '/inventory/{inventoryDocument}/items/{inventoryItem}'
*/
updateItem.patch = (args: { inventoryDocument: number | { id: number }, inventoryItem: number | { id: number } } | [inventoryDocument: number | { id: number }, inventoryItem: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateItem.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::updateItem
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:86
* @route '/inventory/{inventoryDocument}/items/{inventoryItem}'
*/
const updateItemForm = (args: { inventoryDocument: number | { id: number }, inventoryItem: number | { id: number } } | [inventoryDocument: number | { id: number }, inventoryItem: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateItem.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::updateItem
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:86
* @route '/inventory/{inventoryDocument}/items/{inventoryItem}'
*/
updateItemForm.patch = (args: { inventoryDocument: number | { id: number }, inventoryItem: number | { id: number } } | [inventoryDocument: number | { id: number }, inventoryItem: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateItem.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateItem.form = updateItemForm

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::confirm
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:98
* @route '/inventory/{inventoryDocument}/confirm'
*/
export const confirm = (args: { inventoryDocument: number | { id: number } } | [inventoryDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: confirm.url(args, options),
    method: 'post',
})

confirm.definition = {
    methods: ["post"],
    url: '/inventory/{inventoryDocument}/confirm',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::confirm
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:98
* @route '/inventory/{inventoryDocument}/confirm'
*/
confirm.url = (args: { inventoryDocument: number | { id: number } } | [inventoryDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { inventoryDocument: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { inventoryDocument: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            inventoryDocument: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        inventoryDocument: typeof args.inventoryDocument === 'object'
        ? args.inventoryDocument.id
        : args.inventoryDocument,
    }

    return confirm.definition.url
            .replace('{inventoryDocument}', parsedArgs.inventoryDocument.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::confirm
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:98
* @route '/inventory/{inventoryDocument}/confirm'
*/
confirm.post = (args: { inventoryDocument: number | { id: number } } | [inventoryDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: confirm.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::confirm
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:98
* @route '/inventory/{inventoryDocument}/confirm'
*/
const confirmForm = (args: { inventoryDocument: number | { id: number } } | [inventoryDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: confirm.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::confirm
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:98
* @route '/inventory/{inventoryDocument}/confirm'
*/
confirmForm.post = (args: { inventoryDocument: number | { id: number } } | [inventoryDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: confirm.url(args, options),
    method: 'post',
})

confirm.form = confirmForm

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::destroy
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:109
* @route '/inventory/{inventoryDocument}'
*/
export const destroy = (args: { inventoryDocument: number | { id: number } } | [inventoryDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/inventory/{inventoryDocument}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::destroy
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:109
* @route '/inventory/{inventoryDocument}'
*/
destroy.url = (args: { inventoryDocument: number | { id: number } } | [inventoryDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { inventoryDocument: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { inventoryDocument: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            inventoryDocument: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        inventoryDocument: typeof args.inventoryDocument === 'object'
        ? args.inventoryDocument.id
        : args.inventoryDocument,
    }

    return destroy.definition.url
            .replace('{inventoryDocument}', parsedArgs.inventoryDocument.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::destroy
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:109
* @route '/inventory/{inventoryDocument}'
*/
destroy.delete = (args: { inventoryDocument: number | { id: number } } | [inventoryDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::destroy
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:109
* @route '/inventory/{inventoryDocument}'
*/
const destroyForm = (args: { inventoryDocument: number | { id: number } } | [inventoryDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\InventoryDocumentController::destroy
* @see app/Http/Controllers/Tenant/InventoryDocumentController.php:109
* @route '/inventory/{inventoryDocument}'
*/
destroyForm.delete = (args: { inventoryDocument: number | { id: number } } | [inventoryDocument: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const inventory = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    updateItem: Object.assign(updateItem, updateItem),
    confirm: Object.assign(confirm, confirm),
    destroy: Object.assign(destroy, destroy),
}

export default inventory