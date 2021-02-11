import axios from "axios";

const actions = {
  async login(context, payload) {
    axios({
      method: "POST",
      url: "http://localhost:5000/auth/login",
      data: payload,
      withCredentials: true,
    })
      .then((response) => {
        console.log(response);
        context.commit("setUser", response.data.data);
        context.commit("setStatus", response.data);
      })
      .catch((error) => {
        console.log(error);
        context.commit("setStatus", error.response.data);
      });
  },
  async logout(context) {
    context.commit("clear");
  },
  register(context, payload) {
    axios({
      method: "POST",
      url: "http://localhost:5000/auth/register",
      data: payload,
      withCredentials: true,
    })
      .then((response) => {
        context.commit("setStatus", response.data);
      })
      .catch((error) => {
        context.commit("setStatus", error.response.data);
      });
  },
};

export default actions;
