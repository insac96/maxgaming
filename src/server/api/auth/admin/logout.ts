export default defineEventHandler(async (event) => {
  try {
    const runtimeConfig = useRuntimeConfig()
    deleteCookie(event, 'token-admin', runtimeConfig.COOKIE_CONFIG)
    return res(event, { message: 'Đăng xuất thành công' })
  }
  catch(e:any){
    return res(event, { code: 400, message: e.toString() })
  }
})