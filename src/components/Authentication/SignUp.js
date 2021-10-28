import React, { useEffect, useCallback } from "react";
import { withRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { registerUser } from "../../redux-store/auth-actions";

import classes from "./SignUp.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import InputWrap from "../UI/forms/InputWrap";
import Caption from "../UI/Caption";
import LoadingScreen from "../UI/LoadingScreen";

import useInput from "../../hooks/use-input";
import { validateEmail } from "../../hooks/use-input";
import { validatePassword } from "../../hooks/use-input";

const Login = (props) => {
  const registerSuccess = useSelector((state) => state.auth.registerSuccess);
  const spinnerVisible = useSelector((state) => state.ui.spinner);
  const dispatch = useDispatch();

  const { history } = props;

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: mailValue,
    isValid: mailIsValid,
    hasError: mailHasError,
    valueChangeHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
    reset: resetMail,
  } = useInput((value) => validateEmail(value));
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => validatePassword(value));
  const {
    value: confirmPasswordValue,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: resetconfirmPassword,
  } = useInput((value) => value === passwordValue && value !== "");

  let formIsValid = false;

  if (nameIsValid && mailIsValid && passwordIsValid && confirmPasswordIsValid) {
    formIsValid = true;
  }

  const resetForm = useCallback(() => {
    resetName();
    resetMail();
    resetPassword();
    resetconfirmPassword();
  }, [resetName, resetMail, resetPassword, resetconfirmPassword]);

  useEffect(() => {
    if (registerSuccess) {
      history.push("/");
      resetForm();
    }
  }, [registerSuccess, resetForm, history]);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (formIsValid) {
      dispatch(registerUser(mailValue, passwordValue, nameValue));
    }
  };

  return (
    <React.Fragment>
      {spinnerVisible ? (
        <LoadingScreen />
      ) : (
        <Card className={classes.mainwrap}>
          <div className={classes.scroll}>
            <Caption>Register</Caption>
            <form onSubmit={submitHandler}>
              <InputWrap hasError={nameHasError}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={nameValue}
                  onChange={nameChangeHandler}
                  onBlur={nameBlurHandler}
                />
                {nameHasError && <p>Please enter Your name</p>}
              </InputWrap>
              <InputWrap hasError={mailHasError}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={mailValue}
                  onChange={mailChangeHandler}
                  onBlur={mailBlurHandler}
                />
                {mailHasError && <p>Please enter valid e-mail</p>}
              </InputWrap>
              <InputWrap hasError={passwordHasError}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={passwordValue}
                  onChange={passwordChangeHandler}
                  onBlur={passwordBlurHandler}
                />
                {passwordHasError && (
                  <p>Password must have at least 6 characters</p>
                )}
              </InputWrap>
              <InputWrap hasError={confirmPasswordHasError}>
                <label htmlFor="confirm-password">Confirm password</label>
                <input
                  type="password"
                  id="confirm-password"
                  value={confirmPasswordValue}
                  onChange={confirmPasswordChangeHandler}
                  onBlur={confirmPasswordBlurHandler}
                />
                {confirmPasswordHasError && <p>Passwords do not match</p>}
              </InputWrap>
              <Button
                className={classes.btn}
                disabled={!formIsValid}
                type="submit"
              >
                Register
              </Button>
            </form>
          </div>
        </Card>
      )}
    </React.Fragment>
  );
};

export default withRouter(Login);
