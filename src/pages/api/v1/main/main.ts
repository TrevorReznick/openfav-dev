import type { APIRoute } from 'astro'
import { supabase } from '../../../../providers/supabase'
import type { postData } from '../../../../types/postData'



export const POST: APIRoute = async ({ request }) => {
  
    const { 
        accessible,
        AI,
        AI_Summary,
        AI_think,
        description, 
        domain_exists,
        html_content_exists,
        icon,
        id_cat,
        id_provider,
        image,
        is_public,
        logo,
        name,
        ratings,
        secure, 
        status_code, 
        tag_3, 
        tag_4, 
        tag_5,
        title,
        type,
        url,
        user_id,
        valid_url
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

}
