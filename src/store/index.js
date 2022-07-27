import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodAnswers: [],
    myAnswers: [],
    name: ''
  },
  getters: {

  },
  mutations: {
    addNewAnswer(state, { indexArray, answerIndex }) {
      state.myAnswers[indexArray] = answerIndex
      localStorage.setItem('myAnswers', state.myAnswers)
    },
    loadAnswers(state) {
      state.myAnswers = localStorage.getItem('myAnswers')
    },
    registerName(state, name) {
      state.name = name
      state.name = localStorage.setItem('name', name)
    },
    loadName(state) {
      state.name = localStorage.getItem('name')
    }
  },
  actions: {
    ADD_NEW({ commit }, { indexArray, answerIndex }) {
      commit('addNewAnswer', { indexArray, answerIndex });

    },
    LOAD({ commit }) {
      commit('addNewAnswer');
    },
    REGISTER({ commit }, name) {
      commit('registerName', name);

    },
    LOADNAME({ commit }) {
      commit('loadName');
    }
  },
  modules: {
  }
})
