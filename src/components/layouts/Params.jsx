import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { ThemeContext } from "./PageConfig.jsx";
import RollingIcon from "../elements/RollingIcon.jsx";
import BoxSettings from "./BoxSettings.jsx";
import ButtonChangeColor from "../elements/ButtonChangeColor.jsx";
import ButtonToggleLanguage from "../elements/ButtonToggleLanguage.jsx";
import ButtonToggleDarkmode from "../elements/ButtonToggleDarkmode.jsx";
import { motion } from "framer-motion";

//export const ThemeContext = createContext(null);

const Params = () => {
  const {
    language,
    theme,
    colorTheme,
    textToShow,
    toggleColorTheme,
    toggleLanguage,
    toggleTheme,
  } = useContext(ThemeContext);

  return (
    <div className="params">
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.73, 1.42, 0.97, 1.86],
          delay: 1.2,
        }}
      >
        <BoxSettings rollingText=" Paramètres - Settings -">
          <div className="boxSettings__container__element boxSettings__container__element--color">
            <ButtonChangeColor />
          </div>
          <div className="boxSettings__container__element">
            <ButtonToggleLanguage />
          </div>
          <div className="boxSettings__container__element">
            <ButtonToggleDarkmode />
          </div>
        </BoxSettings>
      </motion.div>
    </div>
  );
};

export default Params;
