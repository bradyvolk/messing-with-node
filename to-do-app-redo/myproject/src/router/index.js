import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import VueDet from '@/components/VueDet'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/demos',
      name: 'demos',
      component: VueDet,
    },
  ]
})

export default router
