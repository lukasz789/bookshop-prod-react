import Button from "../UI/Button";
import classes from "./CartItem.module.css";
import { useEffect, useState } from "react";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const [amountEffectStatus, setAmountEffectStatus] = useState(false);

  const amountStyle = `${classes.amount} ${
    amountEffectStatus ? classes.bump : ""
  }`;

  useEffect(() => {
    if (props.amount === 0) {
      return;
    }
    setAmountEffectStatus(true);

    const timer = setTimeout(() => {
      setAmountEffectStatus(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [props.amount]);

  return (
    <li className={classes.cartitem}>
      <div className={classes.itemheader}>
        <h2>{props.name}</h2>
        <p className={amountStyle}>x{props.amount}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemoveOne} className={classes.deleter}>
          -
        </button>
        <button onClick={props.onAdd} className={classes.adder}>
          +
        </button>
      </div>
      <div className={classes.details}>
        <span className={classes.price}>{price}</span>
        <span className={classes.type}>{props.type}</span>
      </div>
      <div className={classes.btnPos}>
        <Button className={classes.button} onClick={props.onRemove}>
          Delete
        </Button>
      </div>
    </li>
  );
};

export default CartItem;
