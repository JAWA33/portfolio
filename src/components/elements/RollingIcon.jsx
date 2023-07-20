import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../components/layouts/PageConfig";

const RollingIcon = ({ rollingText, children }) => {
  const { theme, textToShow, colorTheme } = useContext(ThemeContext);

  return (
    <div className="rollingIcon">
      <div className="rollingIcon__icon">{children}</div>
      <div className="rollingIcon__text">
        <p className="font__basicText">
          {rollingText.split("").map((letter, index) => {
            return (
              <span key={index} className="rollingIcon__text__letter">
                {letter}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default RollingIcon;
