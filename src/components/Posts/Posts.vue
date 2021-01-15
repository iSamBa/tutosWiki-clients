<template>
  <div>
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

<style>
</style>