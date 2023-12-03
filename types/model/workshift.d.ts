import type { Types } from 'mongoose'

export interface IDBWorkShift {
  _id: Types.ObjectId
  user: Types.ObjectId
  start: Date
  end: Date
}