import React from "react";
import styles from "./Header.module.css";
import sushiImg from "../../assets/sushi.jpg";
import { HeaderCartButton } from "./HeaderCartButton";

export const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Япона Кухня</h1>
        <HeaderCartButton />
      </header>

      <div className={styles["main-image"]}>
        <img src={sushiImg} alt="блюда японской кухни" />
      </div>
    </React.Fragment>
  );
};
