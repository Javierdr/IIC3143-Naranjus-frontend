import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import PlatesPage from '@/components/PlatesPage'
import registro_visitas from '@/views/registro_visitas'
import visitas_registradas from '@/views/visitas_registradas'

Vue.use(Router)


const router =  new Router({
  // mode : 'history', // TODO <- esto hace un reload entre paginas deja de ser un "one page app" e impide que funcione vuex
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: {
        requiresVisitor: true,
      }
    },
    {
      path: '/plates',
      name: 'PlatesPage',
      component: PlatesPage,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/registro_visitas',
      name: 'registro_visitas',
      component: registro_visitas,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/visitas_registradas',
      name: 'visitas_registradas',
      component: visitas_registradas,
      meta: {
        requiresAuth: true,
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (localStorage.access){
      next();
    } else {
      next('/');
    }
  } else if (to.meta.requiresVisitor) {
    if (localStorage.access) {
      next('/registro_visitas');
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router;
