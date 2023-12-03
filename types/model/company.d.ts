import type { Types } from 'mongoose'

export interface IDBCompany {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  founder: Types.ObjectId

  name: string
  short_name: string
  description: string
  og_image: string
  logo_image: string

  about: string
  privacy: string
  terms: string

  contact: {
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

  display: boolean
}