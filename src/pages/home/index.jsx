import React, { useEffect, useState } from "react";
import { DYNAMIC_CONTENT, VALID_LANGUAGES } from "../../utils/util-language";
import LanguageSwitcher from "../../components/language-switcher";

export default function Home() {
  const [currentLanguage, setCurrentLenguage] = useState("en");

  const handleLanguageS = (newLang) => {
    if (VALID_LANGUAGES.includes(newLang)) {
      setCurrentLenguage(newLang);
    } else {
      console.log("error", newLang);
    }
  };

  useEffect(() => {
    console.log("currentLanguage", currentLanguage);

    return () => {
      //
    };
  }, [currentLanguage]);

  return (
    <main className="home">
      <LanguageSwitcher onchange={handleLanguageS} langs={VALID_LANGUAGES} />

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
