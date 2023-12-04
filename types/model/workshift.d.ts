import type { Types } from 'mongoose'

export interface IDBWorkShift {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date
  
  user: Types.ObjectId
  start: Date
  end: Date
}