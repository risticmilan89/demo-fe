import { createSlice } from "@reduxjs/toolkit";
import { StoreT } from "../store";

const initialState = {};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {},
});

export const uiSelector = (state: StoreT) => state.uiStore;

export const uiReducer = uiSlice.reducer;
