import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import classes from "./PasswordRecovery.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import Caption from "../UI/Caption";
import InputWrap from "../UI/forms/InputWrap";
import LoadingScreen from "../UI/LoadingScreen";

import { validateEmail } from "../../hooks/use-input";

import { resetPassword } from "../../redux-store/auth-actions";

const PasswordRecovery = (props) => {
  const dispatch = useDispatch();
  const resetPasswordSuccess = useSelector(
    (state) => state.auth.resetPasswordSuccess
  );
  const spinnerVisible = useSelector((state) => state.ui.spinner);

  const [mail, setMail] = useState("");

  const { history } = props;

  const mailChangeHandler = (event) => {
    setMail(event.target.value);
  };

  useEffect(() => {
    if (resetPasswordSuccess) {
      history.push("/login");
      setMail("");
    }
  }, [resetPasswordSuccess, history]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (validateEmail(mail)) {
      dispatch(resetPassword(mail));
    }
  };

  return (
    <React.Fragment>
      {spinnerVisible ? (
        <LoadingScreen />
      ) : (
        <Card className={classes.mainwrap}>
          <div className={classes.scroll}>
            <Caption>Reset password</Caption>
            <form onSubmit={handleFormSubmit}>
              <InputWrap>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={mail}
                  onChange={mailChangeHandler}
                />
                <Button className={classes.btn} type="submit">
                  Recover
                </Button>
              </InputWrap>
            </form>
          </div>
        </Card>
      )}
    </React.Fragment>
  );
};

export default withRouter(PasswordRecovery);
