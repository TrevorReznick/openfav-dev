import type { APIRoute } from "astro";
import { supabase } from "~/providers/supabase";

export const GET: APIRoute = async () => {
  const { data, error } = await supabase.from("event_log").select(
    `
      id,
      id_event_family,
      id_event_type,
      user_id,
      event_data,
      event_family (
        id,
        event_family
      ),
      event_type (
        id,
        event_type, 
        event_description
      ),
      auth_users (
        email
      )

    `
  );

  //.order("id", { ascending: true });

  if (error) {
    return new Response(
      JSON.stringify({
        error: error.message,
      }),
      { status: 500 }
    );
  }

  return new Response(JSON.stringify(data));
};
