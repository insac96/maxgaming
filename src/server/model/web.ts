import type { Mongoose } from 'mongoose'
import type { IDBWeb } from '~~/types'

export const DBWeb = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBWeb>({ 

  },{
    timestamps: true
  })

  const model = mongoose.model('web', schema, 'web')
  return model 
}