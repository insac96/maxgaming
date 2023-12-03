import type { Types } from 'mongoose'

export interface IDBWeb {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  name: string
  short_name: string
  description: string
  og_image: string
  logo_image: string

  about: string
  privacy: string
  terms: string

  contact: {
    company: string
    phone: string
    email: string
    address: string
    social: {
      facebook: string
      messenger: string
      telegram: string
      zalo: string
      tiktok: string
      youtube: string
    }
  }

  google: {
    client_id: string
    client_secret: string
    client_verify: string
  }

  facebook: {
    client_id: string
    client_secret: string
    client_version: string
  }

  zalo: {
    client_id: string
    client_secret: string
    client_verify: string
  }

  tiktok: {
    client_id: string
    client_secret: string
  }
}