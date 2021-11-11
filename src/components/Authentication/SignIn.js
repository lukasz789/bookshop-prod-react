import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import classes from "./SignIn.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import InputWrap from "../UI/forms/InputWrap";
import Caption from "../UI/Caption";
import LoadingScreen from "../UI/LoadingScreen";

import { loginUser, loginWithGoogleUser } from "../../redux-store/auth-actions";

const Login = (props) => {
  const loginSuccess = useSelector((state) => state.auth.loginSuccess);
  const spinnerVisible = useSelector((state) => state.ui.spinner);
  const dispatch = useDispatch();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const { history } = props;

  const resetForm = () => {
    setMail("");
    setPassword("");
  };

  useEffect(() => {
    if (loginSuccess) {
      history.push("/");
      resetForm();
    }
  }, [loginSuccess, history]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (mail.length > 0 && password.length > 0) {
      dispatch(loginUser(mail, password));
    }
  };

  const mailChangeHandler = (event) => {
    setMail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const signInWithGoogleHandler = () => {
    dispatch(loginWithGoogleUser());
  };

  return (
    <React.Fragment>
      {spinnerVisible ? (
        <LoadingScreen />
      ) : (
        <Card className={classes.mainwrap}>
          <div className={classes.scroll}>
            <Caption>Login</Caption>
            <form onSubmit={submitHandler}>
              <InputWrap>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={mail}
                  onChange={mailChangeHandler}
                />
              </InputWrap>
              <InputWrap>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={passwordChangeHandler}
                />
              </InputWrap>
              <div className={classes.resetWrap}>
                <Link to="/resetPassword">
                  <p className={classes.reset}>Lost password?</p>
                </Link>
              </div>
              <Button className={classes.btn} type="submit">
                Login
              </Button>
            </form>
            <Button
              className={classes.btnGoogle}
              onClick={signInWithGoogleHandler}
            >
              Sign in with Google
            </Button>
          </div>
        </Card>
      )}
    </React.Fragment>
  );
};

export default withRouter(Login);
