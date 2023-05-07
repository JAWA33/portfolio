import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../components/layouts/PageConfig";
import Me_Img_dark from "../img/Me_dark_2.jpg";
import Me_Img_light from "../img/Me_light.jpg";

import Params from "../components/layouts/Params";

//! to register for another time : Writing text :
// import { UseTypeWriter, useTypewriter } from "react-simple-typewriter";
//! to register for another time : Writing text :

import blueDots from "../img/lottie/blue.json";
import greenDots from "../img/lottie/green.json";
import yellowDots from "../img/lottie/yellow.json";
import redDots from "../img/lottie/red.json";
import purpleDots from "../img/lottie/purple.json";

const Home = () => {
  const { theme, textToShow, colorTheme } = useContext(ThemeContext);

  //! to register for another time : Writing text :
  // const [changedText] = useTypewriter({
  //   words: [
  //     textToShow.home_page.works._1,
  //     textToShow.home_page.works._2,
  //     textToShow.home_page.works._3,
  //     textToShow.home_page.works._4,
  //   ],
  //   loop: 0,
  //   delaySpeed: 5000,
  // });
  //! to register for another time : Writing text :

  return (
    <div className="wrapper">
      <motion.div
        className="stickyPage aboutConfig"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: "3s" } }}
      >
        <section className="home__section">
          <article className="home__section__article">
            <h1 className="font__introTitle font__color">
              {textToShow.home_page.title + " "}
              <strong className="font__name  textColor ">
                {textToShow.home_page.name}
              </strong>
            </h1>
            <div className="writingAnimation">
              <h2 className="font__introTitle font__color">
                {textToShow.home_page.intro + " "}
              </h2>
              <p
                id="animationPlay"
                className="writingAnimation__text font__introTitle textColor"
              >
                {/* //! writing text : {changedText}
                 */}
                {textToShow.home_page.myName}
              </p>
            </div>
            <p className="article font__basicText font__color">
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
                <img src={Me_Img_light} alt={textToShow.home_page.name} />
              </div>
            ) : (
              <div className="picture__container">
                <img src={Me_Img_dark} alt={textToShow.home_page.name} />
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
