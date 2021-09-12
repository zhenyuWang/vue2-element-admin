import store from "@/store";
// 在页面加载时读取sessionStorage里的状态信息
const sessionStore = sessionStorage.getItem("store");
if (sessionStore && sessionStore !== 'undefined') {
  store.replaceState(Object.assign({}, store.state, JSON.parse(sessionStore)));
  // 如果已经登录，刷新后初始化路由
  if (store.getters.userInfo&&store.getters.userInfo.name) {
    store.dispatch('user/getPermissionRoute')
  }
}
export default store;
