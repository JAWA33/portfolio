import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/blocks/SectionTitle";
import SectionAccordion from "../components/blocks/SectionAccordion";
import AccordionBlock from "../components/blocks/AccordionBlock";
import DotsAnimation from "../components/blocks/dotsAnimation";
import { useEffect } from "react";
import goOutAnimation from "../helpers/goOutAnimation";
//! Google Analytics :
//import ReactGA from "react-ga4";

const Projects = () => {
  const numberOfPoints = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  //! Google Analytics :
  // useEffect(() => {
  //   ReactGA.send({
  //     hitType: "pageview",
  //     page: "/projects",
  //     title: "Page Projets",
  //   });
  // }, []);
  //! Google Analytics :

  return (
    <div className="wrapper">
      <motion.div
        className="stickyPage aboutConfig aboutConfig--single"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={goOutAnimation(0.5, 0)}
      >
        <SectionTitle title="Projets" />
        <SectionAccordion />
      </motion.div>
    </div>
  );
};

export default Projects;
