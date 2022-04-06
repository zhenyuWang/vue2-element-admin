import Layout from '@/layout/index.vue'
export default {
  path: '/person-center',
  name: 'PersonCenter',
  meta: { title: '个人中心', needCache: true },
  hidden: true,
  component: Layout,
  children: [
    {
      path: 'user-info',
      name: 'UserInfo',
      hidden: true,
      meta: { title: '个人中心', needCache: true },
      component: () => import('@/views/PersonCenter/index.vue')
    },
    {
      path: 'change-password',
      name: 'ChangePassword',
      hidden: true,
      meta: { title: '修改密码', needCache: true },
      component: () => import('@/views/PersonCenter/ChangePassword.vue')
    }
  ]
}
