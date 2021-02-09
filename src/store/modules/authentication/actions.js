import axios from "axios";

const actions = {
  async login(context, payload) {
    context.commit("set", payload);
  },
  async logout(context) {
    context.commit("clear");
  },
  register(context, payload) {
    console.log("register called");
    console.log(payload);

    axios
      .post("http://localhost:5000/auth/register", payload)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  },
};

export default actions;
