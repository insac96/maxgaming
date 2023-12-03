import type { Types } from 'mongoose'

export interface IDBGameEvent {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId

  type: string
  need: number
  gift: Array<{
    item: Types.ObjectId | IDBItem,
    amount: number
  }>
  display: boolean
}

export interface IDBGameEventHistory {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId
  user: Types.ObjectId
  event: Types.ObjectId

  server: string
  role: string
}