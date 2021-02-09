const mutations = {
  set(state, payload) {
    state.user = payload;
  },
  clear(state) {
    state.user = {};
  },
};

export default mutations;
