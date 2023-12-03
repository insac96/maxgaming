import type { Types } from 'mongoose'

export interface IDBGameShop {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId
  item: Types.ObjectId

  price: number
  limit: number
  display: boolean
}

export interface IDBGameShopHistory {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId
  user: Types.ObjectId
  item: Types.ObjectId
  
  price: number
  amount: number
  server: string
  role: string
}