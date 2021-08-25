import React, { Suspense } from "react";
import { useState } from "react";

import Books from "./components/Books/Books";
import Header from "./components/Header/Header";
import CartProvider from "./store/CartProvider";
import Backdrop from "./components/UI/Backdrop";
import { CircularProgress } from "@material-ui/core";
import BackgroundImage from "./components/UI/BackgroundImage";

const Cart = React.lazy(() => import("./components/Cart/Cart"));
const OrderModal = React.lazy(() => import("./components/Cart/OrderModal"));

function App() {
  const [cartVisibility, setCartVisibility] = useState(false);
  const [orderModalVisibility, setOrderModalVisibility] = useState(false);

  const openCartHandler = () => {
    setCartVisibility(true);
  };

  const hideCartHandler = () => {
    setCartVisibility(false);
  };

  const hideOrderModalHandler = () => {
    setOrderModalVisibility(false);
  };

  const openOrderModalHandler = () => {
    setOrderModalVisibility(true);
  };

  return (
    <Suspense
      fallback={
        <React.Fragment>
          <Backdrop />
          <div
            style={{
              position: "fixed",
              left: "calc(50% - 2rem)",
              top: "calc(50% - 2rem)",
            }}
          >
            <CircularProgress size={"4rem"} color={"secondary"} />
          </div>
          <BackgroundImage />
        </React.Fragment>
      }
    >
      <CartProvider>
        <Header onOpen={openCartHandler} />
        <Books />
        {cartVisibility && (
          <Cart
            onClose={hideCartHandler}
            onOrderModalToggle={openOrderModalHandler}
          />
        )}
        {orderModalVisibility && <OrderModal onClick={hideOrderModalHandler} />}
      </CartProvider>
    </Suspense>
  );
}

export default App;
