import Backdrop from "../UI/Backdrop";
import React from "react";
import Button from "../UI/Button";
import classes from "./OrderModal.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import ReactDOM from "react-dom";

import { addNewOrder } from "../../firebase/utils";

import { auth } from "../../firebase/utils";

import { useDispatch } from "react-redux";
import { uiActions } from "../../redux-store/ui-slice";

const OrderModalOverlay = (props) => {
  const dispatch = useDispatch();
  const cartCtx = useContext(CartContext);

  const totalBought = cartCtx.items.reduce((curNr, item) => {
    return curNr + item.amount;
  }, 0);

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          Book "{item.name}" in {item.type}, {item.amount}{" "}
          {item.amount > 1 ? "copies" : "copy"}
        </li>
      ))}
    </ul>
  );

  const cartClearHandler = () => {
    cartCtx.clearCart();
  };

  const addNewOrderHandler = () => {
    addNewOrder(auth.currentUser.uid, JSON.parse(localStorage.getItem("cart")));
    dispatch(uiActions.setOrderListRender(false));
  };

  return (
    <div className={classes.order}>
      <div className={classes.scroll}>
        <h2 style={{ textAlign: "center" }}>Thank You for shopping with us!</h2>
        <h4>You have bought as follows: ({totalBought} book(s) total)</h4>
        {cartItems}
      </div>
      <Button
        className={classes.confirmBtn}
        onClick={() => {
          props.onClick();
          addNewOrderHandler();
          cartClearHandler();
        }}
      >
        Confirm
      </Button>
    </div>
  );
};

const OrderModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <OrderModalOverlay onClick={props.onClick} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default OrderModal;
