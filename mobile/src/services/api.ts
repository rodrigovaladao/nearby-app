import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
  timeout: 700,
});

// baseURL: "http://localhost:3333",
// baseURL: "http://192.168.1.23:3333",
