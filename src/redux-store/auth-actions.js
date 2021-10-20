import { authActions } from "./auth-slice";
import { uiActions } from "./ui-slice";

import { auth, handleNewProfile, signInWithGoogle } from "../firebase/utils";

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(uiActions.showSpinner(true));
      await auth.signInWithEmailAndPassword(email, password);
      dispatch(authActions.setLoginSuccess(true));
      dispatch(
        uiActions.setNotification({
          status: "success",
          message: "Logged in!",
        })
      );
    } catch (error) {
      console.log(error.message);
      dispatch(
        uiActions.setNotification({
          status: "error",
          message: "Something went wrong!",
        })
      );
    }
    dispatch(uiActions.setPopup(true));
    dispatch(authActions.setLoginSuccess(false));
    dispatch(uiActions.showSpinner(false));
  };
};

export const loginWithGoogleUser = () => {
  return async (dispatch) => {
    try {
      dispatch(uiActions.showSpinner(true));
      await signInWithGoogle();
      dispatch(authActions.setLoginSuccess(true));
      dispatch(
        uiActions.setNotification({
          status: "success",
          message: "Logged in!",
        })
      );
    } catch (error) {
      console.log(error.message);
      dispatch(
        uiActions.setNotification({
          status: "error",
          message: "Something went wrong!",
        })
      );
    }
    dispatch(uiActions.setPopup(true));
    dispatch(authActions.setLoginSuccess(false));
    dispatch(uiActions.showSpinner(false));
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
      dispatch(
        uiActions.setNotification({
          status: "success",
          message: "Registered!",
        })
      );
    } catch (error) {
      console.log(error.message);
      dispatch(
        uiActions.setNotification({
          status: "error",
          message: "Something went wrong!",
        })
      );
    }
    dispatch(uiActions.setPopup(true));
    dispatch(authActions.setRegisterSuccess(false));
    dispatch(uiActions.showSpinner(false));
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
      dispatch(
        uiActions.setNotification({
          status: "success",
          message: "Password reset!",
        })
      );
      dispatch(authActions.setResetPasswordSuccess(true));
    } catch (error) {
      console.log(error);
      dispatch(
        uiActions.setNotification({
          status: "error",
          message: "Something went wrong!",
        })
      );
    }
    dispatch(uiActions.setPopup(true));
    dispatch(authActions.setResetPasswordSuccess(false));
    dispatch(uiActions.showSpinner(false));
  };
};
