import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index.vue'
import store from '@/store'

import list from './modules/list'
import personCenter from './modules/personCenter'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    meta: { notNeedAuth: true },
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/404',
    name: 'NotFund',
    hidden: true,
    meta: { notNeedAuth: true },
    component: () => import('@/views/Error/404.vue')
  }
]
export const permissionRoutes = [
  {
    path: '/',
    name: 'Root',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'Home',
        meta: { title: '首页', icon: 'el-icon-s-home', needCache: true, fixed: true },
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  list,
  personCenter,
  {
    path: '*',
    name: 'Error',
    hidden: true,
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// 重置路由
export function resetRouter() {
  const newRouter = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
  })
  router.matcher = newRouter.matcher
}

// 路由前置守卫
router.beforeEach((to, from, next) => {
  // 免登录白名单
  const whiteList = ['Login', 'NotFund']
  // 如果未登录 并且目标路由不在白名单
  if (!store.getters.userInfo.userId && whiteList.indexOf(to.name) === -1) next({ name: 'Login' })
  else next()
})

// 路由后置守卫
router.afterEach((to) => {
  // 添加路由缓存
  if (to.name && to.meta.needCache) {
    store.commit('tagsView/ADD_CACHE_VIEW', to.name)
  }
  // 添加访问过路由  直接存入to对象会导致 JSON.stringify 的时候因为循环引用报错
  if (to.meta && !to.meta.notNeedAuth)
    if (to.meta.fixed)
      store.dispatch('tagsView/addFixedVisitedView', {
        name: to.name,
        fullPath: to.fullPath,
        meta: to.meta
      })
    else
      store.commit('tagsView/ADD_VISITED_VIEW', {
        name: to.name,
        fullPath: to.fullPath,
        meta: to.meta
      })
})

export default router
