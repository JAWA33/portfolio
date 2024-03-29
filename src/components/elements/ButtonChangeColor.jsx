import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { ThemeContext } from "../layouts/PageConfig.jsx";

const ButtonChangeColor = () => {
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
    <div className="btnChangeColor" onClick={() => toggleColorTheme()}>
      <div className="btnChangeColor__icon">
        <svg
          width="20"
          height="27"
          viewBox="0 0 20 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 6.13636V9.81818L15 4.90909L10 0V3.68182C7.34784 3.68182 4.8043 4.71623 2.92893 6.5575C1.05357 8.39876 0 10.8961 0 13.5C0 15.4268 0.575 17.2186 1.55 18.7282L3.375 16.9364C2.79807 15.8797 2.49741 14.6989 2.5 13.5C2.5 11.547 3.29018 9.67407 4.6967 8.29312C6.10322 6.91217 8.01088 6.13636 10 6.13636ZM18.45 8.27182L16.625 10.0636C17.175 11.0945 17.5 12.2727 17.5 13.5C17.5 15.453 16.7098 17.3259 15.3033 18.7069C13.8968 20.0878 11.9891 20.8636 10 20.8636V17.1818L5 22.0909L10 27V23.3182C12.6522 23.3182 15.1957 22.2838 17.0711 20.4425C18.9464 18.6012 20 16.1039 20 13.5C20 11.5732 19.425 9.78136 18.45 8.27182Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default ButtonChangeColor;
