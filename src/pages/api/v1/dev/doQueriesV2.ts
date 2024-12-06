// src/utils/api.ts

import { createClient } from '@supabase/supabase-js'
import { supabaseQuery, supabaseUpdate, /*supabaseUpdate, supabaseDelete*/ } from '~/providers/supabaseQueryV1'

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey);


export async function handleRequest({ request }) {

  const { type, ...params } = Object.fromEntries(new URL(request.url).searchParams)

  const method = request.method.toUpperCase()

  try {
    const response = await handleApiRequest(method, type, params, request);
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}


const handleApiRequest = async (method, type, params, request) => {
  switch (type) {
    case 'updateSite':
      return updateSite(params.id, request.data)
    default:
      throw new Error('Unknown API request type');
  }
}



const updateSite = async (id, data) => {
  return supabaseUpdate('main_table', data, (query) => query.eq('id', parseInt(id)));
}

/*const deleteSite = async (id) => {
  return supabaseDelete('main_table', (query) => query.eq('id', parseInt(id)));
};
*/