import { defineMiddleware } from 'astro:middleware';
import { supabase } from '~/providers/supabase';
import * as store from '~/store'
import {postRequest} from '~/api/apiPost'
//import { id, email, user_name, isAuthenticated, currentPath, previousPath } from '../store'

const protectedRoutes = ['/protected/dashboard', '/protected/page', '/protected/pageV0']
const redirectRoutes = ['/login', '/register', '/auth-error-page']

export const onRequest = defineMiddleware(
  async ({ locals, url, cookies, redirect }, next) => {

    /* @@ manage paths @@ */

    store.previousPath.set(store.currentPath.get())
    store.currentPath.set(url.pathname)

    const from = store.previousPath.get()
    const to = store.currentPath.get()

    if (from === '/' && to === '/login') {
      return redirect('/login')
    }
    if (from === '/login' && to === '/register') {
      return redirect('/register')
    }
    if (from === '/api/v1/auth/signout') {
      return redirect('/login')
    }

    if (protectedRoutes.includes(url.pathname)) {
      const accessToken = cookies.get('sb-access-token')
      const refreshToken = cookies.get('sb-refresh-token')
      if (!accessToken || !refreshToken) {
        return redirect('/login');
      }

      const { data, error } = await supabase.auth.setSession({
        refresh_token: refreshToken.value,
        access_token: accessToken.value,
      });

      if (error) {
        console.log('entro qui?');
        cookies.delete('sb-access-token', {
          path: '/',
        });
        cookies.delete('sb-refresh-token', {
          path: '/',
        });
        store.messageStore.set(error.message);
        return redirect('/login');
      }
      console.log('auth data', data)

      /* @@ set store @@ */
      const email_ = data.user?.email ?? '';
      store.email.set(email_);
      store.id.set(data.user?.id ?? '');
      store.isAuthenticated.set(true);
      console.log('authenticated : ', store.isAuthenticated.get());
      const [extractUsername] = email_.split('@');
      store.user_name.set(extractUsername ?? '');

      cookies.set('sb-access-token', data?.session?.access_token!, {
        sameSite: 'strict',
        path: '/',
        secure: true,
      })
      cookies.set('sb-refresh-token', data?.session?.refresh_token!, {
        sameSite: 'strict',
        path: '/',
        secure: true,
      })
      const redis_payload = {
        "accessToken": cookies.get('sb-access-token')?.value || null,
        "refreshToken": cookies.get('sb-refresh-token')?.value || null,
        "userId": data.user?.id
      }
      console.log('lauch openfav-node redis api')
      //console.log('redis payload', redis_payload)
      console.log('Sending payload:', JSON.stringify(redis_payload, null, 2))
      const result = await postRequest(redis_payload)
      console.log('result', result)

      /*
      const accessToken = cookies.get('sb-access-token');
      const refreshToken = cookies.get('sb-refresh-token');
      */
    }

    if (
      redirectRoutes.includes(url.pathname) ||
      redirectRoutes.includes(url.pathname.replace(/\/$/, ''))
    ) {
      const accessToken = cookies.get('sb-access-token')
      const refreshToken = cookies.get('sb-refresh-token')

      if (accessToken && refreshToken) {
        return redirect('/protected/dashboard')
      }
    }
    return next()
  }
);
