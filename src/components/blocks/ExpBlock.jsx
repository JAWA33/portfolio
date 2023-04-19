import React, { Children, useContext } from "react";
import { ThemeContext } from "../layouts/PageConfig";
import Experience from "../elements/Experience";
import { Outlet } from "react-router-dom";

const ExpBlock = ({ title, children }) => {
  const { language, theme, colorTheme, textToShow } = useContext(ThemeContext);
  return (
    <div className="expBlock">
      <h2 className="expBlock__title font__introTitle font__color">{title}</h2>
      <div className="expBlock__grid">{children}</div>
    </div>
  );
};

export default ExpBlock;
