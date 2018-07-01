import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import ButtonPage from '@/components/ButtonPage'
import AnotherButtonPage from '@/components/AnotherButtonPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/ButtonPage',
      name: 'ButtonPage',
      component: ButtonPage
    },
    {
      path: '/AnotherButtonPage',
      name: 'AnotherButtonPage',
      component: AnotherButtonPage
    }
  ]
})
