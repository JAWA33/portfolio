import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { ThemeContext } from "./PageConfig.jsx";
import RollingIcon from "../elements/RollingIcon.jsx";

const BoxSettings = ({ rollingText, children, svgIcon }) => {
  const [isOpen, setIsopen] = useState(false);
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
    <div className={isOpen ? "boxPosition--open" : "boxPosition--close"}>
      <div className="boxSettings">
        <div className="boxSettings__container">{children}</div>
        <div
          className="boxSettings__rotatingText"
          onClick={() => setIsopen(!isOpen)}
        >
          <RollingIcon rollingText={rollingText}>
            <svg
              className="rollingIcon__myIcon"
              viewBox="0 0 90 90"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32.6866 90L30.8955 75.6C29.9254 75.225 29.0105 74.775 28.1508 74.25C27.2911 73.725 26.4522 73.1625 25.6343 72.5625L12.3134 78.1875L4.3411e-07 56.8125L11.5299 48.0375C11.4552 47.5125 11.4179 47.0055 11.4179 46.5165L11.4179 43.4835C11.4179 42.9945 11.4552 42.4875 11.5299 41.9625L2.53589e-07 33.1875L12.3134 11.8125L25.6343 17.4375C26.4552 16.8375 27.3134 16.275 28.209 15.75C29.1045 15.225 30 14.775 30.8955 14.4L32.6866 2.73682e-07L57.3134 4.79881e-07L59.1045 14.4C60.0746 14.775 60.9896 15.225 61.8493 15.75C62.709 16.275 63.5478 16.8375 64.3657 17.4375L77.6866 11.8125L90 33.1875L78.4702 41.9625C78.5448 42.4875 78.5821 42.9945 78.5821 43.4835L78.5821 46.5165C78.5821 47.0055 78.5075 47.5125 78.3582 48.0375L89.8881 56.8125L77.5746 78.1875L64.3657 72.5625C63.5448 73.1625 62.6866 73.725 61.7911 74.25C60.8955 74.775 60 75.225 59.1045 75.6L57.3134 90L32.6866 90ZM45.2239 60.75C49.5522 60.75 53.2463 59.2125 56.306 56.1375C59.3657 53.0625 60.8955 49.35 60.8955 45C60.8955 40.65 59.3657 36.9375 56.306 33.8625C53.2463 30.7875 49.5522 29.25 45.2239 29.25C40.8209 29.25 37.1075 30.7875 34.0836 33.8625C31.0597 36.9375 29.5493 40.65 29.5522 45C29.5522 49.35 31.0627 53.0625 34.0836 56.1375C37.1045 59.2125 40.8179 60.75 45.2239 60.75Z" />
            </svg>
          </RollingIcon>
        </div>
      </div>
    </div>
  );
};

export default BoxSettings;
