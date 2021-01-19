import Vue from 'vue'

const states = Vue.observable({
  message: 'hello vue',
  count: 0
})

const mutations = {
  setMessage (message) {
    states.message = message
  },
  setCount (count) {
    states.count = count
  }
}

export default {
  states,
  mutations
}
