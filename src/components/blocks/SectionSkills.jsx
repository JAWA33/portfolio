import React, { useContext } from "react";
import LignInfo from "../elements/LignInfo";
import Skill from "../elements/Skill";
import { ThemeContext } from "../layouts/PageConfig";
import { useEffect } from "react";
import BlockBigText from "./BlockBigText";

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
        <button className="callToAction">
          <span className="callToAction__text">
            {textToShow.about_callToAction.buttonA}
          </span>
        </button>
        <button className="otherAction">
          <span className="otherAction__text">
            {textToShow.about_callToAction.buttonB}
          </span>
        </button>
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
