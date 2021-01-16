<template>
  <div class="posts-container">
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
.posts-container {
  margin: 0;
}
</style>