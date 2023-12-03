import jwt from 'jsonwebtoken'
import type { IDBUser } from '~~/types'

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()

  try {
    const token = getCookie(event, 'token-auth')
    if(!token) return event.context.auth = undefined
    
    const decoded = jwt.verify(token, runtimeConfig.TOKEN_SECRET) as any
    event.context.auth = decoded
  }
  catch (e:any) {
    event.context.auth = undefined
    deleteCookie(event, 'token-auth', runtimeConfig.COOKIE_CONFIG)
    return res(event, { code: 401, message: e.toString() })
  }
})