import type { Types } from 'mongoose'

export interface IDBGameItem {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId

  type: string
  ID: string
  name: string
  image: string
}