import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/blocks/SectionTitle";
import SectionAccordion from "../components/blocks/SectionAccordion";
import AccordionBlock from "../components/blocks/AccordionBlock";
import DotsAnimation from "../components/blocks/dotsAnimation";

const Projects = () => {
  const numberOfPoints = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  // const AnimationLign = () => {
  //   numberOfPoints.map((dot) => {
  //     return <div className="dots"></div>;
  //   });
  // };

  const AnimationLign = () => {
    let i;
    const dotsToShow = () => {
      for (i = 1; i <= numberOfPoints.length; i++) {
        console.log("TEST AnimationLign", i);
        console.log("TEST numberOfPoints", numberOfPoints.length);
        return <div className="dots"></div>;
      }
    };
  };
  return (
    <div className="wrapper">
      <motion.div
        className="stickyPage aboutConfig aboutConfig--single"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
      >
        <SectionTitle title="Projets" />
        <SectionAccordion />
      </motion.div>
    </div>
  );
};

export default Projects;
