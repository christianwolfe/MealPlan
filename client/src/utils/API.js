import axios from "axios";

export default {
  // API request to server side
  register(data) {
    return axios.post("/auth/register", data);
  },
  login(data) {
    return axios.post("/auth/login", data);
  },
  loadUser(headers) {
    return axios.get("/auth/user", headers);
  },
  loadRes(user) {
    console.log("User is " , user.email)
    return axios.get("/api/reserve/" + user.email );
  },
};
