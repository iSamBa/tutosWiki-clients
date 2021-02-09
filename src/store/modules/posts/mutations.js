const mutations = {
  add(state, payload) {
    state.posts = [...state.posts, ...payload.posts];
  },
  remove(state, payload) {
    const postId = payload.id;
    state.posts = state.posts.filter((post) => {
      return post._id !== postId;
    });
  },
  update(state, payload) {
    const post = payload.post;
    state.posts = state.posts.map((currPost) => {
      if (currPost._id == post._id) {
        return { ...post };
      } else {
        return { ...currPost };
      }
    });
  },
};

export default mutations;
