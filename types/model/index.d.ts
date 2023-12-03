import type { Model } from 'mongoose'
export { IDBWeb } from './web'
export { IDBUser } from './user'
export { IDBPaymentGate, IDBPayment } from './payment'
export { IDBCompany } from './company'
export { 
  IDBGamePlatform, IDBGameCategory, IDBGame,
  IDBGameUserLevel, IDBGameUser,
  IDBGameItem,
  IDBGamePaymentGateBonus,
  IDBGameEvent, IDBGameEventHistory,
  IDBGameShop, IDBGameShopHistory,
  IDBGameGiftcode, IDBGameGiftcodeHistory
} from './game'

export interface IDBGlobal {
  Web: Model<IDBWeb>

  User: Model<IDBUser>

  PaymentGate: Model<IDBPaymentGate>
  Payment: Model<IDBPayment>

  Company: Model<IDBCompany>

  GamePlatform: Model<IDBGamePlatform>
  GameCategory: Model<IDBGameCategory>
  Game: Model<IDBGame>

  GameUserLevel: Model<IDBGameUserLevel>
  GameUser: Model<IDBGameUser>

  GamePaymentGateBonus: Model<IDBGamePaymentGateBonus>

  GameItem: Model<IDBGameItem>

  GameShop: Model<IDBGameShop>
  GameShopHistory: Model<IDBGameShopHistory>

  GameEvent: Model<IDBGameEvent>
  GameEventHistory: Model<IDBGameEventHistory>

  GameGiftcode: Model<IDBGameGiftcode>
  GameGiftcodeHistory: Model<IDBGameGiftcodeHistory>
}