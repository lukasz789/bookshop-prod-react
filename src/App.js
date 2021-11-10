import React, { useEffect } from "react";
import { Switch } from "react-router-dom";

//redux store
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./redux-store/auth-slice";

//pages
import Mainpage from "./pages/Mainpage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";
import Orderspage from "./pages/Orderspage";
import OrderDetailsPage from "./pages/OrderDetailspage";

import { auth, handleNewProfile } from "./firebase/utils";
import ShopRoute from "./components/CustomRoutes/ShopRoute";

const App = () => {
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
      } else if (!userAuth) {
        dispatch(authActions.setCurrentUser(null));
      }
    });
    return () => authListener();
  }, [dispatch]);

  currentUser
    ? localStorage.setItem(
        "currentUser",
        JSON.stringify({
          currentUser,
        })
      )
    : localStorage.setItem("currentUser", null);

  return (
    <React.Fragment>
      <Switch>
        <ShopRoute
          currentUser={currentUser}
          path="/register"
          component={<Register />}
        />
        <ShopRoute
          currentUser={currentUser}
          path="/login"
          component={<Login />}
        />
        <ShopRoute
          currentUser={currentUser}
          path="/resetPassword"
          component={<PasswordReset />}
        />
        <ShopRoute
          currentUser={!currentUser}
          path="/orders/:orderId"
          component={<OrderDetailsPage />}
        />
        <ShopRoute
          currentUser={!currentUser}
          path="/orders"
          component={<Orderspage />}
        />
        <ShopRoute currentUser={false} path="/" component={<Mainpage />} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
