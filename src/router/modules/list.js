import Layout from '@/layout/index.vue'
export default {
  path: '/list',
  name: 'List',
  redirect:'/list/list1',
  meta:{title:'列表',icon:'el-icon-s-data',needCache:true},
  component: Layout,
  children:[
    {
      path:'list1',
      name:'List1',
      meta:{title:'列表1',needCache:true},
      component: () => import('@/views/List/List1.vue')
    },{
      path:'list2',
      name:'List2',
      meta:{title:'列表2',needCache:true},
      component: () => import('@/views/List/List2.vue')
    }
  ],
}