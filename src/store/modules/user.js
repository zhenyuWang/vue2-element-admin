import router,{permissionRoutes} from '@/router'
import store from '@/store'
import {apiLogin} from '@/api/user'

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
        permissionRoutes.forEach((item) => {
          router.addRoute(item);
        });
        resolve()
    })
  },
  // 登录
    login({commit,dispatch},data){
      return new Promise((resolve) => {
        apiLogin(data).then(res => {
          console.log('res',res);
          commit('SET_USER_INFO',res.body)
          // 动态添加可访问的路由
          dispatch('getPermissionRoute')
          // / 添加事件 -> 页面刷新前将store信息存储到sessionStorage
          window.addEventListener("beforeunload", updateStoreBySessionStorage);
          resolve('success')
        })
      })
    }
  },
  modules: {
  }
}