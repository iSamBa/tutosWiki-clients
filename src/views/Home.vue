<template>
  <div class="pt-12">
    <div v-if="getPosts.length > 0">
      <Posts :posts="getPosts" />
    </div>
    <div class="flex items-center justify-center" v-else>
      <img class="w-24" src="../../public/oh.svg" alt="oh-no">
      <h2>There is no tutorial for the moment</h2>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Posts from "../components/Posts/Posts.vue";

export default {
  name: "Home",
  components: {
    Posts,
  },

  data() {
    return {
      content: "",
      id: 0,
    };
  },
  methods: {
    ...mapActions({
      addPost: "posts/addPost",
      removePost: "posts/removePost",
      updatePost: "posts/updatePost",
      fetchAllPosts: "posts/fetchAllPosts",
    }),
    handleUpdate() {
      this.updatePost({ post: { _id: this.id, content: this.content } });
    },
    handleDelete() {
      this.removePost({ id: this.id });
    },
    handleAdd() {
      this.addPost({ posts: [{ _id: this.id, content: this.content }] });
    },
    getPostsFromDb() {
      this.fetchAllPosts();
    },
  },
  mounted: function () {
    this.getPostsFromDb();
  },
  computed: {
    getPosts() {
      return this.$store.getters["posts/getPosts"];
    },
  },
};
</script>

<style scoped>
</style>
