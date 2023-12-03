import type { IDBGlobal } from './model'

export * from './model'

export interface IRes {
  code? : number
  message? : string
  result? : any
}

declare global {
  var DB : IDBGlobal
}