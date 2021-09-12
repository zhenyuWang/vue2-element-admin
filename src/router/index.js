import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/Layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },{
    path:'*',
    name:'NotFund',
    component:() => import('@/views/Error/404.vue')
  }
]
export const asyncRoutes = [
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
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
