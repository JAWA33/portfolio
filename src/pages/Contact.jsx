import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/blocks/SectionTitle";
import SectionContact from "../components/blocks/SectionContact";
import SectionForm from "../components/blocks/SectionForm";
import InterSection from "../components/elements/InterSection";
import { useEffect } from "react";
import goOutAnimation from "../helpers/goOutAnimation";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="wrapper">
      <motion.div
        className="stickyPage aboutConfig"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={goOutAnimation(0.5, 0)}
      >
        <SectionTitle title="Contact" />
        <SectionForm />
        {/* <InterSection /> */}
        {/* <SectionContact /> */}
      </motion.div>
    </div>
  );
};

export default Contact;
