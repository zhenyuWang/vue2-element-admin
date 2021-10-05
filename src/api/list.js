import request from '@/utils/request'

const curryRequest = (url, method,data) => {
  return request(`/list/${url}`, method, data)
}
// 获取列表数据
export function apiGetList(data){
  return curryRequest('list','post',data)
}
// 获取详情
export function apiGetDetail(data){
  return curryRequest('detail','post',data)
}
// 编辑
export function apiUpdate(data){
  return curryRequest('update','post',data)
}
// 删除
export function apiDel(data){
  return curryRequest('del','post',data)
}



