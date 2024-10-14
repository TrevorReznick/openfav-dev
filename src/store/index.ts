// store.ts
import { atom } from 'nanostores'

//export const userId = atom<string | null>(null)
export const email = atom<string| null>(null)
export const id = atom<string| null>(null)
export const user_name = atom<string| null>(null)

export const isAuthenticated = atom<boolean>(false)
//userId.set('123')
//isLoggedIn.set(true)
