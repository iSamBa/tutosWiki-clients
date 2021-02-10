const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  clear(state) {
    state.user = {};
    state.status = {
      ok: false,
      message: "",
      data: {},
    };
  },
  setStatus(state, payload) {
    state.status = { ...state.status, ...payload };
  },
};

export default mutations;
