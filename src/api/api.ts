import _axios from "axios";
import { PostT } from "../types";

const baseURL =
  process.env.REACT_APP_SERVER_URL || "https://jsonplaceholder.typicode.com";

const axios = _axios.create({
  baseURL,
  timeout: 5000,
});

export const postsApi = {
  getPosts: (): Promise<PostT[]> => axios.get("/posts").then((r) => r.data),
};
