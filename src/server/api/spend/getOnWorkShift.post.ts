import { Types } from "mongoose"

export default defineEventHandler(async (event) => {
  try {
    const auth = event.context.auth
    if(!auth) throw 'Không thể xác thực tài khoản'

    const { size, current, sort } = await readBody(event)
    if(!size || !current) throw 'Dữ liệu phân trang sai'
    if(!sort.column || !sort.direction) throw 'Dữ liệu sắp xếp sai'

    const sorting : any = {}
    sorting[sort.column] = sort.direction == 'desc' ? -1 : 1

    const match : any = {
      user: new Types.ObjectId(auth._id),
      workshift: new Types.ObjectId(auth.workshift),
    }

    const list = await DB.Spend
    .find(match)
    .select('currency money reason createdAt')
    .sort(sorting)
    .limit(size)
    .skip((current - 1) * size)

    const total = await DB.Spend.count(match)

    let statistic = await DB.Spend.aggregate([
      { $match: match },
      { $project: {
        banking:  { $cond: [{$eq: ['$currency', 'BANKING']} , '$money', 0] },
        cash:  { $cond: [{$eq: ['$currency', 'CASH']} , '$money', 0] },
        money: 1,
      }},
      { $group: { 
        _id: null, 
        banking: { $sum: '$banking' },
        cash: { $sum: '$cash' },
        total: { $sum: '$money' }
      }}
    ])
    statistic = statistic[0] ? statistic[0] : { banking: 0, cash: 0, total: 0 }

    return res(event, { result: { list, total, statistic }})
  }
  catch(e:any){
    return res(event, { code: 400, message: e.toString() })
  }
})