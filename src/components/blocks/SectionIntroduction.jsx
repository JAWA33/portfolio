import React from "react";
import InterSection from "../elements/InterSection";

const SectionIntroduction = ({ text, textColor, intro, introBis }) => {
  return (
    <section className="sectionIntro">
      <h2 className="font__introTitle font__color">
        {text}
        <span className="textColor">{textColor}</span>
      </h2>
      <p className="font__basicText font__color">{intro}</p>
      <p className="font__basicText font__color">{introBis}</p>
      <InterSection />
    </section>
  );
};

export default SectionIntroduction;
