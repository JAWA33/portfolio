import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/blocks/SectionTitle";
import SectionContact from "../components/blocks/SectionContact";
import SectionForm from "../components/blocks/SectionForm";
import InterSection from "../components/elements/InterSection";

const Contact = () => {
  // = {textToShow.contact.title}
  return (
    <div className="wrapper">
      <motion.div
        className="stickyPage aboutConfig"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
      >
        <SectionTitle title="Contact" />
        <SectionContact />
        <InterSection />
        <SectionForm />
      </motion.div>
    </div>
  );
};

export default Contact;
