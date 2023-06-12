import { useContext } from "react";
import { ThemeContext } from "../layouts/PageConfig";

const InterSection = () => {
  const { language } = useContext(ThemeContext);

  return (
    <div className="arrowMargin">
      <div className="arrowAction textColor">
        <span className="font__scroll">
          {language === "ENG" ? "Scroll To Continue" : "En savoir plus"}
        </span>
      </div>
      <div className="sectionIntro__next">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
      </div>
    </div>
  );
};

export default InterSection;
