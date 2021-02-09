import Vue from "vue";
import Vuex from "vuex";
import postsModule from "./modules/posts/index.js";
import burgerMenuModule from "./modules/Navbar/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    posts: postsModule,
    burgerMenu: burgerMenuModule,
  },
});
