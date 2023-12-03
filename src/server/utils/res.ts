import type { H3Event } from 'h3'
import type { IRes } from '~~/types'

export default (event: H3Event, data: IRes) => {
  setResponseStatus(event, 200)

  return {
    ...data,
    code: data.code || 200
  }
}