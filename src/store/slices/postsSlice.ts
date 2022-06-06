import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postsApi } from "../../api";
import { PostsStateT } from "../../types";
import { StoreT } from "../store";

const initialState: PostsStateT = {
  posts: [],
  postsLoading: false,
  postsError: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts(state) {
      state.posts = [];
      state.postsLoading = true;
      state.postsError = null;
    },

    setPosts(state, action: any) {
      state.posts = action.payload;
      state.postsLoading = false;
      state.postsError = null;
    },

    setPostsError(state) {
      state.posts = [];
      state.postsLoading = false;
      state.postsError = "Failed to get posts from server";
    },
  },
});

const getPosts = createAsyncThunk("posts/getPosts", async (_, { dispatch }) => {
  dispatch(postsSlice.actions.getPosts());
  try {
    const postsData = await postsApi.getPosts();
    dispatch(postsSlice.actions.setPosts(postsData));
  } catch {
    dispatch(postsSlice.actions.setPostsError());
  }
});

const getPostsByUsername = createAsyncThunk(
  "posts/getPostsByUsername",
  async (username: string, { dispatch }) => {
    dispatch(postsSlice.actions.getPosts());
    try {
      const postsData = await postsApi.getPostsByAuthor(username);
      dispatch(postsSlice.actions.setPosts(postsData));
    } catch {
      dispatch(postsSlice.actions.setPostsError());
    }
  }
);

export const postsActions = {
  getPosts,
  getPostsByUsername,
};

export const postsSelector = (state: StoreT) => state.postsStore;

export const filteredPostSelector = (state: StoreT) => {
  const searchValue = state.uiStore.searchValue.toLocaleLowerCase();
  const filteredPosts = state.postsStore.posts.filter(
    (singlePost) =>
      singlePost.title.includes(searchValue) ||
      singlePost.body.includes(searchValue)
  );
  return { filteredPosts };
};

export const postsReducer = postsSlice.reducer;
