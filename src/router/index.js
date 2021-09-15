import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/Layout/index.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: "/404",
    name: "NotFund",
    hidden: true,
    meta: { notNeedAuth: true },
    component: () => import("@/views/Error/404.vue"),
  }
]
export const permissionRoutes = [
  {
    path: '/',
    name: 'Root',
    redirect:'/home',
    component: Layout,
    children:[
      {
        path:'home',
        name:"Home",
        component:() => import('@/views/Home.vue')
      }
    ]
  },{
    path:'*',
    name:'Error',
    redirect: "/404",
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
