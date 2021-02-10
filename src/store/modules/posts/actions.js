import axios from "axios";

const actions = {
  addPost(context, payload) {
    context.commit("add", payload);
  },
  removePost(context, payload) {
    context.commit("remove", payload);
  },
  updatePost(context, payload) {
    context.commit("update", payload);
  },
  async fetchAllPosts(context) {
    try {
      console.log(document.cookie);
      const response = await axios.get("http://localhost:5000/posts");
      context.commit("add", { posts: response.data.posts });
    } catch (error) {
      console.error(error);
    }
  },
};

export default actions;
