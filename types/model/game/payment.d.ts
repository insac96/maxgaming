import type { Types } from 'mongoose'

export interface IDBGamePaymentGateBonus {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId
  gate: Types.ObjectId

  default: number

  limit: {
    number: number
    expired: Date
  }
}