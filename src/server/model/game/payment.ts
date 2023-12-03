import type { Mongoose } from 'mongoose'
import type { IDBGamePaymentGateBonus } from '~~/types'

export const DBGamePaymentGateBonus = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGamePaymentGateBonus>({ 

  },{
    timestamps: true
  })

  const model = mongoose.model('gamePaymentGateBonus', schema, 'gamePaymentGateBonus')
  return model 
}