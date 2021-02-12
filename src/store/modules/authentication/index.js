/* eslint-disable no-undef */
import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state: {
    username: "",
    isAuthenticated: false,
    isAdmin: false,
    status: {
      ok: false,
      message: "",
      data: {},
    },
  },
  mutations,
  actions,
  getters,
};
