import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: false,
  },
  mutations: {
    SET_DARK_MODE(state, value) {
      state.darkMode = value
    }
  },
  actions: {
    setDarkMode(context, value) {
      context.commit('SET_DARK_MODE', value)
    }
  },
  modules: {
  }
})
