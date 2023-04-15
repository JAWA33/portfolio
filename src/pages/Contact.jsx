import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/blocks/SectionTitle";

const Contact = () => {
  // = {textToShow.contact.title}
  return (
    <div className="wrapper">
      <motion.div
        className="stickyPage"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
      >
        <SectionTitle title="Contact" />
      </motion.div>
    </div>
  );
};

export default Contact;
