import router, { routes, permissionRoutes, resetRouter } from '@/router'

export default {
  namespaced: true,
  state: {
    routes: [],
  },
  mutations: {
    setRoutes(state, permissionRoutes) {
      state.routes = routes.concat(permissionRoutes)
    },
  },
  actions: {
    handleRoutes(context) {
      permissionRoutes.forEach((item) => {
        router.addRoute(item)
      })
      context.commit('setRoutes', permissionRoutes)
    },
    resetRoute(context) {
      resetRouter()
      context.commit('setRoutes', [])
    },
  },
}
