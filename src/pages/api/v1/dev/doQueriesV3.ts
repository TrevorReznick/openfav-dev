// src/utils/api.ts

import { createClient } from '@supabase/supabase-js'
import { supabaseQuery } from '~/providers/supabaseQuery';
import type { PostgrestFilterBuilder } from '@supabase/postgrest-js'
import type { APIRoute } from 'astro'

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey)

 // Assicurati di importare correttamente la funzione

export async function GET({ request }) {
  const { type, ...params } = Object.fromEntries(new URL(request.url).searchParams);

  try {
    const response = await handleApiRequest(type, params);
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

const handleApiRequest = async (type, params) => {

  switch (type) {
    case 'getSites':
      return await getSites()
    case 'getSite':
        return await getSite(params.id)
    case 'getCategories':
      return await getCategories()
    case 'getInfo':
      return await getInfo(params.url)    
    case 'getEvents':
      return await getEvents()
    default:
      throw new Error('Unknown API request type');
  }
};

const getSites = async () => {
    return supabaseQuery('main_table', {
      select: 'id, url, description, name, title, logo, image, icon'
    })
}

const getSite = async (id) => {
    return supabaseQuery('main_table', {
      select: 'id, url, description, name, title, logo, image, icon',
      filter: (query) => query.eq('id', parseInt(id))
    })
}

const getCategories = async () => {
  return supabaseQuery('main_table', {
    select: 'id, name',
    order: { column: 'name', ascending: true }
  })
}

const getInfo = async (url) => {
  return supabaseQuery('main_table', {
    select: 'id, url, description, name, title, logo, image, icon',
    filter: (query) => query.eq('url', url)
  })
}

const getEvents = async () => {
  return supabaseQuery('event_log', {
    select: `
      id,      
      event_type (        
        event_type, 
        event_description
      ),
      event_family (
        event_family
      )
    `
  })
}



