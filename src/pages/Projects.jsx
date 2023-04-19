import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/blocks/SectionTitle";
import SectionAccordion from "../components/blocks/SectionAccordion";
import AccordionBlock from "../components/blocks/AccordionBlock";

const Projects = () => {
  return (
    <div className="wrapper">
      <motion.div
        className="stickyPage aboutConfig"
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
