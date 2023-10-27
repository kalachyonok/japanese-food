import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon.js";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";

export const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  const itemsAmount = ctx.item.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>{itemsAmount}</span>
    </button>
  );
};
