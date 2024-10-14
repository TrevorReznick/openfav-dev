import type { APIRoute } from 'astro'
import { supabase } from '../../../../providers/supabase'
/*****/

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  console.log("Callback ricevuta, elaborazione in corso...");
  const authCode = url.searchParams.get('code')
  if (!authCode) {
    console.log("Nessun codice fornito");
    return new Response('No code provided', { status: 400 })
  }
  console.log("Codice ricevuto, scambio per sessione...");
  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode)
  if (error) {
    console.error("Errore durante lo scambio del codice:", error);
    return new Response(error.message, { status: 500 })
  }
  console.log("Sessione ottenuta, impostazione dei cookie...");
  const { access_token, refresh_token } = data.session
  // ... (il resto del tuo codice per impostare i cookie)

  console.log("Cookie impostati, reindirizzamento alla dashboard...");
  return redirect('/test/test-reusable')
};
