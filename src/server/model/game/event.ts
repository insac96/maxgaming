import type { Mongoose } from 'mongoose'
import type { IDBGameEvent, IDBGameEventHistory } from '~~/types'

export const DBGameEvent = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameEvent>({ 

  },{
    timestamps: true
  })

  const model = mongoose.model('gameEvent', schema, 'gameEvent')
  return model 
}

export const DBGameEventHistory = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameEventHistory>({ 

  },{
    timestamps: true
  })

  const model = mongoose.model('gameEventHistory', schema, 'gameEventHistory')
  return model 
}