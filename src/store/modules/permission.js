import router, { routes, permissionRoutes,resetRouter } from "@/router";

export default {
  namespaced: true,
  state: {
    routes: [],
    permissionRoutes: [],
  },
  mutations: {
    // 设置路由
    setRoutes(state, permissionRoutes) {
      state.routes = routes.concat(permissionRoutes);
      state.permissionRoutes = permissionRoutes;
    },
  },
  actions: {
    // 处理路由
    handleRoutes(context) {
      // 将权限路由添加到路由实例中
      permissionRoutes.forEach((item) => {
        router.addRoute(item);
      });
      context.commit("setRoutes", permissionRoutes);
    },
    // 重置路由
    resetRoute(context) {
      resetRouter();
      context.commit("setRoutes", []);
    },
  },
};