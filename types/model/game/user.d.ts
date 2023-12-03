import type { Types } from 'mongoose'

export interface IDBGameUserLevel {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId

  number: number

  need: {
    login: number
    pay: {
      money: number
      count: number
    }
    spend: {
      coin: number
      count: number
    }
  }

  limit: {
    pay: {
      day: {
        money: number
        count: number
      }
      month: {
        money: number
        count: number
      }
    }
    spend: {
      day: {
        coin: number
        count: number
      }
      month: {
        coin: number
        count: number
      }
    }
  }

  privilege: {
    bonus_pay: number
    discount_shop: number
  }
}

export interface IDBGameUser {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId
  user: Types.ObjectId
  level: Types.ObjectId

  currency: {
    coin: number
  }

  login: {
    month: number
    total: number
    updatedAt: Date
  }

  pay: {
    total: {
      money: number
      count: number
    },
    day: {
      money: number
      count: number
    },
    month: {
      money: number
      count: number
    }
  }

  spend: {
    total: {
      coin: number
      count: number
    },
    day: {
      coin: number
      count: number
    },
    month: {
      coin: number
      count: number
    }
  }
}