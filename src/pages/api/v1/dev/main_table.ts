import type { APIRoute } from 'astro';
import { supabase } from '~/providers/supabase';
import type { postData } from '~/types/postData';

export const GET: APIRoute = async () => {
  const { data, error } = await supabase.from('main_table').select(`
    id ,
    url ,
    description,
    name,
    title,
    logo,
    image,
    icon      
  `);
  //.order('id', { ascending: true });

  if (error) {
    return new Response(
      JSON.stringify({
        error: error.message,
      }),
      { status: 500 }
    );
  }

  return new Response(JSON.stringify(data))
}
