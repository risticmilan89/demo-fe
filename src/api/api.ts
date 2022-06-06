import { CreatePostT } from "./../types/requestTypes";
import _axios from "axios";
import { CreateUserT, LoginUserT, PostT } from "../types";

const baseURL = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

const axios = _axios.create({
  baseURL,
  timeout: 5000,
});

export const postsApi = {
  getPosts: (): Promise<PostT[]> => axios.get("/posts").then((r) => r.data),
  createPost: (post: CreatePostT) => axios.post("/posts", { ...post }),
};

export const usersApi = {
  createUser: (user: CreateUserT) =>
    axios.post("/users", { ...user }).then((r) => r.data),
  login: (user: LoginUserT) =>
    axios.post("/login", { ...user }).then((r) => r.data),
};
