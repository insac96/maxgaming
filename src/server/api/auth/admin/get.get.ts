import { IDBUser } from "~~/types"

export default defineEventHandler(async (event) => {
  try {
    const auth = authAdmin(event)
    const user = await DB.User.findOne({ _id: auth._id }) as IDBUser
    if(!user) throw 'Không tìm thấy tài khoản xác thực'

    return res(event, {})
  }
  catch(e:any){
    const runtimeConfig = useRuntimeConfig()
    deleteCookie(event, 'token-admin', runtimeConfig.COOKIE_CONFIG)
    return res(event, { code: 402, message: e.toString() })
  }
})