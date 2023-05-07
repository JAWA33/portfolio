import React, { useContext } from "react";
import { ThemeContext } from "../layouts/PageConfig";
import ExpBlock from "./ExpBlock";
import Experience from "../elements/Experience";
import SectionSkills from "./SectionSkills";
import InterSection from "../elements/InterSection";

const SectionExperience = () => {
  const { language, theme, colorTheme, textToShow } = useContext(ThemeContext);
  return (
    <section className="sectExp">
      <div className="sectExp__grid font__color">
        <div className="sectExp__grid__element">
          <ExpBlock
            intro={textToShow.about_experience.titles.education.intro}
            text={textToShow.about_experience.titles.education.text}
          >
            <Experience
              year={textToShow.about_experience.education.A.year}
              title={textToShow.about_experience.education.A.title}
              text={textToShow.about_experience.education.A.text}
            />
            <Experience
              year={textToShow.about_experience.education.B.year}
              title={textToShow.about_experience.education.B.title}
              text={textToShow.about_experience.education.B.text}
            />
          </ExpBlock>
          <ExpBlock
            intro={textToShow.about_experience.titles.design.intro}
            text={textToShow.about_experience.titles.design.text}
          >
            <Experience
              year={textToShow.about_experience.design.A.year}
              title={textToShow.about_experience.design.A.title}
              text={textToShow.about_experience.design.A.text}
            />
            <Experience
              year={textToShow.about_experience.design.B.year}
              title={textToShow.about_experience.design.B.title}
              text={textToShow.about_experience.design.B.text}
            />
            <Experience
              year={textToShow.about_experience.design.C.year}
              title={textToShow.about_experience.design.C.title}
              text={textToShow.about_experience.design.C.text}
            />
          </ExpBlock>
        </div>
        <div className="sectExp__grid__element">
          <ExpBlock
            intro={textToShow.about_experience.titles.experience.intro}
            text={textToShow.about_experience.titles.experience.text}
          >
            {" "}
            <Experience
              year={textToShow.about_experience.experience.A.year}
              title={textToShow.about_experience.experience.A.title}
              text={textToShow.about_experience.experience.A.text}
            />
            <Experience
              year={textToShow.about_experience.experience.B.year}
              title={textToShow.about_experience.experience.B.title}
              text={textToShow.about_experience.experience.B.text}
            />
            <Experience
              year={textToShow.about_experience.experience.C.year}
              title={textToShow.about_experience.experience.C.title}
              text={textToShow.about_experience.experience.C.text}
            />
            <Experience
              year={textToShow.about_experience.experience.D.year}
              title={textToShow.about_experience.experience.D.title}
              text={textToShow.about_experience.experience.D.text}
            />
          </ExpBlock>

          <div className="sectExp__grid__element">
            <SectionSkills intro="Skills" />
          </div>
        </div>
        <div className="sectExp__grid__element sectExp__grid__element--larger">
          <ExpBlock
            intro={textToShow.about_experience.titles.before.intro}
            text={textToShow.about_experience.titles.before.text}
          >
            <Experience
              year={textToShow.about_experience.before.A.year}
              title={textToShow.about_experience.before.A.title}
              text={textToShow.about_experience.before.A.text}
            />
            <Experience
              year={textToShow.about_experience.before.B.year}
              title={textToShow.about_experience.before.B.title}
              text={textToShow.about_experience.before.B.text}
            />
            <Experience
              year={textToShow.about_experience.before.C.year}
              title={textToShow.about_experience.before.C.title}
              text={textToShow.about_experience.before.C.text}
            />
            <Experience
              year={textToShow.about_experience.before.D.year}
              title={textToShow.about_experience.before.D.title}
              text={textToShow.about_experience.before.D.text}
            />
            <Experience
              year={textToShow.about_experience.before.E.year}
              title={textToShow.about_experience.before.E.title}
              text={textToShow.about_experience.before.E.text}
            />
          </ExpBlock>
        </div>
      </div>
    </section>
  );
};

export default SectionExperience;
