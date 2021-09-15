import request from '@/utils/request'

const curryRequest = (url, method,data) => {
  console.log('curry user')
  return request(`/user/${url}`, method, data)
}
// 登录
export function apiLogin(data){
  console.log('login')
  return curryRequest('login','post',data)
}