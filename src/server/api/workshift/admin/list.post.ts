import { Types } from "mongoose"

export default defineEventHandler(async (event) => {
  try {
    authAdmin(event)

    const { size, current, sort } = await readBody(event)
    if(!size || !current) throw 'Dữ liệu phân trang sai'
    if(!sort.column || !sort.direction) throw 'Dữ liệu sắp xếp sai'

    const sorting : any = {}
    sorting[sort.column] = sort.direction == 'desc' ? -1 : 1

    const match : any = {}

    const workshift = await DB.WorkShift.aggregate([
      { $match: match },
      {
        $lookup: {
          from: "user",
          localField: "user",
          foreignField: "_id",
          as: "user",
          pipeline: [
            {
              $project: { 
                'auth.username': 1,
                profile: 1
              }
            }
          ]
        }
      },
      { $unwind: { path: '$user' } },
      {
        $lookup: {
          from: "receive",
          localField: "_id",
          foreignField: "workshift",
          as: "receive",
          pipeline: [
            {
              $group: {
                _id: null,
                money: { $sum: '$money' }
              }
            }
          ]
        }
      },
      { $unwind: { path: '$receive', preserveNullAndEmptyArrays: true } },
      {
        $lookup: {
          from: "spend",
          localField: "_id",
          foreignField: "workshift",
          as: "spend",
          pipeline: [
            {
              $group: {
                _id: null,
                money: { $sum: '$money' }
              }
            }
          ]
        }
      },
      { $unwind: { path: '$spend', preserveNullAndEmptyArrays: true } },
      {
        $project: {
          user: 1,
          start: 1,
          end: 1,
          receive: { $ifNull: ['$receive.money', 0] },
          spend: { $ifNull: ['$spend.money', 0] },
        }
      },
      {
        $facet: {
          list: [
            { $sort: sorting },
            { $skip: (current - 1) * size },
            { $limit: size },
          ],
          pagination: [
            { $count: "total" }
          ]
        }
      }
    ])

    return res(event, { result: { 
      list: workshift[0].list ? workshift[0].list : [],
      total: workshift[0].pagination ? (workshift[0].pagination[0] ? workshift[0].pagination[0].total : 0) : 0
    }})
  }
  catch(e:any){
    return res(event, { code: 400, message: e.toString() })
  }
})