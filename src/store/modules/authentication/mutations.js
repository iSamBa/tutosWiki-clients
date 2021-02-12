const mutations = {
  setUsername(state, payload) {
    state.username = payload;
  },
  setIsAuthenticated(state, payload) {
    state.isAuthenticated = payload;
  },
  setIsAdmin(state, payload) {
    state.isAdmin = payload;
  },
  clear(state) {
    state.username = "";
    state.isAdmin = false;
    state.isAuthenticated = false;
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
