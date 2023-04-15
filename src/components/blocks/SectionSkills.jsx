import React, { useContext } from "react";
import LignInfo from "../elements/LignInfo";
import Skill from "../elements/Skill";
import { ThemeContext } from "../layouts/PageConfig";
import { useEffect } from "react";

const SectionSkills = () => {
  const { textToShow, language } = useContext(ThemeContext);

  useEffect(() => {
    console.log("textToShox", textToShow);
  }, [textToShow]);

  return (
    <section className="sectionSkills">
      <div className="sectionSkills__firstPart">
        <div className="sectionSkills__firstPart--top">
          <div className="myInfos">
            <LignInfo
              label={textToShow.skills.label.birthday}
              text={textToShow.skills.info.birthday}
            />

            <LignInfo
              label={textToShow.skills.label.city}
              text={textToShow.skills.info.city}
            />
            <LignInfo
              label={textToShow.skills.label.country}
              text={textToShow.skills.info.country}
            />
          </div>
          <div className="myInfos">
            <LignInfo
              label={textToShow.skills.label.ets}
              text={textToShow.skills.info.ets}
            />
            <LignInfo
              label={textToShow.skills.label.email}
              text={textToShow.skills.info.email}
            />
            <LignInfo
              label={textToShow.skills.label.phone}
              text={textToShow.skills.info.phone}
            />
          </div>
        </div>

        <div className="sectionSkills__firstPart--bottom">
          <button className="callToAction">
            <span className="callToAction__text">Contact Me</span>
          </button>
          <button className="otherAction">
            <span className="otherAction__text">Download CV</span>
          </button>
        </div>
      </div>
      <div className="sectionSkills__secondPart">
        <Skill text="Sass" percent={50} />
        <Skill text="Javascript" percent={60} />
        <Skill text="React" percent={80} />
        <Skill text="Skills" percent={90} />
        <Skill text="Test" percent={10} />
      </div>
    </section>
  );
};

export default SectionSkills;
