export default [
  {
    path: '/404',
//  meta: {
//    title: '页面不存在',
//    requiresAuth: false
//  },
    component: (resolve) => require(['@/module/404'], resolve)
  },
  {
    path: '*',
    redirect: '/404'
  }
]
