import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/blocks/SectionTitle";

const Projects = () => {
  return (
    <div className="wrapper">
      <motion.div
        className="stickyPage"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
      >
        <SectionTitle title="Projets" />
      </motion.div>
    </div>
  );
};

export default Projects;
