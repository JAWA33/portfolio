import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../components/layouts/PageConfig";
import Me_Img_dark from "../img/Me_dark_2.jpg";
import Me_Img_light from "../img/Me_light.jpg";

import { UseTypeWriter, useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const { language, theme, colorTheme, textToShow } = useContext(ThemeContext);

  const [changedText] = useTypewriter({
    words: [
      textToShow.home_page.works._1,
      textToShow.home_page.works._2,
      textToShow.home_page.works._3,
      textToShow.home_page.works._4,
    ],
    loop: 0,
    delaySpeed: 3000,
  });

  return (
    <div className="wrapper">
      <motion.div
        className="stickyPage"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: "3s" } }}
      >
        <section className="home__section">
          <article className="home__section__article">
            <h1 className="font__title font__color">
              {textToShow.home_page.title + " "}
              <strong className="font__name  textColor ">
                {textToShow.home_page.name}
              </strong>
            </h1>
            <div className="writingAnimation">
              <h2 className="font__title font__color">
                {textToShow.home_page.intro + " "}
              </h2>
              <p
                id="animationPlay"
                className="writingAnimation__text font__work textColor"
              >
                {changedText}
              </p>
            </div>
            <p className="font__basicText font__color">
              {textToShow.home_page.presentation}
            </p>
            <button className="callToAction">
              <span className="callToAction__text">
                {textToShow.home_page.call_to_action}
              </span>
            </button>
          </article>
          <aside className="home__section__aside">
            <div className="corner corner__TopLeft"></div>
            {theme === "light" ? (
              <div className="picture__container">
                <img src={Me_Img_dark} alt={textToShow.home_page.name} />
              </div>
            ) : (
              <div className="picture__container">
                <img src={Me_Img_light} alt={textToShow.home_page.name} />
              </div>
            )}

            <div className="corner corner__BottomRight"></div>
          </aside>
        </section>
      </motion.div>
    </div>
  );
};

export default Home;
