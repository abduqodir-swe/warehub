import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
import pos28cf7d from './pos'
/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::pos
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:48
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
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:48
* @route '/outgoing/pos'
*/
pos.url = (options?: RouteQueryOptions) => {
    return pos.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::pos
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:48
* @route '/outgoing/pos'
*/
pos.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pos.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::pos
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:48
* @route '/outgoing/pos'
*/
pos.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pos.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::pos
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:48
* @route '/outgoing/pos'
*/
const posForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pos.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::pos
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:48
* @route '/outgoing/pos'
*/
posForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pos.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tenant\OutgoingDocumentController::pos
* @see app/Http/Controllers/Tenant/OutgoingDocumentController.php:48
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

const outgoing = {
    pos: Object.assign(pos, pos28cf7d),
}

export default outgoing