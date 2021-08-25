import Backdrop from "../UI/Backdrop";
import React from "react";
import Button from "../UI/Button";
import classes from "./OrderModal.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import ReactDOM from "react-dom";

const OrderModalOverlay = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          {item.name} in {item.type}
        </li>
      ))}
    </ul>
  );

  const cartClearHandler = () => {
    cartCtx.clearCart();
  };

  return (
    <div className={classes.order}>
      <h2>Thank You for shopping with us!</h2>
      <h4>You have bought as follows:</h4>
      {cartItems}
      <Button
        className={classes.confirmBtn}
        onClick={() => {
          props.onClick();
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
