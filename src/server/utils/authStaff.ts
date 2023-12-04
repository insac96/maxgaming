import type { H3Event } from 'h3'
import jwt from 'jsonwebtoken'

export default (event: H3Event) => {
  const runtimeConfig = useRuntimeConfig()

  try {
    const token = getCookie(event, 'token-staff')
    if(!token) throw true
    
    const decoded = jwt.verify(token, runtimeConfig.TOKEN_SECRET) as any
    return decoded
  }
  catch (e:any) {
    deleteCookie(event, 'token-staff', runtimeConfig.COOKIE_CONFIG)
    return res(event, { code: 401, message: e.toString() })
  }
}