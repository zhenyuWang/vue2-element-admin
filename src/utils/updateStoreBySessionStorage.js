import store from '@/store'
// 将store数据放入sessionStorage
export default function updateStoreBySessionStorage() {
  sessionStorage.setItem('store',JSON.stringify(store.state))
}