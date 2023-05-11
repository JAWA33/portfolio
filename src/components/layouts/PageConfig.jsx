import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import { createContext, useState, useRef } from "react";
import { useEffect } from "react";
import Params from "../layouts/Params.jsx";
import Home from "../../pages/Home.jsx";
import About from "../../pages/About.jsx";
import Services from "../../pages/Services.jsx";
import Projects from "../../pages/Projects.jsx";
import Contact from "../../pages/Contact.jsx";

import TEXT_FR from "../../database/TEXT_FR.json";
import TEXT_ENG from "../../database/TEXT_ENG.json";

import { AnimatePresence } from "framer-motion";
import DotsAnimation from "../blocks/dotsAnimation.jsx";
import HeaderMorph from "./HeaderMorph.jsx";

export const ThemeContext = createContext(null);

function PageConfig() {
  const savedTheme = localStorage.getItem("theme");
  const savedLanguage = localStorage.getItem("lang");
  const savedColor = localStorage.getItem("color");
  const text_FR = TEXT_FR;
  const text_ENG = TEXT_ENG;

  const numberOfPoints = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const [textToShow, setTextToShow] = useState(text_FR);
  const [theme, setTheme] = useState(savedTheme || "dark");
  const [language, setLanguage] = useState(savedLanguage || "ENG");
  const [colorTheme, setColorTheme] = useState(savedColor || "green");

  const [logoURL, setLogoURL] = useState("");

  const container = useRef(null);

  const location = useLocation();
  const actualPage = location.pathname;
  console.log("actualPage", actualPage);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const toggleLanguage = () => {
    setLanguage((curr) => (curr === "FR" ? "ENG" : "FR"));
  };

  const toggleColorTheme = () => {
    colorTheme === "red" && setColorTheme("blue");
    colorTheme === "blue" && setColorTheme("green");
    colorTheme === "green" && setColorTheme("purple");
    colorTheme === "purple" && setColorTheme("yellow");
    colorTheme === "yellow" && setColorTheme("red");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("color", colorTheme);
  }, [colorTheme]);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  useEffect(() => {
    if (language === "FR") {
      setTextToShow(text_FR);
    } else {
      setTextToShow(text_ENG);
    }
  }, [language]);

  const TestDots = () => {
    <div className="rotateDots__container">
      {numberOfPoints.map((dot, index) => {
        return <div key={index} className="dots"></div>;
      })}
    </div>;
  };

  return (
    <ThemeContext.Provider
      value={{
        textToShow,
        theme,
        toggleTheme,
        language,
        toggleLanguage,
        colorTheme,
        toggleColorTheme,
      }}
    >
      <div className="settings" id={theme}>
        <div className="colorTheme" id={colorTheme}>
          {/* 
          //! modifier le passage des variables avec le useContext(ThemeContext (Voir Home)) 
          */}
          {/* <Header /> */}
          <HeaderMorph />

          <Params
            language={language}
            themeColor={colorTheme}
            theme={theme}
            toggleTheme={toggleTheme}
            toggleColorTheme={toggleColorTheme}
            toggleLanguage={toggleLanguage}
          />

          <main className="home">
            <div className="animatedBackground">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {/* //! change to : actualPage === "/" */}
            {false ? (
              <div className="animatedBackground">
                <div className="blockDots">
                  <div className="rotateDots">
                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>
                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>
                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>
                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>
                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>
                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>
                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>
                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>
                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>
                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>

                    <div className="rotateDots__container">
                      {numberOfPoints.map((dot, index) => {
                        return <div key={index} className="dots"></div>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {actualPage === "/contact" ? (
              <ul className="cubeBackground">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            ) : (
              ""
            )}

            {/** //!!!  Ajout d'options sur animate presence */}
            <AnimatePresence onExitComplete={() => null}>
              <Routes>
                <Route exact path="" element={<Home />} />
                <Route exact path="about" element={<About />} />
                <Route exact path="services" element={<Services />} />
                <Route exact path="projects" element={<Projects />} />
                <Route exact path="contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default PageConfig;
