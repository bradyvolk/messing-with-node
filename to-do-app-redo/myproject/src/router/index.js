import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import VueDet from '@/components/VueDet'
import PostsManager from '@/components/PostsManager'
import Blog from '@/components/Blog'

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
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
    {
      path: '/posts-manager',
      name: 'PostsManager',
      component: PostsManager,
    }
  ]
})

export default router
