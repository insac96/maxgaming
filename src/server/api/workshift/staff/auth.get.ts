import { Types } from "mongoose"

export default defineEventHandler(async (event) => {
  try {
    const auth = authStaff(event)

    const workshift = await DB.WorkShift.findOne({ _id: auth.workshift })
    if(!workshift) throw 'Ca làm việc không tồn tại'

    const match : any = {
      user: new Types.ObjectId(auth._id),
      workshift: new Types.ObjectId(auth.workshift),
    }

    let receive = await DB.Receive.aggregate([
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
    receive = receive[0] ? receive[0] : { banking: 0, cash: 0, total: 0 }

    let spend = await DB.Spend.aggregate([
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
    spend = spend[0] ? spend[0] : { banking: 0, cash: 0, total: 0 }

    return res(event, { result: { workshift, receive, spend }})
  }
  catch(e:any){
    return res(event, { code: 400, message: e.toString() })
  }
})