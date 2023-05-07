import React, { useContext } from "react";
import { ThemeContext } from "../layouts/PageConfig";
import { useEffect } from "react";

const BlockBigText = ({ model, intro, text, reverse }) => {
  const { textToShow, language } = useContext(ThemeContext);

  useEffect(() => {
    console.log("textToShox", textToShow);
  }, [textToShow]);

  return reverse ? (
    <div className={"blockBigText blockBigText--" + model}>
      <h2>
        <span
          className={"font__BigText__capital font__BigText__capital--" + model}
        >
          {intro}
        </span>
        <span
          className={"font__BigText__writing font__BigText__writing--" + model}
        >
          {text}
        </span>
      </h2>
    </div>
  ) : (
    <div className={"blockBigText blockBigText--" + model}>
      <h2>
        <span
          className={"font__BigText__writing font__BigText__writing--" + model}
        >
          {intro}
        </span>
        <span
          className={"font__BigText__capital font__BigText__capital--" + model}
        >
          {text}
        </span>
      </h2>
    </div>
  );
};

export default BlockBigText;
