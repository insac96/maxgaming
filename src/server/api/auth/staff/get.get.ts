import { IDBUser, IDBWorkShift } from "~~/types"
import { IDBAuthStore } from "~~/types/model/user"

export default defineEventHandler(async (event) => {
  try {
    const auth = authStaff(event)

    const user = await DB.User.findOne({ _id: auth._id }) as IDBUser
    if(!user) throw 'Không tìm thấy tài khoản xác thực'

    const workshift = await DB.WorkShift.findOne({ _id: auth.workshift }) as IDBWorkShift
    if(!workshift) throw 'Không tìm thấy dữ liệu ca làm việc'

    const authStore : IDBAuthStore = {
      profile: {
        _id: user._id,
        username: user.auth.username,
        name: user.profile.name
      },
      workshift: {
        _id: workshift._id,
        start: workshift.start
      }
    }

    return res(event, { result: authStore })
  }
  catch(e:any){
    const runtimeConfig = useRuntimeConfig()
    deleteCookie(event, 'token-staff', runtimeConfig.COOKIE_CONFIG)
    return res(event, { code: 401, message: e.toString() })
  }
})