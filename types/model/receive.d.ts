import type { Types } from 'mongoose'

export interface IDBReceive {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  user: Types.ObjectId
  workshift: Types.ObjectId
  currency: string
  money: number
  note: string
}