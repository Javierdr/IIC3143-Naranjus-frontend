import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import registro_visitas from '@/views/registro_visitas'
import visitas_registradas from '@/views/visitas_registradas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
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
