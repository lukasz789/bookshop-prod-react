import { useState } from "react";

import classes from "./SignIn.module.css";
import Card from "../UI/Card";

import Button from "../UI/Button";
import InputWrap from "../UI/forms/InputWrap";

import { signInWithGoogle, auth } from "../../firebase/utils";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(mail, password);

      setMail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  const mailChangeHandler = (event) => {
    setMail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Card className={classes.mainwrap}>
      <div className={classes.scroll}>
        <h1 className={classes.logincaption}>Login</h1>
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
          <Button className={classes.btn} type="submit">
            Login
          </Button>
        </form>
        <Button className={classes.btnGoogle} onClick={signInWithGoogle}>
          Sign in with Google
        </Button>
      </div>
    </Card>
  );
};

export default Login;
