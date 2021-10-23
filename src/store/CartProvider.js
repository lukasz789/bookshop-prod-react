import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState =
  localStorage.getItem("cart") === null
    ? {
        items: [],
        totalAmount: 0,
      }
    : JSON.parse(localStorage.getItem("cart"));

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.price;
    let updatedItems;
    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[exisitingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      updatedItems = [...state.items];
      updatedItems[exisitingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    console.log(updatedItems);
    console.log(updatedTotalAmount);
    localStorage.setItem(
      "cart",
      JSON.stringify({
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      })
    );
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_WHOLE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedTotalAmount =
      state.totalAmount - existingCartItem.price * existingCartItem.amount;
    updatedTotalAmount = updatedTotalAmount < 0 ? 0 : updatedTotalAmount;
    const updatedItems = state.items.filter((item) => item.id !== action.id);

    console.log(updatedItems);
    localStorage.setItem(
      "cart",
      JSON.stringify({
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      })
    );
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ONE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedTotalAmount = state.totalAmount - existingCartItem.price;
    updatedTotalAmount = updatedTotalAmount < 0 ? 0 : updatedTotalAmount;
    let updatedItems;

    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    console.log(updatedItems);
    localStorage.setItem(
      "cart",
      JSON.stringify({
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      })
    );
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR") {
    localStorage.setItem(
      "cart",
      JSON.stringify({
        items: [],
        totalAmount: 0,
      })
    );
    return {
      items: [],
      totalAmount: 0,
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

  const removeWholeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_WHOLE", id: id });
  };

  const removeOneItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ONE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    clearCart: clearCartHandler,
    addItem: addItemToCartHandler,
    removeWholeItem: removeWholeItemFromCartHandler,
    removeOneItem: removeOneItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
