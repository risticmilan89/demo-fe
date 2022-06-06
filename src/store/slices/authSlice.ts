import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreT } from "../store";

const initialState = {
  accessToken: "",
  username: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials(
      state,
      action: PayloadAction<{ username: string; token: string }>
    ) {
      state.accessToken = action.payload.token;
      state.username = action.payload.username;
      localStorage.setItem("accessToken", action.payload.token);
      localStorage.setItem("username", action.payload.username);
    },

    resetCredentials(state) {
      state.accessToken = initialState.accessToken;
      state.username = initialState.username;
    },
  },
});

const { setCredentials, resetCredentials } = authSlice.actions;

export const authActions = {
  setCredentials,
  resetCredentials,
};

export const authSelector = (state: StoreT) => state.authStore;

export const authReducer = authSlice.reducer;
