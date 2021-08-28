import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  clearCart: () => {},
  addItem: (item) => {},
  removeWholeItem: (id) => {},
  removeOneItem: (id) => {},
});

export default CartContext;
