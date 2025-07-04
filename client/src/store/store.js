// store.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
  },

  mutations: {
    SET_USER(state, userData) {
      state.user = userData
    },
    CLEAR_USER(state) {
      state.user = null
    },
  },

  actions: {
    login({ commit }, userData) {
      commit('SET_USER', userData)
    },
    logout({ commit }) {
      commit('CLEAR_USER')
    },
  },
  getters: {
    currentUser: (state) => state.user,
  },
})
