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
import SocialButtons from "./SocialButtons.jsx";
import ErrorProjectPage from "../../pages/ErrorProjectPage.jsx";
import { ToastContainer } from "react-toastify";
import CookieConsent from "react-cookie-consent";
import HeaderHover from "./HeaderHover.jsx";

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
  const [language, setLanguage] = useState(savedLanguage || "FR");
  const [colorTheme, setColorTheme] = useState(savedColor || "blue");
  const [showCookie, setShowCookie] = useState(true);
  const [isPhone, setIsPhone] = useState(true);

  useEffect(() => {
    let info = localStorage.getItem("jwd_info");
    setShowCookie(info === "false" ? false : true);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setIsPhone(true);
    } else {
      setIsPhone(false);
    }
  }, [window.innerWidth]);

  const [logoURL, setLogoURL] = useState("");

  const container = useRef(null);

  const location = useLocation();
  const actualPage = location.pathname;

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const TestDots = () => {
    <div className="rotateDots__container">
      {numberOfPoints.map((dot, index) => {
        return <div key={index} className="dots"></div>;
      })}
    </div>;
  };

  const favicon = document.getElementById("favicon");

  useEffect(() => {
    let faviconLink = "/vite-" + colorTheme + ".svg";
    favicon.setAttribute("href", faviconLink);
  }, [colorTheme]);

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
          {/* <Header /> */}
          {/* isPhone ? <HeaderMorph /> : */}
          <HeaderHover />
          <Params
            language={language}
            themeColor={colorTheme}
            theme={theme}
            toggleTheme={toggleTheme}
            toggleColorTheme={toggleColorTheme}
            toggleLanguage={toggleLanguage}
          />
          {showCookie && (
            <CookieConsent
              debug={true}
              buttonText="Ok, j'accepte"
              style={{
                background:
                  theme === "dark"
                    ? "rgba(250, 250, 250, 0.9)"
                    : "rgba(20, 20, 20, 0.9)",
                padding: "0 1rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
              buttonStyle={{
                opacity: 1,
                background: colorTheme,
                color: colorTheme === "yellow" ? "black" : "white",
                height: "36px",
                padding: "0 1rem",
                borderRadius: "0.45rem",
                marginLeft: "2rem",
              }}
              onAccept={(e) => {
                localStorage.setItem("jwd_info", e);
              }}
              expires={365}
            >
              <p className="font__label font__color--opposite">
                <span
                  className="font__label font__color--opposite"
                  style={{
                    textDecorationLine: "underline",
                    fontStyle: "italic",
                    display: "block",
                  }}
                >
                  Information sur les cookies :
                </span>
                Ce site utilise des cookies de Google Analytics pour collecter
                des informations sur l'utilisation du site. Ces cookies sont
                utilisés uniquement à des fins d'analyse et ne recueillent pas
                de données personnelles. En continuant à naviguer sur ce site,
                vous acceptez l'utilisation de ces cookies.
              </p>
            </CookieConsent>
          )}
          <SocialButtons />
          <main className="home">
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={theme === "dark" ? "light" : "dark"}
            />
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
            {/* //! change to : actualPage === "/contact" */}
            {true ? (
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
            <AnimatePresence>
              <Routes location={location} key={location.pathname}>
                <Route exact path="" element={<Home />} />
                <Route exact path="about" element={<About />} />
                <Route exact path="services" element={<Services />} />
                <Route exact path="projects" element={<Projects />} />
                <Route exact path="contact" element={<Contact />} />
                <Route
                  exact
                  path="projects/error"
                  element={<ErrorProjectPage />}
                />
              </Routes>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default PageConfig;
