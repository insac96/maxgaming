import md5 from "md5"

export default defineEventHandler(async (event) => {
  try {
    authStaff(event)

    const { auth, profile } = await readBody(event)
    if(!auth || !profile) throw 'Dữ liệu đầu vào sai'
    if(!auth.username) throw 'Vui lòng nhập tên tài khoản'
    if(!auth.password) throw 'Vui lòng nhập mật khẩu'
    if(!profile.name) throw 'Vui lòng nhập mật khẩu'

    const userCheck = await DB.User.findOne({
      $or: [
        {'auth.username': auth.username.toLowerCase()},
        {'profile.name': profile.name}
      ]
    }).select('_id')
    if(!!userCheck) throw 'Tên tài khoản hoặc tên nhân viên đã tồn tại'

    await DB.User.create({
      auth: {
        username: auth.username.toLowerCase(),
        password: md5(auth.password),
        type: 1
      },
      profile: profile
    })

    return res(event, { message: 'Thêm thành công' })
  }
  catch(e:any){
    return res(event, { code: 400, message: e.toString() })
  }
})