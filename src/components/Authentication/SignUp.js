import React from "react";
import classes from "./SignUp.module.css";
import Card from "../UI/Card";

import Button from "../UI/Button";
import InputWrap from "../UI/forms/InputWrap";

import useInput from "../../hooks/use-input";

import { auth, handleNewProfile } from "../../firebase/utils";

const Login = () => {
  const validateEmail = (value) => {
    //eslint-disable-next-line
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      return true;
    } else {
      return false;
    }
  };

  const validatePassword = (value) => {
    //eslint-disable-next-line
    if (/(?=.*[0-9a-zA-Z]).{6,}/.test(value)) {
      return true;
    } else {
      return false;
    }
  };

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

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        mailValue,
        passwordValue
      );

      await handleNewProfile(user, { displayName: nameValue });

      resetName();
      resetMail();
      resetPassword();
      resetconfirmPassword();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className={classes.mainwrap}>
      <div className={classes.scroll}>
        <h1 className={classes.registercaption}>Register</h1>
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
          <Button className={classes.btn} disabled={!formIsValid} type="submit">
            Register
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default Login;
