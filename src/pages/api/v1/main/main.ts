import type { APIRoute } from 'astro'
import { supabase } from '../../../../providers/supabase'
import type { postData } from '../../../../types/postData'


export const GET: APIRoute = async () => {
  
  const { data, error } = await supabase
    .from('main_table').select(`
      id,
      description,
      icon,
      image,
      logo,
      name,
      title,
      url,
      categories_tags (        
        id_area,//
        id_cat,//
        id_provider,//               
        ratings,        
        tag_3, //
        tag_4, 
        tag_5,
        AI_Summary,
        AI_think
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
    `)   
    //.order("id", { ascending: true });
    
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
export const POST: APIRoute = async ({ request }) => {
  
    const {

        /* @@ main_table @@ */

        description,
        icon,
        image,
        logo,
        name,
        title,
        url,

        /* @@ sub_main_table @@ */
        
        user_id,
        accessible,
        domain_exists,
        html_content_exists,
        is_public,
        secure, 
        status_code,
        valid_url,
        type,
        AI,
        

        /* @ categories_tag @*/

        id_area,//
        id_cat,//
        id_provider,//               
        ratings,        
        tag_3, //
        tag_4, 
        tag_5,
        AI_Summary,
        AI_think,
        
        /* @@ common @@ */

        id_src
    }: postData = await request.json()

    /* @@ post main_table @@ */

    const { data: _data, error: _error } = await supabase
        .from('main_table')
        .insert({
            description,
            icon,
            image,
            logo,
            name,
            title,
            url
        })
        .select()

    if (_error) {
        return new Response(
        JSON.stringify({
            error: _error.message,
        }),
        { status: 500 },
        )
    }

    const _id_src = _data ? _data[0].id : -1  

    const payload_sub_main_table = {
        id_src: _id_src,
        user_id,
        accessible: accessible ? true : false,
        AI: AI ? true : false,
        domain_exists:  domain_exists ? true : false,
        html_content_exists:  html_content_exists ? true : false,
        is_public: true,
        type,
        valid_url: valid_url ? true : false,
        status_code,
        secure: secure ? true : false         
    }

    const { data: __data, error: __error } = await supabase

        .from('sub_main_table')
        .insert(payload_sub_main_table)  
        .select()

    if (__error) {
      return new Response(
        JSON.stringify({
          error: __error.message,
        }),
        { status: 500 },
      )
    }
  const msg = 'inserimento avvenuto con successo'

  

  const payload = {
    id_src,
    id_area,
    id_cat: id_cat ? id_cat : -1,
    tag_3: tag_3 ? tag_3 : -1,    
    tag_4: tag_4 ? tag_4 : -1,
    tag_5: tag_5 ? tag_5 : -1,
    id_provider,
    ratings,
    AI_think,
    AI_Summary
  }

  const { data: ___data, error: ___error } = await supabase

    .from('categories_tags')
    .insert(payload)  
    .select()  

  if (___error) {
    return new Response(
      JSON.stringify({
        error: ___error.message,
      }),
      { status: 500 },
    )
  }

  return new Response(JSON.stringify({'msg': msg}), { status: 200 })

}
