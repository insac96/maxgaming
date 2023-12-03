import type { Mongoose } from 'mongoose'
import type { IDBGlobal } from '~~/types'

import { DBUser } from './user'
import { DBWorkShift } from './workshift'
import { DBReceive } from './receive'
import { DBSpend } from './spend'

export default (mongoose : Mongoose) : IDBGlobal => {
  return {
    User: DBUser(mongoose),
    WorkShift: DBWorkShift(mongoose),
    Receive: DBReceive(mongoose),
    Spend: DBSpend(mongoose)
  }
}