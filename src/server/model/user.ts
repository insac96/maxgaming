import md5 from 'md5'
import type { Mongoose } from 'mongoose'
import type { IDBUser } from '~~/types'

export const DBUser = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBUser>({ 
    auth: {
      username: { type: String, required: true },
      password: { type: String, required: true },
      type: { type: Number, required: true },
    },

    profile: {
      name: { type: String, default: '' },
      email: { type: String, default: '' },
      phone: { type: String, default: '' },
      address: { type: String, default: '' },
    }
  },{
    timestamps: true
  })

  const model = mongoose.model('user', schema, 'user')

  const autoCreate = async () => {
    const test = await model.count({ 'auth.username' : 'test' })
    if(test == 0){
      await model.create({
        auth: {
          username: 'test',
          password: md5('123123'),
          type: 1
        }
      })
    }

    const admin = await model.count({ 'auth.username' : 'admin' })
    if(admin == 0){
      await model.create({
        auth: {
          username: 'admin',
          password: md5('123123'),
          type: 2
        }
      })
    }
  }
  autoCreate()

  return model 
}