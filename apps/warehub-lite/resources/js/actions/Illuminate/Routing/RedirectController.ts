import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '//central.warehub.test/settings'
*/
const RedirectControllerc7e09129307009e2c7e71a2c0bfc117d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.url(options),
    method: 'get',
})

RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '//central.warehub.test/settings',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '//central.warehub.test/settings'
*/
RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.url = (options?: RouteQueryOptions) => {
    return RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '//central.warehub.test/settings'
*/
RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '//central.warehub.test/settings'
*/
RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '//central.warehub.test/settings'
*/
RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '//central.warehub.test/settings'
*/
RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.url(options),
    method: 'put',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '//central.warehub.test/settings'
*/
RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.url(options),
    method: 'patch',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '//central.warehub.test/settings'
*/
RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.url(options),
    method: 'delete',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '//central.warehub.test/settings'
*/
RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.url(options),
    method: 'options',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '//central.warehub.test/settings'
*/
const RedirectControllerc7e09129307009e2c7e71a2c0bfc117dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '//central.warehub.test/settings'
*/
RedirectControllerc7e09129307009e2c7e71a2c0bfc117dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '//central.warehub.test/settings'
*/
RedirectControllerc7e09129307009e2c7e71a2c0bfc117dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '//central.warehub.test/settings'
*/
RedirectControllerc7e09129307009e2c7e71a2c0bfc117dForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '//central.warehub.test/settings'
*/
RedirectControllerc7e09129307009e2c7e71a2c0bfc117dForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '//central.warehub.test/settings'
*/
RedirectControllerc7e09129307009e2c7e71a2c0bfc117dForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '//central.warehub.test/settings'
*/
RedirectControllerc7e09129307009e2c7e71a2c0bfc117dForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '//central.warehub.test/settings'
*/
RedirectControllerc7e09129307009e2c7e71a2c0bfc117dForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectControllerc7e09129307009e2c7e71a2c0bfc117d.form = RedirectControllerc7e09129307009e2c7e71a2c0bfc117dForm
/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing'
*/
const RedirectController450e74471f6b35122b826398dd2a1892 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController450e74471f6b35122b826398dd2a1892.url(options),
    method: 'get',
})

RedirectController450e74471f6b35122b826398dd2a1892.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/outgoing',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing'
*/
RedirectController450e74471f6b35122b826398dd2a1892.url = (options?: RouteQueryOptions) => {
    return RedirectController450e74471f6b35122b826398dd2a1892.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing'
*/
RedirectController450e74471f6b35122b826398dd2a1892.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController450e74471f6b35122b826398dd2a1892.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing'
*/
RedirectController450e74471f6b35122b826398dd2a1892.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectController450e74471f6b35122b826398dd2a1892.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing'
*/
RedirectController450e74471f6b35122b826398dd2a1892.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectController450e74471f6b35122b826398dd2a1892.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing'
*/
RedirectController450e74471f6b35122b826398dd2a1892.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectController450e74471f6b35122b826398dd2a1892.url(options),
    method: 'put',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing'
*/
RedirectController450e74471f6b35122b826398dd2a1892.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectController450e74471f6b35122b826398dd2a1892.url(options),
    method: 'patch',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing'
*/
RedirectController450e74471f6b35122b826398dd2a1892.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectController450e74471f6b35122b826398dd2a1892.url(options),
    method: 'delete',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing'
*/
RedirectController450e74471f6b35122b826398dd2a1892.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectController450e74471f6b35122b826398dd2a1892.url(options),
    method: 'options',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing'
*/
const RedirectController450e74471f6b35122b826398dd2a1892Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController450e74471f6b35122b826398dd2a1892.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing'
*/
RedirectController450e74471f6b35122b826398dd2a1892Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController450e74471f6b35122b826398dd2a1892.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing'
*/
RedirectController450e74471f6b35122b826398dd2a1892Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController450e74471f6b35122b826398dd2a1892.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing'
*/
RedirectController450e74471f6b35122b826398dd2a1892Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController450e74471f6b35122b826398dd2a1892.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing'
*/
RedirectController450e74471f6b35122b826398dd2a1892Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController450e74471f6b35122b826398dd2a1892.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing'
*/
RedirectController450e74471f6b35122b826398dd2a1892Form.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController450e74471f6b35122b826398dd2a1892.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing'
*/
RedirectController450e74471f6b35122b826398dd2a1892Form.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController450e74471f6b35122b826398dd2a1892.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing'
*/
RedirectController450e74471f6b35122b826398dd2a1892Form.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController450e74471f6b35122b826398dd2a1892.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectController450e74471f6b35122b826398dd2a1892.form = RedirectController450e74471f6b35122b826398dd2a1892Form
/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing/{path}'
*/
const RedirectController8a804b9ddbb90b3507231fb360ec8a97 = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController8a804b9ddbb90b3507231fb360ec8a97.url(args, options),
    method: 'get',
})

RedirectController8a804b9ddbb90b3507231fb360ec8a97.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/outgoing/{path}',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing/{path}'
*/
RedirectController8a804b9ddbb90b3507231fb360ec8a97.url = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { path: args }
    }

    if (Array.isArray(args)) {
        args = {
            path: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        path: args.path,
    }

    return RedirectController8a804b9ddbb90b3507231fb360ec8a97.definition.url
            .replace('{path}', parsedArgs.path.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing/{path}'
*/
RedirectController8a804b9ddbb90b3507231fb360ec8a97.get = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController8a804b9ddbb90b3507231fb360ec8a97.url(args, options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing/{path}'
*/
RedirectController8a804b9ddbb90b3507231fb360ec8a97.head = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectController8a804b9ddbb90b3507231fb360ec8a97.url(args, options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing/{path}'
*/
RedirectController8a804b9ddbb90b3507231fb360ec8a97.post = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectController8a804b9ddbb90b3507231fb360ec8a97.url(args, options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing/{path}'
*/
RedirectController8a804b9ddbb90b3507231fb360ec8a97.put = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectController8a804b9ddbb90b3507231fb360ec8a97.url(args, options),
    method: 'put',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing/{path}'
*/
RedirectController8a804b9ddbb90b3507231fb360ec8a97.patch = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectController8a804b9ddbb90b3507231fb360ec8a97.url(args, options),
    method: 'patch',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing/{path}'
*/
RedirectController8a804b9ddbb90b3507231fb360ec8a97.delete = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectController8a804b9ddbb90b3507231fb360ec8a97.url(args, options),
    method: 'delete',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing/{path}'
*/
RedirectController8a804b9ddbb90b3507231fb360ec8a97.options = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectController8a804b9ddbb90b3507231fb360ec8a97.url(args, options),
    method: 'options',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing/{path}'
*/
const RedirectController8a804b9ddbb90b3507231fb360ec8a97Form = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController8a804b9ddbb90b3507231fb360ec8a97.url(args, options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing/{path}'
*/
RedirectController8a804b9ddbb90b3507231fb360ec8a97Form.get = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController8a804b9ddbb90b3507231fb360ec8a97.url(args, options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing/{path}'
*/
RedirectController8a804b9ddbb90b3507231fb360ec8a97Form.head = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController8a804b9ddbb90b3507231fb360ec8a97.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing/{path}'
*/
RedirectController8a804b9ddbb90b3507231fb360ec8a97Form.post = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController8a804b9ddbb90b3507231fb360ec8a97.url(args, options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing/{path}'
*/
RedirectController8a804b9ddbb90b3507231fb360ec8a97Form.put = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController8a804b9ddbb90b3507231fb360ec8a97.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing/{path}'
*/
RedirectController8a804b9ddbb90b3507231fb360ec8a97Form.patch = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController8a804b9ddbb90b3507231fb360ec8a97.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing/{path}'
*/
RedirectController8a804b9ddbb90b3507231fb360ec8a97Form.delete = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController8a804b9ddbb90b3507231fb360ec8a97.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/outgoing/{path}'
*/
RedirectController8a804b9ddbb90b3507231fb360ec8a97Form.options = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController8a804b9ddbb90b3507231fb360ec8a97.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectController8a804b9ddbb90b3507231fb360ec8a97.form = RedirectController8a804b9ddbb90b3507231fb360ec8a97Form
/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory'
*/
const RedirectController0f0f149fd5ad713a01fac2dca3083cda = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController0f0f149fd5ad713a01fac2dca3083cda.url(options),
    method: 'get',
})

RedirectController0f0f149fd5ad713a01fac2dca3083cda.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/inventory',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory'
*/
RedirectController0f0f149fd5ad713a01fac2dca3083cda.url = (options?: RouteQueryOptions) => {
    return RedirectController0f0f149fd5ad713a01fac2dca3083cda.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory'
*/
RedirectController0f0f149fd5ad713a01fac2dca3083cda.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController0f0f149fd5ad713a01fac2dca3083cda.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory'
*/
RedirectController0f0f149fd5ad713a01fac2dca3083cda.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectController0f0f149fd5ad713a01fac2dca3083cda.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory'
*/
RedirectController0f0f149fd5ad713a01fac2dca3083cda.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectController0f0f149fd5ad713a01fac2dca3083cda.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory'
*/
RedirectController0f0f149fd5ad713a01fac2dca3083cda.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectController0f0f149fd5ad713a01fac2dca3083cda.url(options),
    method: 'put',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory'
*/
RedirectController0f0f149fd5ad713a01fac2dca3083cda.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectController0f0f149fd5ad713a01fac2dca3083cda.url(options),
    method: 'patch',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory'
*/
RedirectController0f0f149fd5ad713a01fac2dca3083cda.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectController0f0f149fd5ad713a01fac2dca3083cda.url(options),
    method: 'delete',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory'
*/
RedirectController0f0f149fd5ad713a01fac2dca3083cda.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectController0f0f149fd5ad713a01fac2dca3083cda.url(options),
    method: 'options',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory'
*/
const RedirectController0f0f149fd5ad713a01fac2dca3083cdaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController0f0f149fd5ad713a01fac2dca3083cda.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory'
*/
RedirectController0f0f149fd5ad713a01fac2dca3083cdaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController0f0f149fd5ad713a01fac2dca3083cda.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory'
*/
RedirectController0f0f149fd5ad713a01fac2dca3083cdaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController0f0f149fd5ad713a01fac2dca3083cda.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory'
*/
RedirectController0f0f149fd5ad713a01fac2dca3083cdaForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController0f0f149fd5ad713a01fac2dca3083cda.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory'
*/
RedirectController0f0f149fd5ad713a01fac2dca3083cdaForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController0f0f149fd5ad713a01fac2dca3083cda.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory'
*/
RedirectController0f0f149fd5ad713a01fac2dca3083cdaForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController0f0f149fd5ad713a01fac2dca3083cda.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory'
*/
RedirectController0f0f149fd5ad713a01fac2dca3083cdaForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController0f0f149fd5ad713a01fac2dca3083cda.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory'
*/
RedirectController0f0f149fd5ad713a01fac2dca3083cdaForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController0f0f149fd5ad713a01fac2dca3083cda.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectController0f0f149fd5ad713a01fac2dca3083cda.form = RedirectController0f0f149fd5ad713a01fac2dca3083cdaForm
/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory/{path}'
*/
const RedirectController26d1dc43dcf82895a5eb8408ab9f9f77 = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.url(args, options),
    method: 'get',
})

RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/inventory/{path}',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory/{path}'
*/
RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.url = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { path: args }
    }

    if (Array.isArray(args)) {
        args = {
            path: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        path: args.path,
    }

    return RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.definition.url
            .replace('{path}', parsedArgs.path.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory/{path}'
*/
RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.get = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.url(args, options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory/{path}'
*/
RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.head = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.url(args, options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory/{path}'
*/
RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.post = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.url(args, options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory/{path}'
*/
RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.put = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.url(args, options),
    method: 'put',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory/{path}'
*/
RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.patch = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.url(args, options),
    method: 'patch',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory/{path}'
*/
RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.delete = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.url(args, options),
    method: 'delete',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory/{path}'
*/
RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.options = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.url(args, options),
    method: 'options',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory/{path}'
*/
const RedirectController26d1dc43dcf82895a5eb8408ab9f9f77Form = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.url(args, options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory/{path}'
*/
RedirectController26d1dc43dcf82895a5eb8408ab9f9f77Form.get = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.url(args, options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory/{path}'
*/
RedirectController26d1dc43dcf82895a5eb8408ab9f9f77Form.head = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory/{path}'
*/
RedirectController26d1dc43dcf82895a5eb8408ab9f9f77Form.post = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.url(args, options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory/{path}'
*/
RedirectController26d1dc43dcf82895a5eb8408ab9f9f77Form.put = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory/{path}'
*/
RedirectController26d1dc43dcf82895a5eb8408ab9f9f77Form.patch = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory/{path}'
*/
RedirectController26d1dc43dcf82895a5eb8408ab9f9f77Form.delete = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/inventory/{path}'
*/
RedirectController26d1dc43dcf82895a5eb8408ab9f9f77Form.options = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectController26d1dc43dcf82895a5eb8408ab9f9f77.form = RedirectController26d1dc43dcf82895a5eb8408ab9f9f77Form
/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers'
*/
const RedirectController0a357fde0534261f558a4c565e8e2261 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController0a357fde0534261f558a4c565e8e2261.url(options),
    method: 'get',
})

RedirectController0a357fde0534261f558a4c565e8e2261.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/transfers',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers'
*/
RedirectController0a357fde0534261f558a4c565e8e2261.url = (options?: RouteQueryOptions) => {
    return RedirectController0a357fde0534261f558a4c565e8e2261.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers'
*/
RedirectController0a357fde0534261f558a4c565e8e2261.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController0a357fde0534261f558a4c565e8e2261.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers'
*/
RedirectController0a357fde0534261f558a4c565e8e2261.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectController0a357fde0534261f558a4c565e8e2261.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers'
*/
RedirectController0a357fde0534261f558a4c565e8e2261.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectController0a357fde0534261f558a4c565e8e2261.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers'
*/
RedirectController0a357fde0534261f558a4c565e8e2261.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectController0a357fde0534261f558a4c565e8e2261.url(options),
    method: 'put',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers'
*/
RedirectController0a357fde0534261f558a4c565e8e2261.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectController0a357fde0534261f558a4c565e8e2261.url(options),
    method: 'patch',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers'
*/
RedirectController0a357fde0534261f558a4c565e8e2261.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectController0a357fde0534261f558a4c565e8e2261.url(options),
    method: 'delete',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers'
*/
RedirectController0a357fde0534261f558a4c565e8e2261.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectController0a357fde0534261f558a4c565e8e2261.url(options),
    method: 'options',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers'
*/
const RedirectController0a357fde0534261f558a4c565e8e2261Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController0a357fde0534261f558a4c565e8e2261.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers'
*/
RedirectController0a357fde0534261f558a4c565e8e2261Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController0a357fde0534261f558a4c565e8e2261.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers'
*/
RedirectController0a357fde0534261f558a4c565e8e2261Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController0a357fde0534261f558a4c565e8e2261.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers'
*/
RedirectController0a357fde0534261f558a4c565e8e2261Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController0a357fde0534261f558a4c565e8e2261.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers'
*/
RedirectController0a357fde0534261f558a4c565e8e2261Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController0a357fde0534261f558a4c565e8e2261.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers'
*/
RedirectController0a357fde0534261f558a4c565e8e2261Form.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController0a357fde0534261f558a4c565e8e2261.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers'
*/
RedirectController0a357fde0534261f558a4c565e8e2261Form.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController0a357fde0534261f558a4c565e8e2261.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers'
*/
RedirectController0a357fde0534261f558a4c565e8e2261Form.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController0a357fde0534261f558a4c565e8e2261.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectController0a357fde0534261f558a4c565e8e2261.form = RedirectController0a357fde0534261f558a4c565e8e2261Form
/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers/{path}'
*/
const RedirectControllerf14234a18af4c61f8da560d0d42370b0 = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectControllerf14234a18af4c61f8da560d0d42370b0.url(args, options),
    method: 'get',
})

RedirectControllerf14234a18af4c61f8da560d0d42370b0.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/transfers/{path}',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers/{path}'
*/
RedirectControllerf14234a18af4c61f8da560d0d42370b0.url = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { path: args }
    }

    if (Array.isArray(args)) {
        args = {
            path: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        path: args.path,
    }

    return RedirectControllerf14234a18af4c61f8da560d0d42370b0.definition.url
            .replace('{path}', parsedArgs.path.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers/{path}'
*/
RedirectControllerf14234a18af4c61f8da560d0d42370b0.get = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectControllerf14234a18af4c61f8da560d0d42370b0.url(args, options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers/{path}'
*/
RedirectControllerf14234a18af4c61f8da560d0d42370b0.head = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectControllerf14234a18af4c61f8da560d0d42370b0.url(args, options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers/{path}'
*/
RedirectControllerf14234a18af4c61f8da560d0d42370b0.post = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectControllerf14234a18af4c61f8da560d0d42370b0.url(args, options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers/{path}'
*/
RedirectControllerf14234a18af4c61f8da560d0d42370b0.put = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectControllerf14234a18af4c61f8da560d0d42370b0.url(args, options),
    method: 'put',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers/{path}'
*/
RedirectControllerf14234a18af4c61f8da560d0d42370b0.patch = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectControllerf14234a18af4c61f8da560d0d42370b0.url(args, options),
    method: 'patch',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers/{path}'
*/
RedirectControllerf14234a18af4c61f8da560d0d42370b0.delete = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectControllerf14234a18af4c61f8da560d0d42370b0.url(args, options),
    method: 'delete',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers/{path}'
*/
RedirectControllerf14234a18af4c61f8da560d0d42370b0.options = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectControllerf14234a18af4c61f8da560d0d42370b0.url(args, options),
    method: 'options',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers/{path}'
*/
const RedirectControllerf14234a18af4c61f8da560d0d42370b0Form = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllerf14234a18af4c61f8da560d0d42370b0.url(args, options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers/{path}'
*/
RedirectControllerf14234a18af4c61f8da560d0d42370b0Form.get = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllerf14234a18af4c61f8da560d0d42370b0.url(args, options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers/{path}'
*/
RedirectControllerf14234a18af4c61f8da560d0d42370b0Form.head = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllerf14234a18af4c61f8da560d0d42370b0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers/{path}'
*/
RedirectControllerf14234a18af4c61f8da560d0d42370b0Form.post = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllerf14234a18af4c61f8da560d0d42370b0.url(args, options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers/{path}'
*/
RedirectControllerf14234a18af4c61f8da560d0d42370b0Form.put = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllerf14234a18af4c61f8da560d0d42370b0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers/{path}'
*/
RedirectControllerf14234a18af4c61f8da560d0d42370b0Form.patch = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllerf14234a18af4c61f8da560d0d42370b0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers/{path}'
*/
RedirectControllerf14234a18af4c61f8da560d0d42370b0Form.delete = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllerf14234a18af4c61f8da560d0d42370b0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/transfers/{path}'
*/
RedirectControllerf14234a18af4c61f8da560d0d42370b0Form.options = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllerf14234a18af4c61f8da560d0d42370b0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectControllerf14234a18af4c61f8da560d0d42370b0.form = RedirectControllerf14234a18af4c61f8da560d0d42370b0Form
/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
const RedirectController4b87d2df7e3aa853f6720faea796e36c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'get',
})

RedirectController4b87d2df7e3aa853f6720faea796e36c.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/settings',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36c.url = (options?: RouteQueryOptions) => {
    return RedirectController4b87d2df7e3aa853f6720faea796e36c.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36c.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36c.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'put',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36c.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'patch',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36c.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'delete',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36c.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'options',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
const RedirectController4b87d2df7e3aa853f6720faea796e36cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36cForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36cForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36cForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36cForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36cForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectController4b87d2df7e3aa853f6720faea796e36c.form = RedirectController4b87d2df7e3aa853f6720faea796e36cForm
/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings/{path}'
*/
const RedirectController6820a3bab67bd9a1fce986bb2613de16 = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController6820a3bab67bd9a1fce986bb2613de16.url(args, options),
    method: 'get',
})

RedirectController6820a3bab67bd9a1fce986bb2613de16.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/settings/{path}',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings/{path}'
*/
RedirectController6820a3bab67bd9a1fce986bb2613de16.url = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { path: args }
    }

    if (Array.isArray(args)) {
        args = {
            path: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        path: args.path,
    }

    return RedirectController6820a3bab67bd9a1fce986bb2613de16.definition.url
            .replace('{path}', parsedArgs.path.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings/{path}'
*/
RedirectController6820a3bab67bd9a1fce986bb2613de16.get = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController6820a3bab67bd9a1fce986bb2613de16.url(args, options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings/{path}'
*/
RedirectController6820a3bab67bd9a1fce986bb2613de16.head = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectController6820a3bab67bd9a1fce986bb2613de16.url(args, options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings/{path}'
*/
RedirectController6820a3bab67bd9a1fce986bb2613de16.post = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectController6820a3bab67bd9a1fce986bb2613de16.url(args, options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings/{path}'
*/
RedirectController6820a3bab67bd9a1fce986bb2613de16.put = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectController6820a3bab67bd9a1fce986bb2613de16.url(args, options),
    method: 'put',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings/{path}'
*/
RedirectController6820a3bab67bd9a1fce986bb2613de16.patch = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectController6820a3bab67bd9a1fce986bb2613de16.url(args, options),
    method: 'patch',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings/{path}'
*/
RedirectController6820a3bab67bd9a1fce986bb2613de16.delete = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectController6820a3bab67bd9a1fce986bb2613de16.url(args, options),
    method: 'delete',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings/{path}'
*/
RedirectController6820a3bab67bd9a1fce986bb2613de16.options = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectController6820a3bab67bd9a1fce986bb2613de16.url(args, options),
    method: 'options',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings/{path}'
*/
const RedirectController6820a3bab67bd9a1fce986bb2613de16Form = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController6820a3bab67bd9a1fce986bb2613de16.url(args, options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings/{path}'
*/
RedirectController6820a3bab67bd9a1fce986bb2613de16Form.get = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController6820a3bab67bd9a1fce986bb2613de16.url(args, options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings/{path}'
*/
RedirectController6820a3bab67bd9a1fce986bb2613de16Form.head = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController6820a3bab67bd9a1fce986bb2613de16.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings/{path}'
*/
RedirectController6820a3bab67bd9a1fce986bb2613de16Form.post = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController6820a3bab67bd9a1fce986bb2613de16.url(args, options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings/{path}'
*/
RedirectController6820a3bab67bd9a1fce986bb2613de16Form.put = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController6820a3bab67bd9a1fce986bb2613de16.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings/{path}'
*/
RedirectController6820a3bab67bd9a1fce986bb2613de16Form.patch = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController6820a3bab67bd9a1fce986bb2613de16.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings/{path}'
*/
RedirectController6820a3bab67bd9a1fce986bb2613de16Form.delete = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController6820a3bab67bd9a1fce986bb2613de16.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings/{path}'
*/
RedirectController6820a3bab67bd9a1fce986bb2613de16Form.options = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController6820a3bab67bd9a1fce986bb2613de16.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectController6820a3bab67bd9a1fce986bb2613de16.form = RedirectController6820a3bab67bd9a1fce986bb2613de16Form
/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/reports/{report}'
*/
const RedirectControllerc05ecb8dd71c12639a282bde1a1529bb = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.url(args, options),
    method: 'get',
})

RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/reports/{report}',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/reports/{report}'
*/
RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.url = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { report: args }
    }

    if (Array.isArray(args)) {
        args = {
            report: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        report: args.report,
    }

    return RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.definition.url
            .replace('{report}', parsedArgs.report.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/reports/{report}'
*/
RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.get = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.url(args, options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/reports/{report}'
*/
RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.head = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.url(args, options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/reports/{report}'
*/
RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.post = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.url(args, options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/reports/{report}'
*/
RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.put = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.url(args, options),
    method: 'put',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/reports/{report}'
*/
RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.patch = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.url(args, options),
    method: 'patch',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/reports/{report}'
*/
RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.delete = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.url(args, options),
    method: 'delete',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/reports/{report}'
*/
RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.options = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.url(args, options),
    method: 'options',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/reports/{report}'
*/
const RedirectControllerc05ecb8dd71c12639a282bde1a1529bbForm = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.url(args, options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/reports/{report}'
*/
RedirectControllerc05ecb8dd71c12639a282bde1a1529bbForm.get = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.url(args, options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/reports/{report}'
*/
RedirectControllerc05ecb8dd71c12639a282bde1a1529bbForm.head = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/reports/{report}'
*/
RedirectControllerc05ecb8dd71c12639a282bde1a1529bbForm.post = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.url(args, options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/reports/{report}'
*/
RedirectControllerc05ecb8dd71c12639a282bde1a1529bbForm.put = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/reports/{report}'
*/
RedirectControllerc05ecb8dd71c12639a282bde1a1529bbForm.patch = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/reports/{report}'
*/
RedirectControllerc05ecb8dd71c12639a282bde1a1529bbForm.delete = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/reports/{report}'
*/
RedirectControllerc05ecb8dd71c12639a282bde1a1529bbForm.options = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectControllerc05ecb8dd71c12639a282bde1a1529bb.form = RedirectControllerc05ecb8dd71c12639a282bde1a1529bbForm

/**
* Multiple routes resolve to \Illuminate\Routing\RedirectController::RedirectController, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `RedirectController['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
const RedirectController = {
    '//central.warehub.test/settings': RedirectControllerc7e09129307009e2c7e71a2c0bfc117d,
    '/outgoing': RedirectController450e74471f6b35122b826398dd2a1892,
    '/outgoing/{path}': RedirectController8a804b9ddbb90b3507231fb360ec8a97,
    '/inventory': RedirectController0f0f149fd5ad713a01fac2dca3083cda,
    '/inventory/{path}': RedirectController26d1dc43dcf82895a5eb8408ab9f9f77,
    '/transfers': RedirectController0a357fde0534261f558a4c565e8e2261,
    '/transfers/{path}': RedirectControllerf14234a18af4c61f8da560d0d42370b0,
    '/settings': RedirectController4b87d2df7e3aa853f6720faea796e36c,
    '/settings/{path}': RedirectController6820a3bab67bd9a1fce986bb2613de16,
    '/reports/{report}': RedirectControllerc05ecb8dd71c12639a282bde1a1529bb,
}

export default RedirectController