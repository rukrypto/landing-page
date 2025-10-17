import { useState } from "react";
import styles from "./styles.module.scss";

const TableByCategory = ({ menu }) => {
  const { category, size, items } = menu;

  return (
    <div className={`${styles.table} ${styles.table__container}`}>
      <div className={styles.table__header}>
        <div className={styles.table__header__wrapper}>
          <p className={styles.table__header__title}>{category}</p>
          <div className={styles.table__header__sizes}>
            {size.length > 0 &&
              size.map((sizeType, index) => (
                <p key={index} className={styles.size}>
                  {sizeType}
                </p>
              ))}
          </div>
        </div>
      </div>
      <div className={styles.table__wrapper}>
        {items && items.length > 0 ? (
          items.map((item, index) => {
            return (
              <div key={index} className={styles.table__item}>
                <p className={styles.table__item__title}>{item.name}</p>
                <div className={styles.table__item__prices}>
                  <p className={styles.price}>
                    {item.price.small ? item.price.small.toFixed(2) + "€" : ""}
                  </p>
                  <p className={styles.price}>
                    {item.price.medium ? item.price.medium.toFixed(2) + "€" : ""}
                  </p>
                  <p className={styles.price}>
                    {item.price.large ? item.price.large.toFixed(2) + "€" : ""}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TableByCategory;
