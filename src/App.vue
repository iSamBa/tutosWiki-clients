<template>
  <div
    id="app"
    class="bg-gradient-to-tr to-secondary-200 from-secondary-100 h-screen text-white flex items-center justify-center"
  >
    <nav-bar v-if="isLoggedIn" />
    <router-view />
  </div>
</template>
<script>
import NavBar from "./components/NavBar/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data: () => {
    return {
      isLoggedIn: true,
    };
  },
};
</script>
<style>
</style>
