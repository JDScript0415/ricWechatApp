import { request } from '@/utils/request'

export function getGoods(data) {
  return request('market/goods', {
    data: data
  })
}