import Vue from 'vue'
import Vuex from 'vuex'
// Importar oauth
import oauth from './modules/oauth'
import loading from './modules/loading'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    oauth,
    loading
  }
})
