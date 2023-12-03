import type { Types } from 'mongoose'

export interface IDBUser {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  auth: {
    username: string
    password: string
    social: {
      facebook: string
      zalo: string
      google: string
      tiktok: string
    }
    type: number
    block: boolean
  }

  info: {
    nickname: string
    email: string
    phone: string
    avatar: string
    address: string
    social: {
      facebook: string
      zalo: string
      google: string
      tiktok: string
    }
  }

  currency: {
    diamond: number
  }
}