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
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/404',
    name: 'NotFund',
    hidden: true,
    meta: { notNeedAuth: true },
    component: () => import('@/views/Error/404.vue'),
  },
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
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  list,
  personCenter,
  {
    path: '*',
    name: 'Error',
    hidden: true,
    redirect: '/404',
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export function resetRouter() {
  const newRouter = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: routes,
  })
  router.matcher = newRouter.matcher
}

router.beforeEach((to, from, next) => {
  const whiteList = ['Login', 'NotFund']

  if (!store.getters.userInfo.userId && whiteList.indexOf(to.name) === -1) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

router.afterEach((to) => {
  if (to.name && to.meta.needCache) {
    store.commit('tagsView/ADD_CACHE_VIEW', to.name)
  }

  if (to.meta === undefined || to.meta.notNeedAuth) {
    return
  }

  if (to.meta.fixed) {
    store.dispatch('tagsView/addFixedVisitedView', {
      name: to.name,
      fullPath: to.fullPath,
      meta: to.meta,
    })
  } else {
    store.commit('tagsView/ADD_VISITED_VIEW', {
      name: to.name,
      fullPath: to.fullPath,
      meta: to.meta,
    })
  }
})

export default router
