import md5 from 'md5'
import jwt from 'jsonwebtoken'
import type { IDBUser, IDBWorkShift } from '~~/types'

export default defineEventHandler(async (event) => {
  try {
    const runtimeConfig = useRuntimeConfig()
    const { username, password } = await readBody(event)
    if(!username || !password) throw 'Dữ liệu đầu vào sai'

    // User
    const user = await DB.User.findOne({ 'auth.username': username.toLowerCase() }).select('auth') as IDBUser
    if(!user) throw 'Tài khoản không tồn tại'
    if(user.auth.type > 1) throw 'Quản trị viên không thể vào ca'
    if(md5(password) != user.auth.password) throw 'Mật khẩu không chính xác'
    
    // Work Shift
    let workshift : IDBWorkShift
    const workShiftActive = await DB.WorkShift.findOne({
      $and: [
        { start: { $exists: true }},
        { end: { $exists: false }}
      ]
    }) as IDBWorkShift
    
    if(!workShiftActive){
      workshift = await DB.WorkShift.create({ 
        user: user._id,
        start: Date.now()
      })
    }
    else {
      if(workShiftActive.user.toString() != user._id.toString()) throw 'Đang có nhân viên khác trong ca làm, không thể đăng nhập'
      workshift = workShiftActive
    }
    
    const token = jwt.sign({
      _id: user._id,
      workshift: workshift._id,
      type: user.auth.type
    }, runtimeConfig.TOKEN_SECRET, { 
      expiresIn: '360d' 
    })

    setCookie(event, 'token-staff', token, runtimeConfig.COOKIE_CONFIG)
    return res(event, { message: 'Vào ca thành công' })
  }
  catch(e:any){
    return res(event, { code: 400, message: e.toString() })
  }
})