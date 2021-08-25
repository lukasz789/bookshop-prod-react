import Button from "../UI/Button";
import classes from "./CartItem.module.css";
import { useState } from "react";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const [typeSelected, setTypeSelected] = useState(props.type);

  const changeTypeHandler = (event) => {
    setTypeSelected(event.target.value);
    props.onChangeType(event.target.value);
  };

  return (
    <li className={classes.cartitem}>
      <h2>{props.name}</h2>
      <div className={classes.details}>
        <span className={classes.price}>{price}</span>
        <select
          className={classes.select}
          value={typeSelected}
          onChange={changeTypeHandler}
        >
          <option value="ebook">E-book</option>
          <option value="paper">Paper</option>
        </select>
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
