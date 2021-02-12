<template>
  <div
    id="app"
    class="h-full w-full bg-gradient-to-tr to-secondary-200 from-secondary-100 text-white flex flex-col items-start"
  >
    <nav-bar class="h-10" />
    <div
      @click="closeBurgerMenu"
      id="main"
      class="flex min-h-screen h-full w-full justify-center items-center"
    >
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
   methods: {
    ...mapActions({ 
      closeMenu: "burgerMenu/closeMenu", 
      getAuthenticatedUser:"auth/getAuthenticatedUser" 
      }),
    closeBurgerMenu() {
      if (this.isBurgerMenuOpen) {
        this.closeMenu();
      }
    },
    fetchUser(){
      this.getAuthenticatedUser();
    }
  },
  computed: {
    isBurgerMenuOpen() {
      return this.$store.getters["burgerMenu/isBurgerMenuOpen"];
    },
  },

  created() {
    this.fetchUser();
  }
};
</script>
<style>
</style>
