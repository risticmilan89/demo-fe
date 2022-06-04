import { createSlice } from "@reduxjs/toolkit";
import { StoreT } from "../store";

const initialState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const authSelector = (state: StoreT) => state.authStore;

export const authReducer = authSlice.reducer;
