import type { Mongoose } from 'mongoose'
import type { IDBGameItem } from '~~/types'

export const DBGameItem = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameItem>({ 

  },{
    timestamps: true
  })

  const model = mongoose.model('gameItem', schema, 'gameItem')
  return model 
}