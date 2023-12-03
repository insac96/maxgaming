import type { Types } from 'mongoose'

export interface IDBSpend {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  user: Types.ObjectId
  workshift: Types.ObjectId
  currency: string
  money: number
  reason: string
}