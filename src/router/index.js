import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import PlatesPage from '@/components/PlatesPage'
import registro_visitas from '@/views/registro_visitas'
import visitas_registradas from '@/views/visitas_registradas'

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
    },
    {
      path: '/registro_visitas',
      name: 'registro_visitas',
      component: registro_visitas
    },
    {
      path: '/visitas_registradas',
      name: 'visitas_registradas',
      component: visitas_registradas
    },
  ]
})
