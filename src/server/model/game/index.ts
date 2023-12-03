import type { Mongoose } from 'mongoose'
import type { IDBGamePlatform, IDBGameCategory, IDBGame } from '~~/types'

export const DBGamePlatform = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGamePlatform>({ 

  },{
    timestamps: true
  })

  const model = mongoose.model('gamePlatform', schema, 'gamePlatform')
  return model 
}

export const DBGameCategory = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameCategory>({ 

  },{
    timestamps: true
  })

  const model = mongoose.model('gameCategory', schema, 'gameCategory')
  return model 
}

export const DBGame = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGame>({ 

  },{
    timestamps: true
  })

  const model = mongoose.model('game', schema, 'game')
  return model 
}