import axios from "axios";

const actions = {
  login(context, payload) {
    axios({
      method: "POST",
      url: "http://localhost:5000/auth/login",
      data: payload,
      withCredentials: true,
    })
      .then((response) => {
        context.commit("setUsername", response.data.data.userName);
        context.commit("setIsAuthenticated", true);
        context.commit("setIsAdmin", response.data.data.isAdmin);
      })
      .catch((error) => {
        context.commit("setStatus", error.response.data);
      });
  },
  logout(context) {
    axios({
      method: "POST",
      url: "http://localhost:5000/auth/logout",
      withCredentials: true,
    })
      .then((response) => {
        context.commit("clear");
        context.commit("setStatus", response.data);
      })
      .catch((error) => {
        context.commit("setStatus", error.response.data);
      });
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
