import type { Types } from 'mongoose'

export * from './event'
export * from './giftcode'
export * from './item'
export * from './payment'
export * from './shop'
export * from './user'

export interface IDBGamePlatform {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date
  
  name: string
  color: string
}

export interface IDBGameCategory {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date
  
  name: string
  color: string
}

export interface IDBGame {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  company: Types.ObjectId

  platform: Types.ObjectId
  category: Types.ObjectId

  manager: Array<Types.ObjectId>
  
  name: string
  short_name: string
  description: string
  og_image: string
  logo_image: string
  article: string
  view: number
  pin: boolean
  display: boolean

  support: {
    phone: string
    email: string
    social: {
      facebook: string
      messenger: string
      telegram: string
      zalo: string
    }
  }

  api: {
    secret: string
    start: string
    server: string
    role: string
    mail: string
    recharge: string
  }
}