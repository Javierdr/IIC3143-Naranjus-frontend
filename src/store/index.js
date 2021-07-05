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
        const res = await fetch(`http://localhost:8000/users/api`, {
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
      context.commit('setCurrentUser', body[0])
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
      return state.currentUser
    }
  }
});
