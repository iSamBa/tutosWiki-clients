import axios from "axios";

const actions = {
  async login(context, payload) {
    context.commit("set", payload);
  },
  async logout(context) {
    context.commit("clear");
  },
  register(context, payload) {
    axios
      .post("http://localhost:5000/auth/register", payload)
      .then((response) => {
        context.commit("setUser", response.data.data);
        context.commit("setStatus", response.data);
      })
      .catch((error) => {
        context.commit("setStatus", error.response.data);
      });
  },
};

export default actions;
