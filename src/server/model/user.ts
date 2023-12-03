import type { Mongoose } from 'mongoose'
import type { IDBUser } from '~~/types'

export const DBUser = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBUser>({ 

  },{
    timestamps: true
  })

  const model = mongoose.model('user', schema, 'user')
  return model 
}