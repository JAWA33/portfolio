import React, { Children, useContext } from "react";
import { ThemeContext } from "../layouts/PageConfig";
import Experience from "../elements/Experience";
import { Outlet } from "react-router-dom";
import BlockBigText from "./BlockBigText";

const ExpBlock = ({ intro, text, children }) => {
  const { language, theme, colorTheme, textToShow } = useContext(ThemeContext);
  return (
    <div className="expBlock">
      <BlockBigText model="D" intro={intro} text={text} reverse={false} />
      <div className="expBlock__grid">{children}</div>
    </div>
  );
};

export default ExpBlock;
