import Vue from 'vue'
import Router from 'vue-router'
import error from './error'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: (resolve) => require(['@/components/HelloWorld'], resolve)
    },
  // 404,500 错误页面
  ...error
  ]
})
