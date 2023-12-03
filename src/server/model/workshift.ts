import type { Mongoose } from 'mongoose'
import type { IDBWorkShift } from '~~/types'

export const DBWorkShift = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBWorkShift>({ 
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    start: { type: Date, required: true },
    end: { type: Date }
  })

  const model = mongoose.model('workshift', schema, 'workshift')
  return model 
}