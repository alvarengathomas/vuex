import Vue from 'vue'
import Vuex from '../../../src'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex({
  state: {
    currentThreadID: null,
    threads: [/* { id, name, messages } */]
  },
  actions,
  mutations,
  middlewares: process.env.NODE_ENV !== 'production'
    ? [Vuex.createLogger()]
    : []
})