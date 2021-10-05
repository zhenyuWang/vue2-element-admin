import request from '@/utils/request'

const curryRequest = (url, method,data) => {
  return request(`/list/${url}`, method, data)
}
// 获取列表数据
export function apiGetList(data){
  return curryRequest('list','post',data)
}



