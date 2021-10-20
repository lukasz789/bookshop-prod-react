import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    spinner: null,
    notification: null,
    popup: false,
  },
  reducers: {
    showSpinner(state, action) {
      state.spinner = action.payload;
    },
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
      };
    },
    setPopup(state, action) {
      state.popup = action.payload;
    },
  },
});

export default uiSlice;
export const uiActions = uiSlice.actions;
