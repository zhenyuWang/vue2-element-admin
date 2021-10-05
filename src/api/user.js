import request from '@/utils/request'

const curryRequest = (url, method,data) => {
  return request(`/user/${url}`, method, data)
}
// 登录
export function apiLogin(data){
  return curryRequest('login','post',data)
}
// 退出登录
export function apiLogout(){
  return curryRequest('logout','get')
}
// 修改密码
export function apiChangePassword(data){
  return curryRequest('changePassword','post',data)
}



