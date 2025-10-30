// import React, { useEffect, useState } from "react";
import React from "react";
import TableByCategory from "../../components/table-by-category";
import { useAppContext } from "../../context/appContext";
import { DYNAMIC_CONTENT } from "../../utils/util-language";
import styles from "./styles.module.scss";

export default function Home() {
  const { state } = useAppContext();
  const currentLanguage = state.language;

  return (
    <main className="home">
      <div className="">
        {/* <p className={styles.title}>
          {DYNAMIC_CONTENT[currentLanguage].title || ""}
        </p> */}

        {DYNAMIC_CONTENT[currentLanguage].menu.map((menu, index) => {
          return (
            <React.Fragment key={index}>
              <TableByCategory menu={menu} />
            </React.Fragment>
          );
        })}
      </div>
    </main>
  );
}
