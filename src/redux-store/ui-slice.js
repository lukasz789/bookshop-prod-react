import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    spinner: null,
    notification: null,
    popup: false,
    mobileNavMenu: false,
    orderListRender: true,
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
    setMobileNavMenu(state, action) {
      state.mobileNavMenu = action.payload;
    },
    setOrderListRender(state, action) {
      state.orderListRender = action.payload;
    },
  },
});

export default uiSlice;
export const uiActions = uiSlice.actions;
