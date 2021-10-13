import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//layouts
import Mainlayout from "./layouts/Mainlayout";

//pages
import Mainpage from "./pages/Mainpage";
import Register from "./pages/Register";
import Login from "./pages/Login";

import { auth, handleNewProfile } from "./firebase/utils";

const App = () => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleNewProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      }
      setCurrentUser(null);
    });
    return () => authListener();
  }, []);

  return (
    <React.Fragment>
      <Switch>
        <Route
          path="/register"
          render={() => (
            <Mainlayout currentUser={currentUser}>
              <Register />
            </Mainlayout>
          )}
        />
        <Route
          path="/login"
          render={() =>
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <Mainlayout currentUser={currentUser}>
                <Login />
              </Mainlayout>
            )
          }
        />
        <Route
          path="/"
          render={() => (
            <Mainlayout currentUser={currentUser}>
              <Mainpage />
            </Mainlayout>
          )}
        />
      </Switch>
    </React.Fragment>
  );
};

export default App;
