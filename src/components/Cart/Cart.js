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
    ctx.removeItem(id);
  };
  const addCartItemHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={style["cart-items"]}>
      {ctx.item.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
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
