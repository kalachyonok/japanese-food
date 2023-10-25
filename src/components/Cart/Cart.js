import style from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={style["cart - items"]}>
      {[{ id: "m1", name: "Sushi", amount: 2, price: 10.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={style.total}>
        <span>Итого</span>
        <span>49.99</span>
      </div>

      <div className={style.actions}>
        <button className={style["button--alt"]}>Закрыть</button>
        <button className={style.button}>Заказать</button>
      </div>
    </div>
  );
};
