<template>
  <div
    id="app"
    class="h-full w-full bg-gradient-to-tr to-secondary-200 from-secondary-100 text-white flex flex-col items-start"
  >
    <nav-bar v-if="isLoggedIn" class="h-10" />
    <div
      @click="closeBurgerMenu"
      id="main"
      class="flex min-h-screen h-full w-full justify-center items-center"
    >
      <router-view />
    </div>
  </div>
</template>
<script>
import NavBar from "./components/NavBar/NavBar.vue";
import { mapActions } from "vuex";

export default {
  components: {
    NavBar,
  },
  data: () => {
    return {
      isLoggedIn: true,
    };
  },

  methods: {
    ...mapActions({ closeMenu: "burgerMenu/closeMenu" }),
    closeBurgerMenu() {
      if (this.isBurgerMenuOpen) {
        this.closeMenu();
      }
    },
  },
  computed: {
    isBurgerMenuOpen() {
      return this.$store.getters["burgerMenu/isBurgerMenuOpen"];
    },
  },
};
</script>
<style>
</style>
