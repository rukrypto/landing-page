import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import { VALID_LANGUAGES } from "../../utils/util-language";
import styles from "./styles.module.scss";

const LanguageSwitcher = () => {
  const { state, dispatch } = useAppContext();
  const [dropDownStatus, setDropDownStatus] = useState(false);

  const handleLanguage = (newLang) => {
    if (VALID_LANGUAGES.includes(newLang)) {
      dispatch({ type: "SET_LANGUAGE", payload: newLang });
    } else {
      console.warn("Invalid language:", newLang);
    }
    setDropDownStatus(false);
  };

  return (
    <div className={`${styles.language} ${styles.language__container}`}>
      <div
        className={styles.language__wrapper}
        onClick={() => setDropDownStatus((prev) => !prev)}
      >
        <img
          className={styles.language__image}
          src={`./assets/images/flags/${state.language}.svg`}
          alt={`${state.language} flag`}
        />
      </div>

      {dropDownStatus && (
        <div className={styles.language__dropdown}>
          {VALID_LANGUAGES.map((lang) => (
            <button key={lang} onClick={() => handleLanguage(lang)}>
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
