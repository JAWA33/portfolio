import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/blocks/SectionTitle";
import SectionContact from "../components/blocks/SectionContact";
import SectionForm from "../components/blocks/SectionForm";
import InterSection from "../components/elements/InterSection";
import { useEffect } from "react";
import goOutAnimation from "../helpers/goOutAnimation";
import ReactGA from "react-ga4";
import LegalInfos from "../components/layouts/LegalInfos";

const Legal = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/legal",
      title: "Page Mentions Légales",
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
        <SectionTitle title="Mentions légales" />
        <LegalInfos />
      </motion.div>
    </div>
  );
};

export default Legal;
