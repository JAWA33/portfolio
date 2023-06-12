import React, { useContext, useEffect, useState } from "react";
import AccordionBlock from "./AccordionBlock";

import { ThemeContext } from "../layouts/PageConfig";
import { motion } from "framer-motion";

import Pict__1__green from "../../img/accordion/green/pict__1.jpg";
import Pict__2__green from "../../img/accordion/green/pict__2.jpg";
import Pict__3__green from "../../img/accordion/green/pict__3.jpg";
import Pict__4__green from "../../img/accordion/green/pict__4.jpg";
import Pict__5__green from "../../img/accordion/green/pict__5.jpg";

import Pict__1__yellow from "../../img/accordion/yellow/pict__1.jpg";
import Pict__2__yellow from "../../img/accordion/yellow/pict__2.jpg";
import Pict__3__yellow from "../../img/accordion/yellow/pict__3.jpg";
import Pict__4__yellow from "../../img/accordion/yellow/pict__4.jpg";
import Pict__5__yellow from "../../img/accordion/yellow/pict__5.jpg";

import Pict__1__blue from "../../img/accordion/blue/pict__2.jpg";
import Pict__2__blue from "../../img/accordion/blue/pict__4.jpg";
import Pict__3__blue from "../../img/accordion/blue/pict__5.jpg";
import Pict__4__blue from "../../img/accordion/blue/pict__7.jpg";
import Pict__5__blue from "../../img/accordion/blue/pict__1.jpg";

import Pict__1__purple from "../../img/accordion/purple/pict__1.jpg";
import Pict__2__purple from "../../img/accordion/purple/pict__2.jpg";
import Pict__3__purple from "../../img/accordion/purple/pict__3.jpg";
import Pict__4__purple from "../../img/accordion/purple/pict__4.jpg";
import Pict__5__purple from "../../img/accordion/purple/pict__5.jpg";

import Pict__1__red from "../../img/accordion/red/pict__1.jpg";
import Pict__2__red from "../../img/accordion/red/pict__2.jpg";
import Pict__3__red from "../../img/accordion/red/pict__3.jpg";
import Pict__4__red from "../../img/accordion/red/pict__4.jpg";
import Pict__5__red from "../../img/accordion/red/pict__5.jpg";

const SectionAccordion = ({ children }) => {
  const { colorTheme, textToShow } = useContext(ThemeContext);

  const [pict__1, setPict__1] = useState(null);
  const [pict__2, setPict__2] = useState(null);
  const [pict__3, setPict__3] = useState(null);
  const [pict__4, setPict__4] = useState(null);
  const [pict__5, setPict__5] = useState(null);

  const [selectedBlock, setSelectedBlock] = useState("1");

  useEffect(() => {
    if (colorTheme === "green") {
      setPict__1(Pict__1__green);
      setPict__2(Pict__2__green);
      setPict__3(Pict__3__green);
      setPict__4(Pict__4__green);
      setPict__5(Pict__5__green);
    }
    if (colorTheme === "red") {
      setPict__1(Pict__1__red);
      setPict__2(Pict__2__red);
      setPict__3(Pict__3__red);
      setPict__4(Pict__4__red);
      setPict__5(Pict__5__red);
    }
    if (colorTheme === "blue") {
      setPict__1(Pict__1__blue);
      setPict__2(Pict__2__blue);
      setPict__3(Pict__3__blue);
      setPict__4(Pict__4__blue);
      setPict__5(Pict__5__blue);
    }
    if (colorTheme === "yellow") {
      setPict__1(Pict__1__yellow);
      setPict__2(Pict__2__yellow);
      setPict__3(Pict__3__yellow);
      setPict__4(Pict__4__yellow);
      setPict__5(Pict__5__yellow);
    }
    if (colorTheme === "purple") {
      setPict__1(Pict__1__purple);
      setPict__2(Pict__2__purple);
      setPict__3(Pict__3__purple);
      setPict__4(Pict__4__purple);
      setPict__5(Pict__5__purple);
    }
  }, [colorTheme]);

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
              backCard={pict__1}
              panel="1"
              selectedBlock={selectedBlock}
              toggleSelectedBlock={toggleSelectedBlock}
            />
            <AccordionBlock
              title={textToShow.projects.B.title}
              text={textToShow.projects.B.text}
              buttonTitle={textToShow.projects.B.button}
              link={textToShow.projects.B.link}
              backCard={pict__2}
              panel="2"
              selectedBlock={selectedBlock}
              toggleSelectedBlock={toggleSelectedBlock}
            />
            <AccordionBlock
              title={textToShow.projects.C.title}
              text={textToShow.projects.C.text}
              buttonTitle={textToShow.projects.C.button}
              link={textToShow.projects.C.link}
              backCard={pict__3}
              panel="3"
              selectedBlock={selectedBlock}
              toggleSelectedBlock={toggleSelectedBlock}
            />
            <AccordionBlock
              title={textToShow.projects.D.title}
              text={textToShow.projects.D.text}
              buttonTitle={textToShow.projects.D.button}
              link={textToShow.projects.D.link}
              backCard={pict__4}
              panel="4"
              selectedBlock={selectedBlock}
              toggleSelectedBlock={toggleSelectedBlock}
            />
            <AccordionBlock
              title={textToShow.projects.E.title}
              text={textToShow.projects.E.text}
              buttonTitle={textToShow.projects.E.button}
              link={textToShow.projects.E.link}
              backCard={pict__5}
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
