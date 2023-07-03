import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../components/layouts/PageConfig";
import Me_Img_dark from "../img/Me_dark_2.jpg";
import Me_Img_light from "../img/Me_light.jpg";
import Params from "../components/layouts/Params";
import { UseTypeWriter, useTypewriter } from "react-simple-typewriter";
import InterSection from "../components/elements/InterSection";
import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import RevealText from "../animations/RevealText";
import { Link } from "react-router-dom";
import myCV_FR from "../download/CV_FR.pdf";
import myCV_ENG from "../download/CV_ENG.pdf";
import goOutAnimation from "../helpers/goOutAnimation";
//! Google Analytics :
//import ReactGA from "react-ga4";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const goDownText = useTransform(scrollYProgress, [0, 1], ["0vw", "10vw"]);
  const goUpText = useTransform(scrollYProgress, [0, 1], ["5vw", "-5vw"]);
  const goRightText = useTransform(scrollYProgress, [0, 1], ["30vw", "50vw"]);
  const goLeftText = useTransform(scrollYProgress, [0, 1], ["10vw", "-100vw"]);
  const increaseText = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const decreaseText = useTransform(scrollYProgress, [0, 1], [4, 1]);

  const bumpTextA = useTransform(scrollYProgress, [0, 0.15], [0.7, 1]);
  const bumpTextB = useTransform(scrollYProgress, [0.25, 0.4], [0.7, 1]);
  const bumpTextC = useTransform(scrollYProgress, [0.5, 0.67], [0.7, 1]);
  const bumpTextD = useTransform(scrollYProgress, [0.75, 0.9], [0.7, 1]);

  const buttonAnim_left_A = useTransform(
    scrollYProgress,
    [0.1, 0.24],
    ["-50vw", "0vw"]
  );
  const buttonAnim_right_A = useTransform(
    scrollYProgress,
    [0.1, 0.24],
    ["50vw", "0vw"]
  );
  const buttonAnim_left_B = useTransform(
    scrollYProgress,
    [0.33, 0.49],
    ["-50vw", "0vw"]
  );
  const buttonAnim_right_B = useTransform(
    scrollYProgress,
    [0.33, 0.49],
    ["50vw", "0vw"]
  );
  const buttonAnim_left_C = useTransform(
    scrollYProgress,
    [0.55, 0.74],
    ["-50vw", "0vw"]
  );
  const buttonAnim_right_C = useTransform(
    scrollYProgress,
    [0.55, 0.74],
    ["50vw", "0vw"]
  );
  const buttonAnim_left_D = useTransform(
    scrollYProgress,
    [0.88, 0.95],
    ["-50vw", "0vw"]
  );
  const buttonAnim_right_D = useTransform(
    scrollYProgress,
    [0.88, 0.95],
    ["50vw", "0vw"]
  );

  const opacityText = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5]);

  const { theme, textToShow, colorTheme, language } = useContext(ThemeContext);
  const [changedText] = useTypewriter({
    words: [
      textToShow.home_page.works._1,
      textToShow.home_page.works._2,
      textToShow.home_page.works._3,
      textToShow.home_page.works._4,
    ],
    loop: 0,
    delaySpeed: 2500,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  //! Google Analytics :
  // useEffect(() => {
  //   ReactGA.send({
  //     hitType: "pageview",
  //     page: "/",
  //     title: "Page d'acceuil",
  //   });
  // }, []);
  //! Google Analytics :

  return (
    <div className="wrapper">
      <motion.div
        className="stickyPage aboutConfig scrollBySection"
        exit={goOutAnimation(0.5, 0)}
      >
        <section className="home__section">
          <article className="home__section__article">
            <motion.h1
              className="font__introTitle font__color"
              initial={{ x: "50vw" }}
              animate={{ x: 0 }}
              //exit={goOutAnimation(2, 0)}
            >
              {textToShow.home_page.title.split("").map((letter, index) => {
                return (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: language === "ENG" ? 0.5 : 0.3,
                      delay: index / 10,
                    }}
                  >
                    {letter}
                  </motion.span>
                );
              })}

              <motion.div
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 20, scale: 1.2 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                //exit={}
              >
                <strong className="font__name  textColor ">
                  {textToShow.home_page.name}{" "}
                </strong>
              </motion.div>
            </motion.h1>
            <motion.div
              className="writingAnimation"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              //exit={goOutAnimation(1, 1)}
            >
              <h2 className="font__introSubTitle font__color">
                {textToShow.home_page.intro + " "}
              </h2>
              <p
                id="animationPlay"
                className="writingAnimation__text font__introSubTitle textColor"
              >
                {changedText}
              </p>
            </motion.div>
            <RevealText>
              <p className="article font__basicText font__color">
                {textToShow.home_page.presentation}
              </p>
            </RevealText>
          </article>
          <motion.aside
            className="home__section__aside"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="corner corner__TopLeft"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            ></motion.div>
            {theme === "light" ? (
              <div className="picture__container">
                <img src={Me_Img_light} alt={textToShow.home_page.name} />
              </div>
            ) : (
              <div className="picture__container">
                <img src={Me_Img_dark} alt={textToShow.home_page.name} />
              </div>
            )}

            <motion.div
              className="corner corner__BottomRight"
              initial={{ opacity: 0, x: 400 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            ></motion.div>
          </motion.aside>
        </section>
        <InterSection />
        <section className="home__section">
          <article className="home__subSection">
            <motion.div
              className="subSection"
              style={{
                translateX: goRightText,
                translateY: goDownText,
                scale: decreaseText,
                opacity: opacityText,
              }}
            >
              <span className="subSection__top font__introTitle font__color">
                {textToShow.home_page.subtitles.A}
              </span>
            </motion.div>
            <div className="subSection">
              <motion.h2
                className="subSection__title font__introTitle font__color"
                style={{ scale: bumpTextA }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 5, type: "spring" }}
              >
                {textToShow.home_page.subtitles.A}
              </motion.h2>
            </div>
            <motion.div
              className="subSection"
              style={{
                translateX: goLeftText,
                translateY: goUpText,
                scale: increaseText,
                opacity: opacityText,
              }}
            >
              <span className="subSection__bottom font__introTitle font__color">
                {textToShow.home_page.subtitles.A}
              </span>
            </motion.div>

            <RevealText>
              <p className="article__sub font__basicText font__color">
                {textToShow.home_page.texts.A}
              </p>
            </RevealText>

            <div className="duoBtnContainer ">
              <Link to="/about">
                <motion.button
                  className="callToAction"
                  style={{
                    translateX: buttonAnim_left_A,
                  }}
                >
                  <span className="callToAction__text">
                    {textToShow.home_page.call_to_action.A}
                  </span>
                </motion.button>
              </Link>
              <a
                className="callToAction__text"
                href={language === "ENG" ? myCV_ENG : myCV_FR}
                download={
                  language === "ENG"
                    ? "JulienARMAND_Resume_CV_2023_ENG.pdf"
                    : "JulienARMAND_Resume_CV_2023_FR.pdf"
                }
              >
                <motion.button
                  className="otherAction"
                  style={{
                    translateX: buttonAnim_right_A,
                  }}
                >
                  {textToShow.home_page.other_action.A}
                </motion.button>{" "}
              </a>
            </div>
          </article>
        </section>
        <InterSection />
        <section className="home__section">
          <article className="home__subSection">
            <motion.div
              className="subSection"
              style={{
                translateX: goRightText,
                scale: decreaseText,
                opacity: opacityText,
              }}
            >
              <span className="subSection__top font__introTitle font__color">
                {textToShow.home_page.subtitles.B}
              </span>
            </motion.div>
            <div className="subSection">
              <motion.h2
                className="subSection__title font__introTitle font__color"
                style={{ scale: bumpTextB }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 5, type: "spring" }}
              >
                {textToShow.home_page.subtitles.B}
              </motion.h2>
            </div>
            <motion.div
              className="subSection"
              style={{
                translateX: goLeftText,
                scale: increaseText,
                opacity: opacityText,
              }}
            >
              <span className="subSection__bottom font__introTitle font__color">
                {textToShow.home_page.subtitles.B}
              </span>
            </motion.div>

            <RevealText>
              <p className="article__sub font__basicText font__color">
                {textToShow.home_page.texts.B}
              </p>
            </RevealText>

            <div className="duoBtnContainer ">
              <Link to="/services">
                <motion.button
                  className="callToAction"
                  style={{
                    translateX: buttonAnim_left_B,
                  }}
                >
                  <span className="callToAction__text">
                    {textToShow.home_page.call_to_action.B}
                  </span>
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="otherAction"
                  style={{
                    translateX: buttonAnim_right_B,
                  }}
                >
                  <span className="callToAction__text">
                    {textToShow.home_page.other_action.B}
                  </span>
                </motion.button>{" "}
              </Link>
            </div>
          </article>
        </section>
        <InterSection />
        <section className="home__section">
          <article className="home__subSection">
            <motion.div
              className="subSection"
              style={{
                translateX: goRightText,
                scale: decreaseText,
                opacity: opacityText,
              }}
            >
              <span className="subSection__top font__introTitle font__color">
                {textToShow.home_page.subtitles.C}
              </span>
            </motion.div>
            <div className="subSection">
              <motion.h2
                className="subSection__title font__introTitle font__color"
                style={{ scale: bumpTextC }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 5, type: "spring" }}
              >
                {textToShow.home_page.subtitles.C}
              </motion.h2>
            </div>

            <motion.div
              className="subSection"
              style={{
                translateX: goLeftText,
                scale: increaseText,
                opacity: opacityText,
              }}
            >
              <span className="subSection__bottom font__introTitle font__color">
                {textToShow.home_page.subtitles.C}
              </span>
            </motion.div>

            <RevealText>
              <p className="article__sub font__basicText font__color">
                {textToShow.home_page.texts.C}
              </p>
            </RevealText>

            <div className="duoBtnContainer ">
              <Link to="/projects">
                {" "}
                <motion.button
                  className="callToAction"
                  style={{
                    translateX: buttonAnim_left_C,
                  }}
                >
                  <span className="callToAction__text">
                    {textToShow.home_page.call_to_action.C}
                  </span>
                </motion.button>{" "}
              </Link>
              <Link to="/contact">
                <motion.button
                  className="otherAction"
                  style={{
                    translateX: buttonAnim_right_C,
                  }}
                >
                  <span className="callToAction__text">
                    {textToShow.home_page.other_action.C}
                  </span>
                </motion.button>{" "}
              </Link>
            </div>
          </article>
        </section>
        <InterSection />
        <section className="home__section">
          <article className="home__subSection">
            <motion.div
              className="subSection"
              style={{
                translateX: goRightText,
                scale: decreaseText,
                opacity: opacityText,
              }}
            >
              <span className="subSection__top font__introTitle font__color">
                {textToShow.home_page.subtitles.D}
              </span>
            </motion.div>
            <div className="subSection">
              <motion.h2
                className="subSection__title font__introTitle font__color"
                style={{ scale: bumpTextD }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 5, type: "spring" }}
              >
                {textToShow.home_page.subtitles.D}
              </motion.h2>
            </div>

            <motion.div
              className="subSection"
              style={{
                translateX: goLeftText,
                scale: increaseText,
                opacity: opacityText,
              }}
            >
              <span className="subSection__bottom font__introTitle font__color">
                {textToShow.home_page.subtitles.D}
              </span>
            </motion.div>

            <RevealText>
              <p className="article__sub font__basicText font__color">
                {textToShow.home_page.texts.D}
              </p>
            </RevealText>

            <div className="duoBtnContainer ">
              <Link to="/contact">
                <motion.button
                  className="callToAction"
                  style={{
                    translateX: buttonAnim_left_D,
                  }}
                >
                  <span className="callToAction__text">
                    {textToShow.home_page.call_to_action.D}
                  </span>
                </motion.button>{" "}
              </Link>
              <motion.button
                className="otherAction"
                style={{
                  translateX: buttonAnim_right_D,
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
              >
                <span className="callToAction__text">
                  {textToShow.home_page.other_action.D}
                </span>
              </motion.button>
            </div>
          </article>
        </section>
      </motion.div>
    </div>
  );
};

export default Home;
