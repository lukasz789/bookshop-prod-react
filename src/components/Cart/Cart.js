import classes from "./Cart.module.css";

import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Button from "../UI/Button";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartRemoveItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartClearHandler = () => {
    cartCtx.clearCart();
  };

  const changeTypeItemHandler = (id, type) => {
    cartCtx.changeItemType(id, type);
  };

  const cartItems = (
    <ul className={classes.booklist}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          type={item.type}
          price={item.price}
          onRemove={cartRemoveItemHandler.bind(null, item.id)}
          onChangeType={changeTypeItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onClose}>
      <div className={classes.cartreset}>
        <RemoveShoppingCartIcon
          onClick={cartClearHandler}
          color="action"
          fontSize="large"
          className={classes.cartRemove}
        />
        <span className={classes.arrow}>&#x02190;</span>
        <span className={classes.cartresetcaption}>Reset</span>
      </div>
      {cartItems}
      <div className={classes.cartdetails}>
        <div className={classes.total}>
          <span>Total:</span>
          <span className={classes.price}>{totalAmount}</span>
        </div>
        <div className={classes.buttons}>
          <Button className={classes.close} onClick={props.onClose}>
            Close
          </Button>
          {cartCtx.items.length ? (
            <Button
              className={classes.orderBtn}
              onClick={() => {
                props.onClose();
                props.onOrderModalToggle();
              }}
            >
              Order
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
