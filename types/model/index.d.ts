import type { Model } from 'mongoose'
export { IDBUser } from './user'
export { IDBWorkShift} from './workshift'
export { IDBReceive } from './receive'
export { IDBSpend } from './spend'

export interface IDBGlobal {
  User: Model<IDBUser>,
  WorkShift: Model<IDBWorkShift>
  Receive: Model<IDBReceive>
  Spend: Model<IDBSpend>
}