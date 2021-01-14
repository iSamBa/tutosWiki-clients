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
    const response = await axios.get("http://localhost:5000/posts");
    context.commit("add", { posts: response.data.posts });
  }
};

export default actions;
