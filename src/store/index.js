import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    visitas: [],
    visitasp: [],
    idVisitas: 0, //TODO cargar el id de db
    idVisitasp: 0, //TODO cargar el id de db
    currentUser: '',

  },
  mutations: {
    addVisitas(state, payload) {
      state.visitas.push(payload)
    },
    idVisitaCounter(state) {
      state.idVisitas++
    },
    addVisitasProgramadas(state, payload) {
      state.visitasp.push(payload)
    },
    idVisitaProgramadaCounter(state) {
      state.idVisitasp++
    },
    setCurrentUser(state, payload) {
      state.currentUser = payload;
    },
    deleteSession(state) {
      state.currentUser = '';
      localStorage.access = '';
      localStorage.refresh = '';
      sessionStorage.clear();
    }
  },
  actions: {
    addVisitasAction (context, payload) {
      context.commit('addVisitas', payload)
    },
    idVisitaCounterAction (context) {
      context.commit('idVisitaCounter')
    },
    addVisitasProgramadasAction (context, payload) {
      context.commit('addVisitasProgramadas', payload)
    },
    idVisitaProgramadaCounterAction (context) {
      context.commit('idVisitaProgramadaCounter')
    },
    async setCurrentUserAction (context, payload) {
        const res = await fetch(`${process.env.VUE_APP_BACKEND}/users/api/`, {
          method: 'get',
          cache: 'no-cache',
          mode: 'cors',
          headers: {
              'Content-Type': 'application/json',
              'Origin': 'http://localhost:8080',
              'Authorization': "Bearer " + payload,
          },
      });
      const body = await res.json();
      var base64Url = payload.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = JSON.parse(decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join('')));
      context.commit('setCurrentUser', body.filter(user => user.id == jsonPayload.user_id)[0])
    },
    deleteSessionAction (context) {
      context.commit('deleteSession');
    },
  },
  getters: {
    visitas (state) {
      return state.visitas
    },
    idVisitaCounter (state) {
      return state.idVisitas
    },
    visitasProgramadas (state) {
      return state.visitasp
    },
    idVisitaProgramadaCounter (state) {
      return state.idVisitasp
    },
    getCurrentUser (state) {
      if (localStorage.access && !state.currentUser){
        localStorage.access = "";
        localStorage.refresh = "";
      }
      return state.currentUser
    }
  }
});
