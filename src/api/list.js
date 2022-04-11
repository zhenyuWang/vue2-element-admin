import request from '@/utils/request'

const curryRequest = (url, method, data) => {
  return request(`/list/${url}`, method, data)
}

export function apiGetList(data) {
  return curryRequest('list', 'post', data)
}

export function apiGetDetail(data) {
  return curryRequest('detail', 'post', data)
}

export function apiUpdate(data) {
  return curryRequest('update', 'post', data)
}

export function apiDel(data) {
  return curryRequest('del', 'post', data)
}
