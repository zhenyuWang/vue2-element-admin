
import {apiLogin,apiLogout} from '@/api/user'
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
    // 登录
    login({commit,dispatch},data){
      return new Promise((resolve) => {
        apiLogin(data).then(async res => {
          commit('SET_USER_INFO',res.body)
          // 动态添加可访问的路由
          await dispatch('permission/handleRoutes',null,{root:true})
          resolve('success')
        })
      })
    },
    // 退出登录
    logout({commit,dispatch}){
      return new Promise((resolve) => {
        apiLogout().then(async () => {
          commit('SET_USER_INFO',{
            name:'',
            avatar:''
          })
          // 重置路由
          await dispatch('permission/resetRoute',null,{root:true})
          // 清空缓存路由
          commit("tagsView/CLEAR_CACHE_VIEW", null, {
            root: true,
          });
          // 情况访问过的路由
          commit("tagsView/CLEAR_VISITED_VIEW", null, {
            root: true,
          });
          // 清空固定路由
          commit("tagsView/CLEAR_FIXED_VISITED_VIEW", null, {
            root: true,
          });
          resolve('success')
        })
      })
    }
  },
  modules: {
  }
}