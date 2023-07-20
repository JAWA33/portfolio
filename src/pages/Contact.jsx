import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/blocks/SectionTitle";
import SectionContact from "../components/blocks/SectionContact";
import SectionForm from "../components/blocks/SectionForm";
import InterSection from "../components/elements/InterSection";
import { useEffect } from "react";
import goOutAnimation from "../helpers/goOutAnimation";
import ReactGA from "react-ga4";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/contact",
      title: "Page Contact",
    });
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

        <SectionContact />

        <SectionForm />
      </motion.div>
    </div>
  );
};

export default Contact;
