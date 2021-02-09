import Vue from "vue";
import Vuex from "vuex";
import postsModule from "./modules/posts/index.js";
import burgerMenuModule from "./modules/Navbar/index.js";
import authenticationModule from "./modules/authentication/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: {},
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    posts: postsModule,
    burgerMenu: burgerMenuModule,
    auth: authenticationModule,
  },
});
