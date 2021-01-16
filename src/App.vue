<template>
  <div id="app">
    <nav-bar v-if="isLoggedIn" />
    <div id="content">
      <router-view />
    </div>
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
