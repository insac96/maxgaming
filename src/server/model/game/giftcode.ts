import type { Mongoose } from 'mongoose'
import type { IDBGameGiftcode, IDBGameGiftcodeHistory } from '~~/types'

export const DBGameGiftcode = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameGiftcode>({ 

  },{
    timestamps: true
  })

  const model = mongoose.model('gameGiftcode', schema, 'gameGiftcode')
  return model 
}

export const DBGameGiftcodeHistory = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameGiftcodeHistory>({ 

  },{
    timestamps: true
  })

  const model = mongoose.model('gameGiftcodeHistory', schema, 'gameGiftcodeHistory')
  return model 
}