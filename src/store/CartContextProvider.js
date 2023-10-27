import { CartContext } from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (prevState, action) => {
  if (action.type === "ADD_ITEM") {
    const newItems = prevState.items.concat(action.item);
    const newTotalAmount =
      prevState.totalAmount + action.item.price * action.item.amount;

    return {
      items: newItems,
      totalAmount: newTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
  }

  return defaultCartState;
};

export const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatch({ type: "ADD_ITEM", item: item });
  };
  const removeItemHandler = (id) => {
    dispatch({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    item: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
