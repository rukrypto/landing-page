// import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/appContext";
import { DYNAMIC_CONTENT } from "../../utils/util-language";

export default function Home() {
  const { state } = useAppContext();
  const currentLanguage = state.language;

  return (
    <main className="home">
      <div className="">
        <p>{DYNAMIC_CONTENT[currentLanguage].title || ""}</p>
        {DYNAMIC_CONTENT[currentLanguage].menu.map((menu) => {
          return (
            <div>
              <p>{menu.category}</p>
              {menu.items.map((item) => {
                return (
                  <div>
                    <p>{item.name}</p>
                    <p>{item.ingredients.join(", ")}</p>
                    <p>{item.price}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
}
