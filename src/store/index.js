import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editMode: false,
    globalTrans: false
  },
  mutations: {
    toggleEditMode(state) {
      state.editMode = !state.editMode;
    },
    togglePane(state) {
      console.clear();
      state.globalTrans = true;
      console.log('transitioning?', state.globalTrans);
      setTimeout(() => {
        state.globalTrans = false;
        console.log('transitioning?: ' + state.globalTrans);
      }, 1000);
    }
  },
  actions: {
  },
  modules: {
  }
})
