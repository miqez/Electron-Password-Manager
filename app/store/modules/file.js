export default {
  namespaced: true,
  state() {
    return {
      json: {},
    };
  },
  getters: {
    json: ({ json }) => json,
    isJsonEmpty: ({ json }) => !Object.keys(json).length,
  },
  mutations: {
    setJson(state, payload) {
      state.json = payload;
    },
  },
};