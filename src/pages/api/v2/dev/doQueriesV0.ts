// file: src/pages/api/getData.ts

import type { APIRoute } from 'astro'
import { createClient } from '@supabase/supabase-js'
import type { PostgrestFilterBuilder } from '@supabase/postgrest-js'

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

async function supabaseQuery(tableName: string, options: {

    select?: string

    order?: { 
        column: string; 
        ascending: boolean 
    }

    filter?: (query: any) => any

  }) {
        let query = supabase.from(tableName).select(options.select || '*');
    
        if (options.order) {
            query = query.order(options.order.column, { ascending: options.order.ascending });
        }
    
        if (options.filter) {
            query = options.filter(query);
        }
    
        const { data, error } = await query;

        if (error) {

            return { success: false, error }
        }

        return { success: true, data }
  }
  
  // Gestione delle richieste GET
  export const GET: APIRoute = async ({ url }) => {
    const tableName = url.searchParams.get('table') || 'main_table';
  
    const result = await supabaseQuery(tableName, {
      select: 'id, url, description, name, title, logo, image, icon',
      order: { column: 'id', ascending: true },
      // Puoi aggiungere filtri personalizzati se necessario
      // filter: (query) => query.eq('some_column', 'some_value')
    });
  
    if (!result.success) {
      return new Response(JSON.stringify({ error: result.error }), { status: 500 });
    }
  
    return new Response(JSON.stringify(result.data), { status: 200 });
  };
  
  // Gestione delle richieste POST
  export const POST: APIRoute = async ({ request, url }) => {
    const tableName = url.searchParams.get('table') || 'main_table';
    const body = await request.json();
  
    const { data, error } = await supabase.from(tableName).insert(body);
  
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  
    return new Response(JSON.stringify(data), { status: 201 });
  };
  
  // Gestione delle richieste PUT
  export const PUT: APIRoute = async ({ request, url }) => {
    const tableName = url.searchParams.get('table') || 'main_table';
    const body = await request.json();
    const id = url.searchParams.get('id');
  
    if (!id) {
      return new Response(JSON.stringify({ error: 'ID is required' }), { status: 400 });
    }
  
    const { data, error } = await supabase.from(tableName).update(body).eq('id', id);
  
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  
    return new Response(JSON.stringify(data), { status: 200 });
  };
  
  // Gestione delle richieste DELETE
  export const DELETE: APIRoute = async ({ url }) => {
    const tableName = url.searchParams.get('table') || 'main_table';
    const id = url.searchParams.get('id');
  
    if (!id) {
      return new Response(JSON.stringify({ error: 'ID is required' }), { status: 400 });
    }
  
    const { data, error } = await supabase.from(tableName).delete().eq('id', id);
  
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  
    return new Response(JSON.stringify(data), { status: 204 });
  };