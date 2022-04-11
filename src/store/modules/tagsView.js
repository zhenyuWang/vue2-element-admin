export default {
  namespaced: true,
  state: {
    cachedViews: [],
    fixedVisitedViews: [],
    visitedViews: [],
  },
  mutations: {
    ADD_CACHE_VIEW(state, name) {
      if (state.cachedViews.includes(name)) return
      state.cachedViews.push(name)
    },
    DELETE_CACHE_VIEW(state, name) {
      const index = state.cachedViews.indexOf(name)
      if (index > -1) state.cachedViews.splice(index, 1)
    },
    CLEAR_CACHE_VIEW(state) {
      state.cachedViews = []
    },
    ADD_FIXED_VISITED_VIEW(state, view) {
      if (state.fixedVisitedViews.find((item) => item.name === view.name)) return
      state.fixedVisitedViews.push(view)
    },
    CLEAR_FIXED_VISITED_VIEW(state) {
      state.fixedVisitedViews = []
    },
    ADD_VISITED_VIEW(state, view) {
      if (state.visitedViews.find((item) => item.name === view.name)) return
      state.visitedViews.push(view)
    },
    DELETE_VISITED_VIEW(state, name) {
      state.visitedViews = state.visitedViews.filter((item) => {
        return item.name !== name
      })
    },
    DELETE_OTHER_VISITED_VIEW(state, view) {
      if (state.fixedVisitedViews.find((item) => item.name === view.name)) {
        state.visitedViews = [...state.fixedVisitedViews]
        state.cachedViews = [...state.fixedVisitedViews]
      } else {
        state.visitedViews = [...state.fixedVisitedViews, view]
        state.cachedViews = [...state.fixedVisitedViews, view]
      }
    },
    CLEAR_VISITED_VIEW(state) {
      state.visitedViews = [...state.fixedVisitedViews]
      state.cachedViews = [...state.fixedVisitedViews]
    },
  },
  actions: {
    addFixedVisitedView(context, view) {
      context.commit('ADD_FIXED_VISITED_VIEW', view)
      context.commit('ADD_VISITED_VIEW', view)
    },
    deleteVisitedView(context, view) {
      context.commit('DELETE_VISITED_VIEW', view.name)
      context.commit('DELETE_CACHE_VIEW', view.name)
    },
  },
}
