import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import { supabaseUpdate, supabaseQuery, supabaseInsert } from '~/providers/supabaseQueryV1';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export const GET: APIRoute = async ({ url }) => {
  return handleRequest('GET', url);
};

export const POST: APIRoute = async ({ request, url }) => {
  return handleRequest('POST', url, request);
};

export const PUT: APIRoute = async ({ request, url }) => {
  return handleRequest('PUT', url, request);
};

export const DELETE: APIRoute = async ({ url }) => {
  return handleRequest('DELETE', url);
};

const handleRequest = async (method: string, url: URL, request?: Request) => {

    const { type, ...params } = Object.fromEntries(url.searchParams)

    try {

        const response = await handleApiRequest(method, type, params, request)

        return new Response(JSON.stringify(response), { status: 200 })

    } catch (error) {

        return new Response(JSON.stringify({ error: error.message }), { status: 500 })

    }
}

const handleApiRequest = async (method: string, type: string, params: any, request?: Request) => {

    switch (type) {

        case 'insertEvent':

        if (method !== 'POST') throw new Error('Invalid method for insertEvent')

        const data = request ? await request.json() : {}

        return insertEvent(data)

        default:

        throw new Error('Unknown API request type')
        
    }
}

const insertEvent = async (data: any) => {

    const tableName = 'event_log' // Assumiamo che la tabella per gli eventi si chiami 'events'

    const result = await supabaseInsert(tableName, data)

    if (!result.success) {
        throw new Error(result.error)
    }

    return result.data
}