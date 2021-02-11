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
    axios({
      method: "GET",
      url: "http://localhost:5000/posts",
      withCredentials: true,
    })
      .then((response) => {
        context.commit("add", { posts: response.data.data });
      })
      .catch((error) => console.log(error));
  },
};

export default actions;
