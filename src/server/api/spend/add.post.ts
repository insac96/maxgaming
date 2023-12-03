export default defineEventHandler(async (event) => {
  try {
    const auth = event.context.auth
    if(!auth) throw 'Không thể xác thực tài khoản'

    const { currency, money, reason } = await readBody(event)
    if(!currency) throw 'Vui lòng chọn loại tiền tệ'
    if(!!isNaN(parseInt(money)) || parseInt(money) <= 0) throw 'Số tiền nhập vào không hợp lệ'

    await DB.Spend.create({
      user: auth._id,
      workshift: auth.workshift,
      currency: currency,
      money: money,
      reason: reason
    })

    return res(event, { message: 'Thêm thành công' })
  }
  catch(e:any){
    return res(event, { code: 400, message: e.toString() })
  }
})