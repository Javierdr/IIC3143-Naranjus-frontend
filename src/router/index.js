import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Register from '@/components/Register'
import Menu from '@/components/Menu'
import NewUser from '@/components/NewUser'
import Profile from '@/components/Profile'
import PlatesPage from '@/components/PlatesPage'
import registro_visitas from '@/views/registro_visitas'
import visitas_registradas from '@/views/visitas_registradas'
import programar_visitas from '@/views/programar_visitas'
import visitas_programadas from '@/views/visitas_programadas'
import validacion_visita_peaton from '@/views/validacion_visita_peaton'
import patentes from '@/views/patentes'
import programar_proveedor from '@/views/programar_proveedor'
import {store} from '@/store';

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
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/NewUser',
      name: 'NewUser',
      component: NewUser
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/plates',
      name: 'PlatesPage',
      component: PlatesPage,
      meta: {
        requiresAuth: true,
        adminRole: true,
      }
    },
    {
      path: '/registro_visitas',
      name: 'registro_visitas',
      component: registro_visitas,
      meta: {
        requiresAuth: true,
        adminRole: true,
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
    {
      path: '/programar_visitas',
      name: 'programar_visitas',
      component: programar_visitas,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/visitas_programadas',
      name: 'visitas_programadas',
      component: visitas_programadas,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/validacion_peaton',
      name: 'validacion_visita_peaton',
      component: validacion_visita_peaton,
      meta: {
        requiresAuth: true,
        adminRole: true,
      }
    },
    {
      path: '/programar_proveedor',
      name: 'programar_proveedor',
      component: programar_proveedor,
      meta: {
        requiresAuth: true,
        adminRole: true,
      }
    },
    {
      path: '/patentes',
      name: 'patentes',
      component: patentes,
      meta: {
        requiresAuth: true,
        adminRole: true,
      }
    },
    
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (localStorage.access){
      const currentUser = store.getters.getCurrentUser;
      if (to.meta.adminRole) {
        if (currentUser.is_admin){
          next();
        } else {
          next('/');
        }
      }
      next();
    } else {
      next('/');
    }
  } else if (to.meta.requiresVisitor) {
    if (localStorage.access) {
      next('/Menu');
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router;
