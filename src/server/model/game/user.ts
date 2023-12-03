import type { Mongoose } from 'mongoose'
import type { IDBGameUserLevel, IDBGameUser } from '~~/types'

export const DBGameUserLevel = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameUserLevel>({ 

  },{
    timestamps: true
  })

  const model = mongoose.model('gameUserLevel', schema, 'gameUserLevel')
  return model 
}

export const DBGameUser = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameUser>({ 

  },{
    timestamps: true
  })

  const model = mongoose.model('gameUser', schema, 'gameUser')
  return model 
}