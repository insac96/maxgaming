import type { Types } from 'mongoose'

export interface IDBPaymentGate {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date
  
  platform: number

  name: string
  person: string
  number: string
  
  key: string
  qrcode: string

  display: boolean
}

export interface IDBPayment {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date
  
  game: Types.ObjectId
  user: Types.ObjectId
  gate: Types.ObjectId
  bonus: Types.ObjectId

  money: number
  code: string
  token: string
  qrcode: string
  
  verify: {
    status: number
    person: Types.ObjectId
    time: Date
    reason: string
  }
}