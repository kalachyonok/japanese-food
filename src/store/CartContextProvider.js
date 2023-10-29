import { CartContext } from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (prevState, action) => {
  if (action.type === "ADD_ITEM") {
    const newTotalAmount =
      prevState.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = prevState.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    const existingCartItem = prevState.items[existingCartItemIndex];

    let updatedItem;
    let newItems;

    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      newItems = [...prevState.items];
      newItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItem = {
        ...action.item,
      };
      newItems = prevState.items.concat(updatedItem);
    }

    return {
      items: newItems,
      totalAmount: newTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = prevState.items.findIndex((item) => {
      return item.id === action.id;
    });

    const existingCartItem = prevState.items[existingCartItemIndex];

    const newTotalAmount = prevState.totalAmount - existingCartItem.price;

    let newItems;
    if (existingCartItem.amount === 1) {
      newItems = prevState.items.filter((item) => item.id != action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };

      newItems = [...prevState.items];
      newItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: newItems,
      totalAmount: newTotalAmount,
    };
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
  // console.log("CartContextProvider  cartContext:", cartContext);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
