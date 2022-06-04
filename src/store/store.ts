import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { authReducer } from "./slices/authSlice";
import { uiReducer } from "./slices/uiSlice";
import { postsReducer } from "./slices/postsSlice";

export const store = configureStore({
  reducer: {
    uiStore: uiReducer,
    postsStore: postsReducer,
    authStore: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type StoreT = ReturnType<typeof store.getState>;
