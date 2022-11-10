import Vue from 'vue'
import Vuex from 'vuex'
import regulation from './regulation'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    regulation
  }
})
