import type { Types } from 'mongoose'

export interface IDBGameGiftcode {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId

  code: string
  limit: number
  server: Array<string>
  gift: Array<{
    item: Types.ObjectId,
    amount: number
  }>
  expired: Date
  display: boolean
}

export interface IDBGameGiftcodeHistory {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId
  user: Types.ObjectId
  giftcode: Types.ObjectId
  
  server: string
  role: string
}