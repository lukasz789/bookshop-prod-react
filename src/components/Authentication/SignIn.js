import classes from "./SignIn.module.css";
import Card from "../UI/Card";

import Button from "../UI/Button";

import { signInWithGoogle } from "../../firebase/utils";

const Login = () => {
  const submitHandler = async(event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.mainwrap}>
      <h2 className={classes.logincaption}>Login test</h2>
      {/* <div className={classes.formwrap}> */}
      <form onSubmit={submitHandler}>
        <Button className={classes.btn} onClick={signInWithGoogle}>
          Sign in with Google
        </Button>
      </form>
      {/* </div> */}
    </Card>
  );
};

export default Login;
