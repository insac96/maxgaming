export default defineEventHandler(async (event) => {
  try {
    const runtimeConfig = useRuntimeConfig()
    const auth = authStaff(event)

    await DB.WorkShift.updateOne({
      _id: auth.workshift
    }, {
      end: Date.now()
    })

    deleteCookie(event, 'token-staff', runtimeConfig.COOKIE_CONFIG)
    return res(event, { message: 'Đăng xuất thành công' })
  }
  catch(e:any){
    return res(event, { code: 400, message: e.toString() })
  }
})