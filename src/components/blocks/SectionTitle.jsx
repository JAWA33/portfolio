import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ title }) => {
  return (
    <section className="sectionTitle">
      <motion.div
        className="sectionTitle__container"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
      >
        <h1 className="font__pageTitle">{title}</h1>
      </motion.div>
    </section>
  );
};

export default SectionTitle;
