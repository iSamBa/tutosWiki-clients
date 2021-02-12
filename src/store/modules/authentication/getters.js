const getters = {
  getUsername: (state) => {
    return state.username;
  },
  isAuthenticated: (state) => {
    return state.isAuthenticated;
  },
  isAdmin: (state) => {
    return state.isAdmin;
  },
  getStatus: (state) => {
    return state.status;
  },
};

export default getters;
