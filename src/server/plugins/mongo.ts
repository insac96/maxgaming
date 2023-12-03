import mongoose from 'mongoose'
import Model from '../model'

export default defineNitroPlugin(async () => {
  const runtimeConfig = useRuntimeConfig()

  await mongoose.connect(runtimeConfig.MONGO_URI, {
    dbName: runtimeConfig.MONGO_DB
  })
  .then(() => {
    global.DB = Model(mongoose)
  })
  .catch(() => {
    throw createError({ statusCode: 500, message: 'Kết nối cơ sở dữ liệu thất bại' })
  })
})