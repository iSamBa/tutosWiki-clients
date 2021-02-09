const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  clearUser(state) {
    state.user = {};
  },
  setStatus(state, payload) {
    state.status = { ...state.status, ...payload };
  },
};

export default mutations;
