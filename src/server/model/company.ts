import type { Mongoose } from 'mongoose'
import type { IDBCompany } from '~~/types'

export const DBCompany = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBCompany>({ 

  },{
    timestamps: true
  })

  const model = mongoose.model('company', schema, 'company')
  return model 
}