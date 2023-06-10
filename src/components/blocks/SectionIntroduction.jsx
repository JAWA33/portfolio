import React from "react";
import InterSection from "../elements/InterSection";
import { motion } from "framer-motion";
import RevealText from "../../animations/RevealText";

const SectionIntroduction = ({ text, textColor, intro, introBis }) => {
  return (
    <section className="sectionIntro">
      <RevealText>
        <h2 className="font__introSubTitle font__color">
          {text}
          <span className="textColor">{textColor}</span>
        </h2>
      </RevealText>
      <RevealText>
        <p className="font__basicText font__color">{intro}</p>
      </RevealText>
      <RevealText>
        <p className="font__basicText font__color">{introBis}</p>
      </RevealText>
    </section>
  );
};

export default SectionIntroduction;
