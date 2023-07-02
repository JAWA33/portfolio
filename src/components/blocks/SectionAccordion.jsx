import React, { useContext, useEffect, useState } from "react";
import AccordionBlock from "./AccordionBlock";

import { ThemeContext } from "../layouts/PageConfig";
import { motion } from "framer-motion";

import Spyde_project_img from "../../img/accordion/spyde_project.png";
import Golden_book_project_img from "../../img/accordion/goldenbook_project.png";
import Jawa_project_img from "../../img/accordion/jawa_project.png";
import OC_project_img from "../../img/accordion/OC_project.png";
import Girondins_project_img from "../../img/accordion/girondins_project.png";

const SectionAccordion = ({ children }) => {
  const { colorTheme, textToShow } = useContext(ThemeContext);

  const [selectedBlock, setSelectedBlock] = useState("1");

  const toggleSelectedBlock = (e, value) => {
    e.preventDefault();
    setSelectedBlock(value);
  };

  return (
    selectedBlock && (
      <section className="sectAccordion">
        <motion.div className="accordionWrapper" initial={{ opacity: 1 }}>
          <div className="accordion">
            <AccordionBlock
              title={textToShow.projects.A.title}
              text={textToShow.projects.A.text}
              buttonTitle={textToShow.projects.A.button}
              link={textToShow.projects.A.link}
              backCard={Spyde_project_img}
              panel="1"
              selectedBlock={selectedBlock}
              toggleSelectedBlock={toggleSelectedBlock}
            />
            <AccordionBlock
              title={textToShow.projects.B.title}
              text={textToShow.projects.B.text}
              buttonTitle={textToShow.projects.B.button}
              link={textToShow.projects.B.link}
              backCard={Jawa_project_img}
              panel="2"
              selectedBlock={selectedBlock}
              toggleSelectedBlock={toggleSelectedBlock}
            />
            <AccordionBlock
              title={textToShow.projects.C.title}
              text={textToShow.projects.C.text}
              buttonTitle={textToShow.projects.C.button}
              link={textToShow.projects.C.link}
              backCard={Golden_book_project_img}
              panel="3"
              selectedBlock={selectedBlock}
              toggleSelectedBlock={toggleSelectedBlock}
            />
            <AccordionBlock
              title={textToShow.projects.D.title}
              text={textToShow.projects.D.text}
              buttonTitle={textToShow.projects.D.button}
              link={textToShow.projects.D.link}
              backCard={OC_project_img}
              panel="4"
              selectedBlock={selectedBlock}
              toggleSelectedBlock={toggleSelectedBlock}
            />
            <AccordionBlock
              title={textToShow.projects.E.title}
              text={textToShow.projects.E.text}
              buttonTitle={textToShow.projects.E.button}
              link={textToShow.projects.E.link}
              backCard={Girondins_project_img}
              panel="5"
              selectedBlock={selectedBlock}
              toggleSelectedBlock={toggleSelectedBlock}
            />
          </div>
        </motion.div>
      </section>
    )
  );
};

export default SectionAccordion;
