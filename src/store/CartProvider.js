import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedTotalAmount;
    let updatedItems;
    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[exisitingCartItemIndex];

    if (existingCartItem) {
      updatedItems = [...state.items];
      updatedTotalAmount = state.totalAmount;
    } else {
      updatedTotalAmount = state.totalAmount + action.item.price;
      updatedItems = state.items.concat(action.item);
    }

    console.log(updatedItems);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[exisitingCartItemIndex];
    let updatedTotalAmount = state.totalAmount - existingCartItem.price + 0;
    updatedTotalAmount = updatedTotalAmount < 0 ? 0 : updatedTotalAmount;
    const updatedItems = state.items.filter((item) => item.id !== action.id);

    console.log(updatedItems);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR") {
    return {
      items: [],
      totalAmount: 0,
    };
  }
  if (action.type === "CHANGE") {
    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const updatedItems = [...state.items];
    updatedItems[exisitingCartItemIndex].type = action.typeItem;

    console.log(updatedItems);
    return {
      items: updatedItems,
      totalAmount: state.totalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const changeItemTypeHandler = (id, typeItem) => {
    dispatchCartAction({ type: "CHANGE", id: id, typeItem: typeItem });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    clearCart: clearCartHandler,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    changeItemType: changeItemTypeHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
