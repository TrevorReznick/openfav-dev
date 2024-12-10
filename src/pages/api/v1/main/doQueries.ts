import type { APIRoute } from 'astro'
import { createClient } from '@supabase/supabase-js'
import { supabaseUpdate, supabaseQuery, supabaseInsert } from '~/providers/supabaseQueryV1'

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey)

export const GET: APIRoute = async ({ url }) => {
  return handleRequest('GET', url)
};

export const POST: APIRoute = async ({ request, url }) => {
  return handleRequest('POST', url, request)
};

export const PUT: APIRoute = async ({ request, url }) => {
  return handleRequest('PUT', url, request)
};

export const DELETE: APIRoute = async ({ url }) => {
  return handleRequest('DELETE', url)
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
    case 'getSubCategories':
      if (method !== 'GET') throw new Error('Invalid method for get event')
        const getSubCategoriesData = request ? await request.json() : {}
        return getSubCategories()
    case 'getCategories':
      if (method !== 'GET') throw new Error('Invalid method for get event')
        const getCategoriesData = request ? await request.json() : {}
        return getCategories()
    case 'getAreas':
      if (method !== 'GET') throw new Error('Invalid method for get event')
        const getAreasData = request ? await request.json() : {}
        return getAreas()
    case 'getTags':
      if (method !== 'GET') throw new Error('Invalid method for get event')
        const getSitesTagsData = request ? await request.json() : {}
        return getTags()  
    case 'getSites':
      if (method !== 'GET') throw new Error('Invalid method for get event')
        const insertSitesData = request ? await request.json() : {}
        return getSites()//getSiteById
     case 'getSiteById': {
      if (method !== 'GET') throw new Error('Invalid method for getSiteById')
        const { id } = params; // Ottieni l'id dai parametri
        if (!id) throw new Error('ID is required for getSiteById')
        return getSite(id); // Chiama la funzione getSite con l'id
      }
    
    case 'insertEvent':
      if (method !== 'POST') throw new Error('Invalid method for insertEvent')
        const insertData = request ? await request.json() : {}
        return insertEvent(insertData)
    case 'updateEvent':
      if (method !== 'PUT') throw new Error('Invalid method for updateEvent')
        const updateData = request ? await request.json() : {}
        return updateEvent(updateData, updateData.id)
    default:
        throw new Error('Unknown API request type')
    }
}

const insertEvent = async (data: any) => {
    const tableName = 'event_log'
    const result = await supabaseInsert(tableName, data)
    if (!result.success) {
        throw new Error(result.error)
    }
    return result.data
}

const updateEvent = async (data: any, id: string) => {

  const tableName = 'event_log'; // Assumiamo che la tabella per gli eventi si chiami 'event_log'

  const result = await supabaseUpdate(tableName, data, (query) => query.eq('id', parseInt(id)))

  if (!result.success) {
    throw new Error(result.error);
  }

  return result.data;
}

const getTags = async () => {
  return await supabaseQuery('categories_tags', {
    select: `
      id_src,
      id_area,      
      id_cat,
      tag_3,
      tag_4,
      tag_5 
    `,
    order: {
      column: 'id_src', // Colonna da ordinare
      ascending: true    // Ordine ascendente (true) o discendente (false)
    }
  })
}

const getAreas = async () => {
  return await supabaseQuery('areas', {
    select: `
      id_area,
      area
    `,
    order: {
      column: 'id_area', // Colonna da ordinare
      ascending: true    // Ordine ascendente (true) o discendente (false)
    }
  })
}

const getCategories = async () => {
  return await supabaseQuery('categories', {
    select: `
      id,
      category
    `,
    order: {
      column: 'id', // Colonna da ordinare
      ascending: true    // Ordine ascendente (true) o discendente (false)
    }
  })
}

const getSubCategories = async () => {
  return await supabaseQuery('sub_categories', {
    select: `
      id,
      id_category,
      sub_category
    `,
    order: {
      column: 'id', // Colonna da ordinare
      ascending: true    // Ordine ascendente (true) o discendente (false)
    }
  })
}

const getSites = async () => {
  return await supabaseQuery('main_table', {
    select: `
      id,
      description,
      icon,
      image,
      logo,
      name,
      title,
      url,
      categories_tags ( 
        id_area,
        id_cat,
        tag_3,
        tag_4,
        tag_5,
        id_provider,
        ratings,
        AI_think,
        AI_summary
      ),
      sub_main_table (
        user_id,
        accessible,
        domain_exists,
        html_content_exists,
        is_public,
        secure, 
        status_code,
        valid_url,
        type,
        AI
      )
    `
  })
}
const getSite = async (id: string | number) => {
  return await supabaseQuery('main_table', {
    select: `
      id,
      description,
      icon,
      image,
      logo,
      name,
      title,
      url
      )
    `,
    filter: (query) => query.eq('id', id)
  })
}


