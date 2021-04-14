import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BAKCEND_URL || "http://localhost:4000/",
  // baseURL: "http://13.233.94.172:4000/",
});

export default instance;
