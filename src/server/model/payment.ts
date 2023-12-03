import type { Mongoose } from 'mongoose'
import type { IDBPaymentGate, IDBPayment } from '~~/types'

export const DBPaymentGate = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBPaymentGate>({ 

  },{
    timestamps: true
  })

  const model = mongoose.model('paymentGate', schema, 'paymentGate')
  return model 
}

export const DBPayment = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBPayment>({ 

  })

  const model = mongoose.model('payment', schema, 'payment')
  return model 
}