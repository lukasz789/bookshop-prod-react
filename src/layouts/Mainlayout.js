import React, { Suspense, useState, useEffect } from "react";

import Header from "../components/Header/Header";
import CartProvider from "../store/CartProvider";

import LoadingScreen from "../components/UI/LoadingScreen";
import FormSubmissionPopup from "../components/UI/forms/FormSubmissionPopup";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../redux-store/ui-slice";

const Cart = React.lazy(() => import("../components/Cart/Cart"));
const OrderModal = React.lazy(() => import("../components/Cart/OrderModal"));

const Mainlayout = (props) => {
  const [cartVisibility, setCartVisibility] = useState(false);
  const [orderModalVisibility, setOrderModalVisibility] = useState(false);

  const popupVisible = useSelector((state) => state.ui.popup);
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (popupVisible) {
      const popUpDisabler = setTimeout(() => {
        dispatch(uiActions.setPopup(false));
      }, 4000);
      return () => {
        return clearTimeout(popUpDisabler);
      };
    }
  }, [popupVisible, dispatch]);

  return (
    <Suspense fallback={<LoadingScreen />}>
      <CartProvider>
        <Header onOpen={openCartHandler} {...props} />
        <FormSubmissionPopup />
        {props.children}
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
};

export default Mainlayout;
