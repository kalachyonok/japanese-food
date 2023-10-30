import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon.js";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../store/cart-context";

export const HeaderCartButton = (props) => {
  const [IsButtonAnimated, setIsButtonAnimated] = useState(false);
  const ctx = useContext(CartContext);

  const itemsAmount = ctx.item.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);

  const buttonClasses = `${styles.button} ${
    IsButtonAnimated ? styles.bump : ""
  }`;

  useEffect(() => {
    if (ctx.item.length === 0) {
      console.log("ctx.item.length === 00");
      return;
    }
    console.log("ctx.item.length === 01");
    setIsButtonAnimated(true);
    const timer = setTimeout(() => {
      setIsButtonAnimated(false);
    }, 300);

    return () => {
      console.log("ctx.item.length === 02");
      clearTimeout(timer);
    };
  }, [ctx.item]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>{itemsAmount}</span>
    </button>
  );
};
