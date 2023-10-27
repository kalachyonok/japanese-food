import { CartContext } from "./cart-context";

export const CartContextProvider = (props) => {
  const addItemHandler = (item) => {};
  const removeItemHandler = (item) => {};

  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
