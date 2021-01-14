<template>
  <div class="home">
    <h1>HOME</h1>
    <div v-for="post in getPosts" :key="post._id">
    {{post._id}} / {{post.content}}
    </div>
    <input type="text" name="id" v-model="id">
    <input type="text" name="content"  v-model="content">
    <button @click="handleUpdate">Update</button>
    <button @click="handleDelete">Delete</button>
    <button @click="handleAdd">Add</button>
  </div>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: "Home",

  data() {
    return {
      content : "",
      id : 0
    }
  },
  methods: {
    ...mapActions([ "addPost", "removePost","updatePost", "fetchAllPosts"]),
    handleUpdate() {
      this.updatePost({post : { _id : this.id, content : this.content}});
    },
    handleDelete(){
      this.removePost({id : this.id});

    },
    handleAdd(){
      this.addPost({posts : [{ _id : this.id, content : this.content}]});
    },
    getPostsFromDb(){
      this.fetchAllPosts();
    }
  },
  mounted: function (){
    this.getPostsFromDb()
  },
  computed: {
    getPosts(){
      return this.$store.getters.getPosts;
    }
  },


};
</script>
