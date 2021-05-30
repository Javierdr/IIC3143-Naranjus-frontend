import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import PlatesPage from '@/components/PlatesPage'

Vue.use(Router)


export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/plates',
      name: 'PlatesPage',
      component: PlatesPage
    }
  ]
})
