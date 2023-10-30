import style from "./Cart.module.css";
import { ModalWindow } from "../UI/ModalWindow";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import { CartItem } from "./CartItem";

export const Cart = (props) => {
  const ctx = useContext(CartContext);

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;

  const hasItems = ctx.item.length > 0;

  const removeCartItemHandler = (id) => {
    console.log("remove");
    ctx.removeItem(id);
  };
  const addCartItemHandler = (item) => {
    console.log("add");
    ctx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={style["cart-items"]}>
      {ctx.item.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onAdd={addCartItemHandler}
          onRemove={removeCartItemHandler}
        />
      ))}
    </ul>
  );

  return (
    <ModalWindow onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={style.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>

      <div className={style.actions}>
        <button className={style["button--alt"]} onClick={props.onCloseCart}>
          Закрыть
        </button>
        {hasItems && <button className={style.button}>Заказать</button>}
      </div>
    </ModalWindow>
  );
};
