import { useContext, useEffect, useState } from "react";
// import { motion } from "framer-motion";
import { ThemeContext } from "../../components/layouts/PageConfig";

const RollingIcon = ({ rollingText, children }) => {
  const { theme, textToShow, colorTheme } = useContext(ThemeContext);
  //const parameter = document.getElementById("parameter").innerText;

  //const rollingText = "Paramètres-Settings-";

  // style={transform:rotate(
  //  )}

  return (
    <div className="rollingIcon">
      <div className="rollingIcon__icon">{children}</div>
      <div className="rollingIcon__text">
        <p className="font__basicText">
          {rollingText.split("").map((letter, index) => {
            return <span className="rollingIcon__text__letter">{letter}</span>;
          })}
        </p>
      </div>
    </div>
  );
};

export default RollingIcon;
