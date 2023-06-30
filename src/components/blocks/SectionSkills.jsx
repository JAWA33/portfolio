import React, { useContext } from "react";
import LignInfo from "../elements/LignInfo";
import Skill from "../elements/Skill";
import { ThemeContext } from "../layouts/PageConfig";
import { useEffect } from "react";
import BlockBigText from "./BlockBigText";
import myCV_ENG from "../../download/CV_ENG.pdf";
import myCV_FR from "../../download/CV_FR.pdf";
import { Link } from "react-router-dom";

const SectionSkills = () => {
  const { textToShow, language } = useContext(ThemeContext);

  return (
    <section className="sectionSkills">
      <div className="sectionSkills__firstPart">
        <BlockBigText
          model="C"
          intro={textToShow.about_callToAction.intro}
          text={textToShow.about_callToAction.text}
          reverse={true}
        />
      </div>
      <div className="sectionSkills__secondPart">
        <Link to="/contact">
          <button className="callToAction">
            <span className="callToAction__text">
              {textToShow.about_callToAction.buttonA}
            </span>
          </button>
        </Link>

        <a
          className="callToAction__text"
          href={language === "ENG" ? myCV_ENG : myCV_FR}
          download={
            language === "ENG"
              ? "JulienARMAND_Resume_CV_2023_ENG.pdf"
              : "JulienARMAND_Resume_CV_2023_FR.pdf"
          }
        >
          <button className="otherAction">
            <span className="otherAction__text">
              {textToShow.about_callToAction.buttonB}
            </span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default SectionSkills;

{
  /* <Skill text="Sass" percent={50} />
        <Skill text="Javascript" percent={60} />
        <Skill text="React" percent={80} />
        <Skill text="Skills" percent={90} />
        <Skill text="Test" percent={10} /> */
}
