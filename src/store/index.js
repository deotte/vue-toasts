import { createStore } from 'vuex'

export default createStore({
  state: {
    toasts: []
  },
  mutations: {
    addToast(state, toast) {
      state.toasts.push(toast);
    },
    clearToast(state, title) {
      const index = state.toasts.findIndex((toast) => toast.title === title);
      state.toasts.splice(index, 1);
    }
  },
  actions: {
  },
  modules: {
  }
})
