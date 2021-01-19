import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    validateResult: {}
  },

  mutations: {
    increment (state) {
      state.count++
    },
    setDemoValue(state,validateResult){

      state.validateResult = validateResult

    }

  },

})
export default store;
