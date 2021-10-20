import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//redux store
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./redux-store/auth-slice";

//layouts
import Mainlayout from "./layouts/Mainlayout";

//pages
import Mainpage from "./pages/Mainpage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";

import { auth, handleNewProfile } from "./firebase/utils";

const App = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleNewProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          dispatch(
            authActions.setCurrentUser({ id: snapshot.id, ...snapshot.data() })
          );
        });
      }
      dispatch(authActions.setCurrentUser(null));
    });
    return () => authListener();
  }, [dispatch]);

  return (
    <React.Fragment>
      <Switch>
        <Route
          path="/register"
          render={() =>
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <Mainlayout>
                <Register />
              </Mainlayout>
            )
          }
        />
        <Route
          path="/login"
          render={() =>
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <Mainlayout>
                <Login />
              </Mainlayout>
            )
          }
        />
        <Route
          path="/resetPassword"
          render={() =>
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <Mainlayout>
                <PasswordReset />
              </Mainlayout>
            )
          }
        />
        <Route
          path="/"
          render={() => (
            <Mainlayout>
              <Mainpage />
            </Mainlayout>
          )}
        />
      </Switch>
    </React.Fragment>
  );
};

export default App;
