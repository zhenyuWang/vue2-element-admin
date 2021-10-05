export default {
  namespaced: true,
  state: {
    // 缓存路由
    cachedViews: [],
    // 固定tabbar的路由
    fixedVisitedViews: [],
    // 访问过的路由
    visitedViews: [],
  },
  mutations: {
    // 添加缓存路由
    ADD_CACHE_VIEW(state, name) {
      if (state.cachedViews.indexOf(name) === -1) state.cachedViews.push(name);
    },
    // 删除缓存路由
    DELETE_CACHE_VIEW(state, name) {
      const index = state.cachedViews.indexOf(name);
      if (index > -1) state.cachedViews.splice(index, 1);
    },
    // 清空缓存路由
    CLEAR_CACHE_VIEW(state) {
      state.cachedViews = [];
    },
    // 添加固定路由
    ADD_FIXED_VISITED_VIEW(state, view) {
      if(!state.fixedVisitedViews.find(item => item.name===view.name)) state.fixedVisitedViews.push(view);
    },
    // 清空固定路由
    CLEAR_FIXED_VISITED_VIEW(state) {
      state.fixedVisitedViews = [];
    },
    // 添加访问过的路由
    ADD_VISITED_VIEW(state, view) {
      if(!state.visitedViews.find(item => item.name===view.name)) state.visitedViews.push(view);
      
    },
    // 删除访问过的路由
    DELETE_VISITED_VIEW(state, view) {
      state.visitedViews = state.visitedViews.filter((item) => {
        return item.name !== view.name;
      });
    },
    // 删除其他访问过的路由
    DELETE_OTHER_VISITED_VIEW(state, view) {
      // 如果当前路由在固定路由中
      if(state.fixedVisitedViews.find(item => item.name===view.name)){
        state.visitedViews = [...state.fixedVisitedViews];
        state.cachedViews = [...state.fixedVisitedViews];
      }else{
        state.visitedViews = [...state.fixedVisitedViews, view];
        state.cachedViews = [...state.fixedVisitedViews, view];
      }
      
    },
    // 清空访问过的路由
    CLEAR_VISITED_VIEW(state) {
      state.visitedViews = [...state.fixedVisitedViews];
      state.cachedViews = [...state.fixedVisitedViews];
    },
  },
  actions: {
    // 添加固定路由
    addFixedVisitedView(context, view) {
      context.commit("ADD_FIXED_VISITED_VIEW", view);
      context.commit("ADD_VISITED_VIEW", view);
    },
    // 删除访问过的路由
    deleteVisitedView(context, view) {
      context.commit("DELETE_VISITED_VIEW", view);
      context.commit("DELETE_CACHE_VIEW", view.name);
    },
  },
};
