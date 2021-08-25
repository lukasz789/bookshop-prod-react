import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  clearCart: () => {},
  addItem: (item) => {},
  removeItem: (id) => {},
  changeItemType: (id, typeItem) => {},
});

export default CartContext;
