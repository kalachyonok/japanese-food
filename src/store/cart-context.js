import { createContext } from "react";

export const CartContext = createContext({
  item: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
});
