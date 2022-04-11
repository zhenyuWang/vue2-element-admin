import store from '@/store'

const sessionStore = sessionStorage.getItem('store')

if (sessionStore && sessionStore !== 'undefined') {
  store.replaceState(Object.assign({}, store.state, JSON.parse(sessionStore)))
  if (store.getters.userInfo && store.getters.userInfo.userId) {
    store.dispatch('permission/handleRoutes')
  }
}

window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('store', JSON.stringify(store.state))
})

export default store
