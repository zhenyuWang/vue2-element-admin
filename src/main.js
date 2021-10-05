import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/utils/cacheStore'
import '@/styles/index.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 如果是开发环境，引入mock
process.env.NODE_ENV==='development'&&require('../mock/index')

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
