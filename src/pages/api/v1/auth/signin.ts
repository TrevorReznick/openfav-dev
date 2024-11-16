import type { APIRoute } from "astro"
import { supabase } from '~/providers/supabase'
import type { Provider } from "@supabase/supabase-js"

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData()
  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()
  const provider = formData.get('provider')?.toString()

  if (provider) {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider as Provider,
      options: {
        redirectTo: 
          import.meta.env.PROD
          ? import.meta.env.PUBLIC_PROD_API_URL + 'auth/callback'
          : import.meta.env.PUBLIC_DEV_API_URL + 'auth/callback'
      },
    })
    if (!import.meta.env.DEV) {
      console.log("Stai in ambiente di produzione");
      console.log(import.meta.env.PUBLIC_PROD_API_URL + 'auth/callback')
    }

    if (error) {
      return new Response(error.message, { status: 500 })
    }
    console.log('auth response data: ', data)
    return redirect(data.url)
  }

  if (!email || !password) {
    //return new Response('Email and password are required', { status: 400 })
    //return redirect('/auth-error-page')
    return redirect('/error-email-password')
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  const { access_token, refresh_token } = data.session;
  cookies.set('sb-access-token', access_token, {
    sameSite: 'strict',
    path: '/',
    secure: true,
  })
  cookies.set('sb-refresh-token', refresh_token, {
    sameSite: 'strict',
    path: '/',
    secure: true,
  })

  return redirect('/protected/page')
}

export const GET: APIRoute = async ({ cookies }) => {
  const accessToken = cookies.get('sb-access-token')

  if (!accessToken) {
    return new Response('Unauthorized', { status: 401 })
  }

  const { data, error } = await supabase.auth.getSession()

  if (error) {
    return new Response(error.message, { status: 500 })
  }

  return new Response(JSON.stringify(data), { status: 200 })
}
