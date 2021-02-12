<template>
  <nav class="text-white shadow-inner-lg bg-primary-200 w-full h-full">
    <div class="flex items-center justify-between">
      <div class="w-max h-full flex flex-row justify-center items-center">
        <svg
          class="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          ></path>
        </svg>
        <h1 class="text-2xl pl-2 font-bold">TutosWiki</h1>
      </div>
      <div>
        <button
          @click="toggleBurgerMenu"
          class="mr-3 lg:hidden cursor-pointer focus:outline-none"
        >
          <svg
            class="w-7 border-primary-100 border-2 rounded-md"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <div class="hidden lg:block">
          <ul class="flex flex-row items-start py-2">
            <li class="link">
              <router-link to="/">Home</router-link>
            </li>
            <li class="link">
              <router-link to="/about">About</router-link>
            </li>
            <li class="link">
              <router-link to="/">Contact</router-link>
            </li>
            <li class="link">
              <router-link to="/login">Login</router-link>
            </li>
            <li class="link">
              <button @click="logout">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Links -->
    <div id="menu" v-if="isBurgerMenuOpen">
      <ul class="flex flex-col lg:flex-row items-start py-2">
        <li class="link">
          <router-link to="/">Home</router-link>
        </li>
        <li class="link">
          <router-link to="/about">About</router-link>
        </li>
        <li class="link">
          <router-link to="/">Contact</router-link>
        </li>
        <li class="link">
          <button @click="logout">Logout</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "NavBar",
  methods: {
    ...mapActions({
      openMenu: "burgerMenu/openMenu",
      closeMenu: "burgerMenu/closeMenu",
      logoutUser :"auth/logout"
    }),
    toggleBurgerMenu() {
      if (!this.isBurgerMenuOpen) {
        this.openMenu();
      } else {
        this.closeMenu();
      }
    },
    handleBurgerMenu(){
      document.getElementById("menu").classList.contains("hidden")
        ? document.getElementById("menu").classList.remove("hidden")
        : document.getElementById("menu").classList.add("hidden");
    },
    logout(){
      this.logoutUser();
    }
  },
  computed: {
    isBurgerMenuOpen() {
      return this.$store.getters["burgerMenu/isBurgerMenuOpen"];
    },
  },
};
</script>

<style scoped>
.link {
  @apply mx-5 hover:text-secondary-100 cursor-pointer;
}
</style>