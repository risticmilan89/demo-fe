import { CreatePostT } from "./../types/requestTypes";
import _axios from "axios";
import { CreateUserT, LoginUserT, PostT } from "../types";

const baseURL = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

const bearerConfig = (token: string) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const axios = _axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const postsApi = {
  getPosts: (): Promise<PostT[]> => axios.get("/posts").then((r) => r.data),
  createPost: (post: CreatePostT, token: string) =>
    axios.post(
      "/posts",
      { ...post },
      bearerConfig(token)
      // { headers: { Authorization: `Bearer sometoken` } }
    ),
};

export const usersApi = {
  createUser: (user: CreateUserT) =>
    axios.post("/users", { ...user }).then((r) => r.data),
  login: (user: LoginUserT) =>
    axios.post("/login", { ...user }).then((r) => r.data),
};
