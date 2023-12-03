import type { Types } from 'mongoose'
import type { IDBWorkShift } from './workshift'

export interface IDBUser {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  auth: {
    username: string
    password: string
    type: number
  }

  profile: {
    name: string
    email: string
    phone: string
    address: string
  }
}

export interface IDBAuthStore {
  profile: {
    _id?: Types.ObjectId | null
    username?: string | null
    name?: string | null
    type?: string | null
  }
  workshift: {
    _id?: Types.ObjectId | null
    start?: Date
  }
}