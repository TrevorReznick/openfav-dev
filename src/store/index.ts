import { atom } from 'nanostores'

//export const userId = atom<string | null>(null)
export const email = atom<string| null>(null)
export const id = atom<string| null>(null)
export const user_name = atom<string| null>(null)

export const isAuthenticated = atom<boolean>(false)

export const currentPath = atom<string>('/')
export const previousPath = atom<string>('/')
//userId.set('123')
//isLoggedIn.set(true)
export const messageStore = atom<string>('')
