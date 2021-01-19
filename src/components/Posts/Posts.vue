<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
    <Post v-for="post in getPosts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import Post from "./Post/Post.vue";
export default {
  props: ["posts"],
  components: { Post },
  computed: {
    getPosts() {
      return this.posts;
    },
  },
};
</script>

<style scoped>
</style>