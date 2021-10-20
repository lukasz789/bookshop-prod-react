import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    loginSuccess: false,
    registerSuccess: false,
    resetPasswordSuccess: false,
  },
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setLoginSuccess(state, action) {
      state.loginSuccess = action.payload;
    },
    setRegisterSuccess(state, action) {
      state.registerSuccess = action.payload;
    },
    setResetPasswordSuccess(state, action) {
      state.resetPasswordSuccess = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
