import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import { createContext, useState } from "react";
import { useEffect } from "react";
import Params from "../layouts/Params.jsx";
import Home from "../../pages/Home.jsx";
import About from "../../pages/About.jsx";
import Services from "../../pages/Services.jsx";
import Projects from "../../pages/Projects.jsx";
import Contact from "../../pages/Contact.jsx";

import TEXT_FR from "../../database/TEXT_FR.json";
import TEXT_ENG from "../../database/TEXT_ENG.json";

export const ThemeContext = createContext(null);

function PageConfig() {
  const savedTheme = localStorage.getItem("theme");
  const savedLanguage = localStorage.getItem("lang");
  const savedColor = localStorage.getItem("color");

  const [theme, setTheme] = useState(savedTheme || "dark");
  const [language, setLanguage] = useState(savedLanguage || "ENG");
  const [colorTheme, setColorTheme] = useState(savedColor || "green");

  const [logoURL, setLogoURL] = useState("");

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

  const text_FR = TEXT_FR;
  const text_ENG = TEXT_ENG;

  const [textToShow, setTextToShow] = useState(text_FR);

  useEffect(() => {
    if (language === "FR") {
      setTextToShow(text_FR);
    } else {
      setTextToShow(text_ENG);
    }
  }, [language]);

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
          <Header language={language} theme={colorTheme} />
          <Params
            language={language}
            themeColor={colorTheme}
            theme={theme}
            toggleTheme={toggleTheme}
            toggleColorTheme={toggleColorTheme}
            toggleLanguage={toggleLanguage}
          />
          <main className="home">
            <Routes>
              <Route exact path="" element={<Home />} />
              <Route exact path="about" element={<About />} />
              <Route exact path="services" element={<Services />} />
              <Route exact path="projects" element={<Projects />} />
              <Route exact path="contact" element={<Contact />} />
            </Routes>
            {/* <Outlet language={language} colorTheme={colorTheme} theme={theme} /> */}
          </main>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default PageConfig;
