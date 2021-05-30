import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Menu from '@/components/Menu'
import NewUser from '@/components/NewUser'
import LogsEntrada from '@/components/LogsEntrada'
import LogsEntradaVU from '@/components/LogsEntradaVU'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/NewUser',
      name: 'NewUser',
      component: NewUser
    },
    {
      path: '/LogsEntrada',
      name: 'LogsEntrada',
      component: LogsEntrada
    },
    {
      path: '/LogsEntradaVU',
      name: 'LogsEntradaVU',
      component: LogsEntradaVU
    },

  ]
})
