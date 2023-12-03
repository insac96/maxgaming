export default defineEventHandler(async (event) => {
  try {
    const runtimeConfig = useRuntimeConfig()
    const auth = event.context.auth
    if(!auth) throw 'Không thể xác thực tài khoản'

    await DB.WorkShift.updateOne({
      _id: auth.workshift
    }, {
      end: Date.now()
    })

    deleteCookie(event, 'token-auth', runtimeConfig.COOKIE_CONFIG)
    return res(event, { message: 'Đăng xuất thành công' })
  }
  catch(e:any){
    return res(event, { code: 400, message: e.toString() })
  }
})