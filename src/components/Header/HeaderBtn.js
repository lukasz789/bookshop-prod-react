import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from "@material-ui/core";

import { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";
import classes from "./HeaderBtn.module.css";

const HeaderBtn = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnEffectStatus, setBtnEffectStatus] = useState(false);

  const numberOfItemsInCart = cartCtx.items.length;

  const iconCartStyle = `${classes.icon} ${
    btnEffectStatus ? classes.bump : ""
  }`;

  useEffect(() => {
    if (numberOfItemsInCart === 0) {
      return;
    }
    setBtnEffectStatus(true);

    const timer = setTimeout(() => {
      setBtnEffectStatus(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items, numberOfItemsInCart]);

  return (
    <Badge
      showZero
      badgeContent={numberOfItemsInCart}
      color="primary"
      onClick={props.onClick}
      className={classes.cart}
    >
      <ShoppingCartIcon fontSize="large" className={iconCartStyle} />
    </Badge>
  );
};

export default HeaderBtn;
