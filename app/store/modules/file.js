export default {
  namespaced: true,
  state() {
    return {
      json: {},
    };
  },
  getters: {
    json: ({ json }) => json,
  },
  mutations: {
    setJson(state, payload) {
      state.json = payload;
    },
  },
};