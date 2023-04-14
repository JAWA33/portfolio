import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../components/layouts/PageConfig";
import SectionTitle from "../components/blocks/SectionTitle";
import SectionIntroduction from "../components/blocks/SectionIntroduction";
import SectionSkills from "../components/blocks/SectionSkills";
import SectionExperience from "../components/blocks/SectionExperience";

const About = () => {
  const { language, theme, colorTheme, textToShow } = useContext(ThemeContext);

  return (
    <div className="wrapper">
      <motion.div
        className="stickyPage aboutConfig"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: "3s" } }}
      >
        <SectionTitle title={textToShow.about_page.title} />
        <SectionIntroduction
          text={textToShow.about_page.text}
          textColor={textToShow.about_page.textColor}
          intro={textToShow.about_page.intro}
        />
        <SectionSkills intro="Skills" />
        <SectionExperience intro="Experience" />
      </motion.div>
    </div>
  );
};

export default About;
