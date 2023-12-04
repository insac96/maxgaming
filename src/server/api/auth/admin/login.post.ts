import md5 from 'md5'
import jwt from 'jsonwebtoken'
import type { IDBUser } from '~~/types'

export default defineEventHandler(async (event) => {
  try {
    const runtimeConfig = useRuntimeConfig()
    const { username, password } = await readBody(event)
    if(!username || !password) throw 'Dữ liệu đầu vào sai'

    // User
    const user = await DB.User.findOne({ 'auth.username': username.toLowerCase() }).select('auth') as IDBUser
    if(!user) throw 'Tài khoản không tồn tại'
    if(md5(password) != user.auth.password) throw 'Mật khẩu không chính xác'
    if(user.auth.type != 2) throw 'Bạn không phải quản trị viên'
    
    const token = jwt.sign({
      _id: user._id,
      type: user.auth.type
    }, runtimeConfig.TOKEN_SECRET, { 
      expiresIn: '360d' 
    })

    setCookie(event, 'token-admin', token, runtimeConfig.COOKIE_CONFIG)

    return res(event, { message: 'Đăng nhập thành công' })
  }
  catch(e:any){
    return res(event, { code: 400, message: e.toString() })
  }
})