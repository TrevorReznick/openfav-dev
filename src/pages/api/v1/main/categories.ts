import type { APIRoute } from 'astro'
import { supabase } from '../../../../providers/supabase'

export const GET: APIRoute = async () => {
  console.log('API function started')
  try {
    console.log('Connecting to Supabase')
    const { data, error } = await supabase
      .from('areas')
      .select(`
        id,
        id_area,
        area,
        categories(
          id_area,
          category,
          sub_categories(
            id,
            sub_category
          )
        )
      `)
      .order("id", { ascending: true })

    console.log('Supabase query completed')

    if (error) {
      console.error('Supabase error:', error)
      throw error
    }

    console.log('Returning data')
    return new Response(JSON.stringify(data))
  } catch (error) {
    console.error('Caught error in API route:', error)
    return new Response(
      JSON.stringify({ error: 'Internal Server Error', details: error.message }),
      { status: 500 }
    )
  }
}
/*
export const GET: APIRoute = async () => {
  
  const { data, error } = await supabase

    .from('areas').select(`
        id,
        area,
        category,
        sub_categories(
            id,
            sub_category
        )
    )`)   
    .order("id", { ascending: true })
    
  if (error) {
    return new Response(
      JSON.stringify({
        error: error.message,
      }),
      { status: 500 },
    );
  }

  return new Response(JSON.stringify(data))
}
*/
