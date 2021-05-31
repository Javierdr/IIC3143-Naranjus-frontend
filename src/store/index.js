import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    visitas: [],
    idVisitas: 0 //TODO cargar el id de db
  },
  mutations: {
    addVisitas(state, payload) {
      state.visitas.push(payload)
    },
    idVisitaCounter(state) {
      state.idVisitas++
    },
  },
  actions: {
    addVisitasAction (context, payload) {
      context.commit('addVisitas', payload)
    },
    idVisitaCounterAction (context) {
      context.commit('idVisitaCounter')
    }
  },
  getters: {
    visitas (state) {
      return state.visitas
    },
    idVisitaCounter (state) {
      return state.idVisitas
    },
  }
});
