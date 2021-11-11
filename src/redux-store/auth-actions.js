import { authActions } from "./auth-slice";
import { uiActions } from "./ui-slice";

import { auth, handleNewProfile, signInWithGoogle } from "../firebase/utils";

const showPopup = (dispatch) => {
  dispatch(uiActions.setPopup(true));
  dispatch(uiActions.showSpinner(false));
};

const setPopupData = (dispatch, status, message) => {
  dispatch(
    uiActions.setNotification({
      status: status,
      message: message,
    })
  );
};

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(uiActions.showSpinner(true));
      await auth.signInWithEmailAndPassword(email, password);
      dispatch(authActions.setLoginSuccess(true));
      setPopupData(dispatch, "success", "Logged in!");
    } catch (error) {
      console.log(error.message);
      setPopupData(dispatch, "error", "Failed to login!");
    }
    dispatch(authActions.setLoginSuccess(false));
    showPopup(dispatch);
  };
};

export const loginWithGoogleUser = () => {
  return async (dispatch) => {
    try {
      dispatch(uiActions.showSpinner(true));
      await signInWithGoogle();
      dispatch(authActions.setLoginSuccess(true));
      setPopupData(dispatch, "success", "Logged in!");
    } catch (error) {
      console.log(error.message);
      setPopupData(dispatch, "error", "Failed to login!");
    }
    dispatch(authActions.setLoginSuccess(false));
    showPopup(dispatch);
  };
};

export const registerUser = (email, password, name) => {
  return async (dispatch) => {
    try {
      dispatch(uiActions.showSpinner(true));
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleNewProfile(user, { displayName: name });
      dispatch(authActions.setRegisterSuccess(true));
      setPopupData(dispatch, "success", "Registered!");
    } catch (error) {
      console.log(error.message);
      setPopupData(dispatch, "error", "Failed to register!");
    }
    dispatch(authActions.setRegisterSuccess(false));
    showPopup(dispatch);
  };
};

export const resetPassword = (email) => {
  return async (dispatch) => {
    try {
      dispatch(uiActions.showSpinner(true));
      const resetCfg = {
        url: "http://localhost:3000/login", //send user after reset password
      };

      await auth.sendPasswordResetEmail(email, resetCfg);
      setPopupData(dispatch, "success", "Password reset!");
      dispatch(authActions.setResetPasswordSuccess(true));
    } catch (error) {
      console.log(error);
      setPopupData(dispatch, "error", "Failed to reset password!");
    }
    dispatch(authActions.setResetPasswordSuccess(false));
    showPopup(dispatch);
  };
};
