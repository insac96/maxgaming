import type { Mongoose } from 'mongoose'
import type { IDBReceive } from '~~/types'

export const DBReceive = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBReceive>({ 
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    workshift: { type: mongoose.Schema.Types.ObjectId, ref: 'workshift', required: true },
    currency: { type: String },
    money: { type: Number },
    note: { type: String }
  },{
    timestamps: true
  })

  const model = mongoose.model('receive', schema, 'receive')
  return model 
}