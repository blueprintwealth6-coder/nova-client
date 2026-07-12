import axios from "axios";

const API = axios.create({
  baseURL: "https://railway.app", 
});

export default API;
