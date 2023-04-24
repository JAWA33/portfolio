import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { ThemeContext } from "./PageConfig.jsx";
import RollingIcon from "../elements/RollingIcon.jsx";

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
      <button onClick={toggleTheme}>
        {theme === "dark" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            viewBox="0 0 24 24"
            height="24px"
            width="24px"
            fill="#000000"
          >
            <path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z" />
          </svg>
        )}
        {theme === "light" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <g>
              <g>
                <g>
                  <path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z" />
                </g>
                <path d="M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2z" />
              </g>
            </g>
          </svg>
        )}
      </button>
      <button onClick={toggleLanguage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
        </svg>
      </button>
      <button onClick={toggleColorTheme}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          viewBox="0 0 24 24"
        >
          <g>
            <path d="M2,20h20v4H2V20z M5.49,17h2.42l1.27-3.58h5.65L16.09,17h2.42L13.25,3h-2.5L5.49,17z M9.91,11.39l2.03-5.79h0.12l2.03,5.79 H9.91z" />
          </g>
        </svg>
      </button>
      <RollingIcon rollingText=" Paramètres - Settings -">
        <svg
          className="rollingIcon__myIcon"
          viewBox="0 0 90 90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M32.6866 90L30.8955 75.6C29.9254 75.225 29.0105 74.775 28.1508 74.25C27.2911 73.725 26.4522 73.1625 25.6343 72.5625L12.3134 78.1875L4.3411e-07 56.8125L11.5299 48.0375C11.4552 47.5125 11.4179 47.0055 11.4179 46.5165L11.4179 43.4835C11.4179 42.9945 11.4552 42.4875 11.5299 41.9625L2.53589e-07 33.1875L12.3134 11.8125L25.6343 17.4375C26.4552 16.8375 27.3134 16.275 28.209 15.75C29.1045 15.225 30 14.775 30.8955 14.4L32.6866 2.73682e-07L57.3134 4.79881e-07L59.1045 14.4C60.0746 14.775 60.9896 15.225 61.8493 15.75C62.709 16.275 63.5478 16.8375 64.3657 17.4375L77.6866 11.8125L90 33.1875L78.4702 41.9625C78.5448 42.4875 78.5821 42.9945 78.5821 43.4835L78.5821 46.5165C78.5821 47.0055 78.5075 47.5125 78.3582 48.0375L89.8881 56.8125L77.5746 78.1875L64.3657 72.5625C63.5448 73.1625 62.6866 73.725 61.7911 74.25C60.8955 74.775 60 75.225 59.1045 75.6L57.3134 90L32.6866 90ZM45.2239 60.75C49.5522 60.75 53.2463 59.2125 56.306 56.1375C59.3657 53.0625 60.8955 49.35 60.8955 45C60.8955 40.65 59.3657 36.9375 56.306 33.8625C53.2463 30.7875 49.5522 29.25 45.2239 29.25C40.8209 29.25 37.1075 30.7875 34.0836 33.8625C31.0597 36.9375 29.5493 40.65 29.5522 45C29.5522 49.35 31.0627 53.0625 34.0836 56.1375C37.1045 59.2125 40.8179 60.75 45.2239 60.75Z" />
        </svg>
      </RollingIcon>
      <RollingIcon rollingText=" monRéseau - myNetWork -">
        <svg
          className="rollingIcon__myIcon"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.22716 5.45432C3.81784 5.45432 4.38433 5.21967 4.802 4.802C5.21967 4.38433 5.45432 3.81784 5.45432 3.22716C5.45432 2.63648 5.21967 2.06999 4.802 1.65232C4.38433 1.23465 3.81784 1 3.22716 1C2.63648 1 2.06999 1.23465 1.65232 1.65232C1.23465 2.06999 1 2.63648 1 3.22716C1 3.81784 1.23465 4.38433 1.65232 4.802C2.06999 5.21967 2.63648 5.45432 3.22716 5.45432ZM4.34074 22.158C5.22676 22.158 6.07649 21.8061 6.703 21.1795C7.32951 20.553 7.68148 19.7033 7.68148 18.8173C7.68148 17.9313 7.32951 17.0815 6.703 16.455C6.07649 15.8285 5.22676 15.4765 4.34074 15.4765C3.45472 15.4765 2.60499 15.8285 1.97848 16.455C1.35197 17.0815 1 17.9313 1 18.8173C1 19.7033 1.35197 20.553 1.97848 21.1795C2.60499 21.8061 3.45472 22.158 4.34074 22.158ZM19.9309 23.2716C20.8169 23.2716 21.6666 22.9196 22.2931 22.2931C22.9196 21.6666 23.2716 20.8169 23.2716 19.9309C23.2716 19.0448 22.9196 18.1951 22.2931 17.5686C21.6666 16.9421 20.8169 16.5901 19.9309 16.5901C19.0448 16.5901 18.1951 16.9421 17.5686 17.5686C16.9421 18.1951 16.5901 19.0448 16.5901 19.9309C16.5901 20.8169 16.9421 21.6666 17.5686 22.2931C18.1951 22.9196 19.0448 23.2716 19.9309 23.2716ZM11.0222 14.363C12.2036 14.363 13.3366 13.8937 14.1719 13.0583C15.0072 12.223 15.4765 11.09 15.4765 9.90864C15.4765 8.72728 15.0072 7.59431 14.1719 6.75896C13.3366 5.92361 12.2036 5.45432 11.0222 5.45432C9.84086 5.45432 8.70789 5.92361 7.87254 6.75896C7.03719 7.59431 6.5679 8.72728 6.5679 9.90864C6.5679 11.09 7.03719 12.223 7.87254 13.0583C8.70789 13.8937 9.84086 14.363 11.0222 14.363ZM17.7037 5.45432C18.2944 5.45432 18.8609 5.21967 19.2785 4.802C19.6962 4.38433 19.9309 3.81784 19.9309 3.22716C19.9309 2.63648 19.6962 2.06999 19.2785 1.65232C18.8609 1.23465 18.2944 1 17.7037 1C17.113 1 16.5465 1.23465 16.1289 1.65232C15.7112 2.06999 15.4765 2.63648 15.4765 3.22716C15.4765 3.81784 15.7112 4.38433 16.1289 4.802C16.5465 5.21967 17.113 5.45432 17.7037 5.45432Z" />
          <path d="M4.89746 4.89771L7.12462 7.12487M15.4765 5.4545L14.3629 6.56808M17.7036 17.4255L14.3629 13.2496M6.56783 16.0335L8.79499 13.8063" />
        </svg>
      </RollingIcon>
    </div>
  );
};

export default Params;
