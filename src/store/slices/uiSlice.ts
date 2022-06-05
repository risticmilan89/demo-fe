import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreT } from "../store";

const initialState = {
  searchValue: "",
  usernameValue: "",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },

    setUsernameValue(state, action: PayloadAction<string>) {
      state.usernameValue = action.payload;
    },
  },
});

const { setUsernameValue } = uiSlice.actions;

export const uiActions = {
  setUsernameValue,
};

export const uiSelector = (state: StoreT) => state.uiStore;

export const uiReducer = uiSlice.reducer;
