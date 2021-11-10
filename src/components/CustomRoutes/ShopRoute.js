import { Route, Redirect } from "react-router-dom";

import Mainlayout from "../../layouts/Mainlayout";

const ShopRoute = ({ currentUser, path, component }) => {
  return (
    <Route
      path={path}
      render={() =>
        currentUser ? <Redirect to="/" /> : <Mainlayout>{component}</Mainlayout>
      }
    />
  );
};

export default ShopRoute;
