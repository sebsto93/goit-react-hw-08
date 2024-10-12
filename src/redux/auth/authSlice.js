import { createSlice } from "@reduxjs/toolkit";
import { logIn } from "./operations";
import { logOut } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    token: null,
    user: {
      name: null,
      email: null,
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logIn.pending, (state, action) => {});
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    });
    builder.addCase(logIn.rejected, (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.user = {
        name: null,
        email: null,
      };
    });
    builder.addCase(logOut.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.user = {
        name: null,
        email: null,
      };
    });
  },
});

export const authReduer = authSlice.reducer;
