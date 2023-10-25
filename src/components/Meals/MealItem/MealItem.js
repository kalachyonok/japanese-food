import styles from "./MealItem.module.css";
import { MealItemForm } from "./MealItemForm";

export const MealItem = (props) => {
  const formattedPrise = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles.name}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formattedPrise}</div>
      </div>

      {/* <MealItemForm /> */}
    </li>
  );
};
