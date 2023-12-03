import type { Mongoose } from 'mongoose'
import type { IDBGlobal } from '~~/types'

import { DBWeb } from './web'
import { DBUser } from './user'
import { DBPaymentGate, DBPayment } from './payment'
import { DBCompany } from './company'
import { DBGamePlatform, DBGameCategory, DBGame } from './game'
import { DBGameUserLevel, DBGameUser } from './game/user'
import { DBGameItem } from './game/item'
import { DBGamePaymentGateBonus } from './game/payment'
import { DBGameEvent, DBGameEventHistory } from './game/event'
import { DBGameShop, DBGameShopHistory } from './game/shop'
import { DBGameGiftcode, DBGameGiftcodeHistory } from './game/giftcode'

export default (mongoose : Mongoose) : IDBGlobal => {
  return {
    Web: DBWeb(mongoose),

    User: DBUser(mongoose),

    PaymentGate: DBPaymentGate(mongoose),
    Payment: DBPayment(mongoose),

    Company: DBCompany(mongoose),

    GamePlatform: DBGamePlatform(mongoose),
    GameCategory: DBGameCategory(mongoose),
    Game: DBGame(mongoose),

    GameUserLevel: DBGameUserLevel(mongoose),
    GameUser: DBGameUser(mongoose),

    GamePaymentGateBonus: DBGamePaymentGateBonus(mongoose),

    GameItem: DBGameItem(mongoose),

    GameShop: DBGameShop(mongoose),
    GameShopHistory: DBGameShopHistory(mongoose),

    GameEvent: DBGameEvent(mongoose),
    GameEventHistory: DBGameEventHistory(mongoose),

    GameGiftcode: DBGameGiftcode(mongoose),
    GameGiftcodeHistory: DBGameGiftcodeHistory(mongoose),
  }
}