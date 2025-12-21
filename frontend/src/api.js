import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // ye backend URL read karega
  withCredentials: true                    // cookies/auth ke liye
});

export default api;