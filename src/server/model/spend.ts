import type { Mongoose } from 'mongoose'
import type { IDBSpend } from '~~/types'

export const DBSpend = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBSpend>({ 
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    workshift: { type: mongoose.Schema.Types.ObjectId, ref: 'workshift', required: true },
    currency: { type: String },
    money: { type: Number },
    reason: { type: String }
  },{
    timestamps: true
  })

  const model = mongoose.model('spend', schema, 'spend')
  return model 
}