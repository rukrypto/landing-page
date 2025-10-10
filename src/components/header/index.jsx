import { useState } from "react";
import LanguageSwitcher from "../language-switcher";
import styles from "./styles.module.scss";

const Header = () => {

  return (
    <div className={`${styles.menu}  ${styles.menu__container}`}>
      <div className={styles.menu__wrapper}>
        <img
          className={`${styles.menu__image} ${styles.primary}`}
          src="./assets/images/menu_left.svg"
          alt=""
        />
        <h1 className={styles.menu__title}>Tabanco</h1>
        <LanguageSwitcher />

        <img
          className={`${styles.menu__image} ${styles.secondary}`}
          src="./assets/images/menu_right.svg"
          alt=""
        />
      </div>
    </div>
  );
};
export default Header;
