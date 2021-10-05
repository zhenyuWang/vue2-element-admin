import store from "@/store";
// 在页面加载时读取sessionStorage里的状态信息
const sessionStore = sessionStorage.getItem("store");
if (sessionStore && sessionStore !== 'undefined') {
  store.replaceState(Object.assign({}, store.state, JSON.parse(sessionStore)));
  // 如果已经登录，刷新后初始化路由
  if (store.getters.userInfo&&store.getters.userInfo.name) {
    store.dispatch('permission/handleRoutes')
  }
}

//在页面刷新时将vuex里的信息保存到sessionStorage里
window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("store", JSON.stringify(store.state));
});
export default store;
