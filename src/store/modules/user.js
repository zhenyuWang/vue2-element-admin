import router,{asyncRoutes} from '@/router'
import store from '@/store'

// sessionStorage中获取store并更新
function updateStoreBySessionStorage() {
  sessionStorage.setItem("store", JSON.stringify(store.state));
}
export default {
  namespaced: true,
  state: {
    userInfo:{
      name:'',
      avatar:''
    }
  },
  mutations: {
    SET_USER_INFO(state,data){
      state.userInfo.name = data.name;
      state.userInfo.avatar = data.avatar;
    }
  },
  actions: {
    // 获取该用户路由权限
  getPermissionRoute() {
    return new Promise(resolve => {
        // 动态添加可访问的路由
        router.addRoutes(asyncRoutes)
        resolve()
    })
  },
  // 登录
    login({commit,dispatch},data){
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('SET_USER_INFO',{name:data.name,avatar:'https://img0.baidu.com/it/u=3233551726,336273710&fm=26&fmt=auto&gp=0.jpg'})
          // 动态添加可访问的路由
          dispatch('getPermissionRoute')
          // / 添加事件 -> 页面刷新前将store信息存储到sessionStorage
          window.addEventListener("beforeunload", updateStoreBySessionStorage);
          resolve('success')
        },200)
      })
    }
  },
  modules: {
  }
}