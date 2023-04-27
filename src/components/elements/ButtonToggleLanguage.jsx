import { createContext, useContext, useState, useEffect } from "react";
import { ThemeContext } from "../layouts/PageConfig.jsx";

const ButtonToggleLanguage = () => {
  const {
    language,
    theme,
    colorTheme,
    textToShow,
    toggleColorTheme,
    toggleLanguage,
    toggleTheme,
  } = useContext(ThemeContext);

  const classMoveFR = () => {
    if (language === "FR") {
      return "btnToggle__icon btnToggle__icon--fr btnToggle__icon--active";
    } else {
      return "btnToggle__icon btnToggle__icon--fr";
    }
  };
  const classMoveENG = () => {
    if (language === "ENG") {
      return "btnToggle__icon btnToggle__icon--eng btnToggle__icon--active";
    } else {
      return "btnToggle__icon btnToggle__icon--eng";
    }
  };

  return (
    <div className="btnToggle" onClick={() => toggleLanguage()}>
      <div className="btnToggle__text">
        <p
          className={
            language === "FR" ? "btnToggle__text--on" : "btnToggle__text--off"
          }
        >
          FR
        </p>
        <p
          className={
            language === "ENG" ? "btnToggle__text--on" : "btnToggle__text--off"
          }
        >
          ENG
        </p>
      </div>

      <div>
        <div
          className={language === "FR" ? classMoveFR() : classMoveENG()}
        ></div>
        <div
          className={language === "ENG" ? classMoveFR() : classMoveENG()}
        ></div>
      </div>
    </div>
  );
};

export default ButtonToggleLanguage;
