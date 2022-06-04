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

export const postsActions = {
  getPosts,
};

export const postsSelector = (state: StoreT) => state.postsStore;

export const postsReducer = postsSlice.reducer;