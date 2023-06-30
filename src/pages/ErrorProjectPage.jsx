import React, { useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealText from "../animations/RevealText";
import goOutAnimation from "../helpers/goOutAnimation";
import { ThemeContext } from "../components/layouts/PageConfig";
import { Link } from "react-router-dom";
import { useEffect } from "react";
//! Google Analytics :
import ReactGA from "react-ga4";

const ErrorProjectPage = () => {
  const { textToShow } = useContext(ThemeContext);
  const { scrollYProgress } = useScroll();

  //! Google Analytics :
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/projects/error",
      title: "Page No project",
    });
  }, []);
  //! Google Analytics :

  return (
    <div className="wrapper">
      <motion.div
        className="stickyPage aboutConfig scrollBySection"
        exit={goOutAnimation(0.5, 0)}
      >
        <section className="sectionIntro">
          <article className="home__section__article">
            <motion.h1
              className="font__introTitle font__color"
              initial={{ x: "50vw" }}
              animate={{ x: 0 }}
              //exit={goOutAnimation(2, 0)}
            >
              {textToShow.error_project.title}
            </motion.h1>

            <RevealText>
              <p className="article font__basicText font__color">
                {textToShow.error_project.text}{" "}
              </p>
            </RevealText>
          </article>
          <div className="duoBtnContainer ">
            <Link to="/contact">
              <motion.button
                className="callToAction"
                initial={{ translateX: "-50vw" }}
                animate={{ translateX: "0vw" }}
                transition={{ duration: 1, delay: 0.5, type: "spring" }}
              >
                <span className="callToAction__text">
                  {textToShow.error_project.button_A}
                </span>
              </motion.button>
            </Link>
            <Link to="/projects">
              <motion.button
                className="otherAction"
                initial={{ translateX: "50vw" }}
                animate={{ translateX: "0vw" }}
                transition={{ duration: 1, delay: 0.5, type: "spring" }}
              >
                <span className="callToAction__text">
                  {textToShow.error_project.button_B}
                </span>
              </motion.button>
            </Link>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default ErrorProjectPage;
