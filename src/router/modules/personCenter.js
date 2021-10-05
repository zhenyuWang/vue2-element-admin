import Layout from '@/layout/index.vue'
export default {
  path: '/person-center',
  name: 'PersonCenter',
  meta:{title:'个人中心',needCache:true},
  hidden:true,
  component: Layout,
  children:[
    {
      path:'index',
      name:'UserInfo',
      hidden:true,
      meta:{title:'个人中心',needCache:true},
      component: () => import('@/views/PersonCenter/index.vue')
    }
  ],
}