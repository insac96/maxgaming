import type { Mongoose } from 'mongoose'
import type { IDBGameShop, IDBGameShopHistory } from '~~/types'

export const DBGameShop = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameShop>({ 

  },{
    timestamps: true
  })

  const model = mongoose.model('gameShop', schema, 'gameShop')
  return model 
}

export const DBGameShopHistory = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameShopHistory>({ 

  },{
    timestamps: true
  })

  const model = mongoose.model('gameShopHistory', schema, 'gameShopHistory')
  return model 
}