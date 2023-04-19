import React, { useContext } from "react";
import { ThemeContext } from "../layouts/PageConfig";

const Experience = ({ year, title, text }) => {
  const { language, theme, colorTheme, textToShow } = useContext(ThemeContext);
  return (
    <div className="expBlock__grid--element">
      <div className="experience">
        <div className="experience__time">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enablecBackground="new 0 0 24 24"
            viewBox="0 0 24 24"
          >
            <g>
              <path d="M19,4h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,20 H5V10h14V20z M9,14H7v-2h2V14z M13,14h-2v-2h2V14z M17,14h-2v-2h2V14z M9,18H7v-2h2V18z M13,18h-2v-2h2V18z M17,18h-2v-2h2V18z" />
            </g>
          </svg>
          <span className="experience__time--year font__label">{year}</span>
        </div>
        <h3 className="experience__title font__introTitle font_color">
          {title}
        </h3>
        <p className="experience__text font__basicText font__color">{text}</p>
      </div>
    </div>
  );
};

export default Experience;
