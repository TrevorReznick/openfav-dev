import { defineMiddleware } from 'astro:middleware'
import { supabase } from '~/providers/supabase'
import * as store from '~/store'
//import { id, email, user_name, isAuthenticated, currentPath, previousPath } from '../store'

const protectedRoutes = ['/protected/page']
const redirectRoutes = ['/login', '/register']

export const onRequest = defineMiddleware(
  async ({ locals, url, cookies, redirect }, next) => {

    /* manage paths */
    
    store.previousPath.set(store.currentPath.get())
    store.currentPath.set(url.pathname)

    const from = store.previousPath.get()
    const to = store.currentPath.get()

    console.log(`Tu sta venendo dalla pagina ${from} e stai andando nella pagine ${to}`)


    if (protectedRoutes.includes(url.pathname)) {
      const accessToken = cookies.get('sb-access-token')
      const refreshToken = cookies.get('sb-refresh-token')

      if (!accessToken || !refreshToken) {
        return redirect('/login')
      }

      const { data, error } = await supabase.auth.setSession({
        refresh_token: refreshToken.value,
        access_token: accessToken.value,
      })

      if (error) {
        cookies.delete('sb-access-token', {
          path: '/',
        })
        cookies.delete('sb-refresh-token', {
          path: '/',
        })
        return redirect('/login')
      }
      console.log('auth data', data)

      /* @@ set store @@ */
      const email_ = data.user?.email ?? ''
      store.email.set(email_)
      store.id.set(data.user?.id ?? '')
      store.isAuthenticated.set(true)
      console.log('authenticated : ', store.isAuthenticated.get())
      const [extractUsername] = email_.split('@')
      store.user_name.set(extractUsername ?? '')
      
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
    }

    if (redirectRoutes.includes(url.pathname) || redirectRoutes.includes(url.pathname.replace(/\/$/, ''))) {
      const accessToken = cookies.get('sb-access-token')
      const refreshToken = cookies.get('sb-refresh-token')

      if (accessToken && refreshToken) {
        return redirect('/protected/page')
      }
    }
    return next()
  },
)
