import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import { supabaseQuery, supabaseUpdate } from '~/providers/supabaseQueryV1';

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

    return new Response(JSON.stringify(response), { status: 200 });

  } catch (error) {

    return new Response(JSON.stringify({ error: error.message }), { status: 500 })

  }
}

const handleApiRequest = async (method: string, type: string, params: any, request?: Request) => {
  switch (type) {
    case 'updateSite':
      if (method !== 'PUT') throw new Error('Invalid method for updateSite');
      const data = request ? await request.json() : {};
      return updateSite(params.id, data);
    case 'insertEvent':
      if (method !== 'POST') throw new Error('Invalid method for insertEvent');
      return insertEvent()
    case 'getSites':
      if (method !== 'GET') throw new Error('Invalid method for getSites');
      return getSites(params);
    case 'deleteSite':
      if (method !== 'DELETE') throw new Error('Invalid method for deleteSite');
      return deleteSite(params.id);
    default:
      throw new Error('Unknown API request type');
  }
};

const updateSite = async (id: string, data: any) => {
  return supabaseUpdate('main_table', data, (query) => query.eq('id', parseInt(id)));
};

const insertEvent = async () => {
  // Implementa la logica per inserire un evento
  return { message: 'Event inserted successfully' };
};

const getSites = async (params: any) => {
  const tableName = params.table || 'main_table';
  const select = params.select || 'id, url, description, name, title, logo, image, icon';
  const orderColumn = params.order_column || 'id';
  const orderAscending = params.order_ascending === 'true';

  const result = await supabaseQuery(tableName, 'GET', {
    select: select,
    order: {
      column: orderColumn,
      ascending: orderAscending,
    },
  });

  if (!result.success) {
    throw new Error(result.error);
  }

  return result.data;
};

const deleteSite = async (id: string) => {
  return supabaseDelete('main_table', (query) => query.eq('id', parseInt(id)));
};