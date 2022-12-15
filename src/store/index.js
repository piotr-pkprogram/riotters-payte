import { createStore } from "vuex";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    setLocalStorage(ctx, item) {
      ctx.commit("setLocalStorage", item);
    },
  },
  modules: {},
});
