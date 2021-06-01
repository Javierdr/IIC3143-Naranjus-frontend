import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    visitas: [],
    visitasp: [],
    idVisitas: 0, //TODO cargar el id de db
    idVisitasp: 0 //TODO cargar el id de db
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
  }
});
