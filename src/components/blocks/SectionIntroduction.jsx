import React from "react";

const SectionIntroduction = ({ text, textColor, intro }) => {
  return (
    <section className="sectionIntro">
      <p className="font__introTitle font__color">
        {text}
        <span className="textColor">{textColor}</span>
      </p>
      <p className="font__basicText font__color">{intro}</p>
    </section>
  );
};

export default SectionIntroduction;
