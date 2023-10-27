import styles from "./MealItem.module.css";
import { MealItemForm } from "./MealItemForm";
import { useContext } from "react";
import { CartContext } from "../../../store/cart-context";

export const MealItem = (props) => {
  const ctx = useContext(CartContext);

  const formattedPrise = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formattedPrise}</div>
      </div>

      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};
