import request from '@/utils/request'

export const getEventInfo = (id: string) =>
  request({
    url: `/eventInfo/${id}`,
    method: 'get'
  })
