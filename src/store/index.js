import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editMode: false
  },
  mutations: {
    toggleEditMode(state) {
      state.editMode = !state.editMode;
    }
  },
  actions: {
  },
  modules: {
  }
})
