import { Types } from "mongoose"

export default defineEventHandler(async (event) => {
  try {
    const auth = authAdmin(event)

    const { size, current, sort } = await readBody(event)
    if(!size || !current) throw 'Dữ liệu phân trang sai'
    if(!sort.column || !sort.direction) throw 'Dữ liệu sắp xếp sai'

    const sorting : any = {}
    sorting[sort.column] = sort.direction == 'desc' ? -1 : 1

    const match : any = {}

    const list = await DB.User
    .find(match)
    .sort(sorting)
    .limit(size)
    .skip((current - 1) * size)

    const total = await DB.User.count(match)

    return res(event, { result: { list, total }})
  }
  catch(e:any){
    return res(event, { code: 400, message: e.toString() })
  }
})