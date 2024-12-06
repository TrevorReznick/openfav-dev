// ~/api/doQueries.ts

import type { APIRoute } from 'astro'
import { Operation, supabaseQuery } from '~/providers/supabaseQueryV0'

const insertEvent = () => {}

const handleApiRequest = async (type, params) => {

    switch (type) {
        case 'insertEvent':
            return await insertEvent()
        default:
            throw new Error('Unknown API request type');
    }
}

export const GET: APIRoute = async ({ url }) => {

    const tableName = url.searchParams.get('table') || 'main_table'

    const select = url.searchParams.get('select') || 'id, url, description, name, title, logo, image, icon'

    const orderColumn = url.searchParams.get('order_column') || 'id'

    const orderAscending = url.searchParams.get('order_ascending') === 'true'


    const result = await supabaseQuery(tableName, Operation.GET, {

        select: select,

        order: { 
            column: orderColumn, 
            ascending: orderAscending 
        },
        // Puoi aggiungere filtri personalizzati se necessario
        // filter: (query) => query.eq('some_column', 'some_value')
    })

    if (!result.success) {
        return new Response(JSON.stringify({ error: result.error }), { status: 500 })
    }

    return new Response(JSON.stringify(result.data), { status: 200 })
}

export const POST: APIRoute = async ({ request, url }) => {    

    const tableName = url.searchParams.get('table') || 'main_table'

    const body = await request.json()
    
    const result = await supabaseQuery(tableName, Operation.POST, {
        data: body
    })

    if (!result.success) {
        return new Response(JSON.stringify({ error: result.error }), { status: 500 })
    }

    return new Response(JSON.stringify(result.data), { status: 201 });
}

// Gestione delle richieste PUT
export const PUT: APIRoute = async ({ request, url }) => {

    const tableName = url.searchParams.get('table') || 'main_table'

    const body = await request.json()

    const id = url.searchParams.get('id')

    if (!id) {
        return new Response(JSON.stringify({ error: 'ID is required' }), { status: 400 })
    }

    const result = await supabaseQuery(tableName, Operation.PUT, {
        id: id,
        data: body
    })

    if (!result.success) {
        return new Response(JSON.stringify({ error: result.error }), { status: 500 });
    }

    return new Response(JSON.stringify(result.data), { status: 200 });
};

export const DELETE: APIRoute = async ({ url }) => {
    
    const tableName = url.searchParams.get('table') || 'main_table'

    const id = url.searchParams.get('id')

    if (!id) {
        return new Response(JSON.stringify({ error: 'ID is required' }), { status: 400 })
    }

    const result = await supabaseQuery(tableName, Operation.DELETE, {
        id: id
    })

    if (!result.success) {
        return new Response(JSON.stringify({ error: result.error }), { status: 500 })
    }

    return new Response(JSON.stringify(result.data), { status: 204 })
}