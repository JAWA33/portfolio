import React, { useState, useEffect, useContext } from "react";
import TEXT_ENG from "../../database/TEXT_ENG.json";
import TEXT_FR from "../../database/TEXT_FR.json";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "./PageConfig";

const Header = () => {
  const { language, theme, colorTheme, textToShow } = useContext(ThemeContext);

  const location = useLocation();
  const actualPage = location.pathname;

  return (
    <header className="menu">
      <div className="menu__logo">
        {colorTheme === "green" ? (
          <img src={Logo_green} alt={textToShow.header_img.alt_1} />
        ) : null}
        {colorTheme === "blue" ? (
          <img src={Logo_blue} alt={textToShow.header_img.alt_1} />
        ) : null}
        {colorTheme === "yellow" ? (
          <img src={Logo_yellow} alt={textToShow.header_img.alt_1} />
        ) : null}
        {colorTheme === "red" ? (
          <img src={Logo_red} alt={textToShow.header_img.alt_1} />
        ) : null}
        {colorTheme === "purple" ? (
          <img src={Logo_purple} alt={textToShow.header_img.alt_1} />
        ) : null}
      </div>

      <nav className="menu__navigation">
        <ul className="menu__navigation__list">
          <Link to="/">
            <li
              id={actualPage === "/" ? "activePage" : ""}
              className={
                actualPage === "/"
                  ? "menu__navigation__list--lign fillPathColor activePage"
                  : "menu__navigation__list--lign fillPathColor "
              }
            >
              <svg
                className={"menu__icon fillPathColor--" + theme}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className={"fillPathColor--" + theme}
                  d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
                />
              </svg>

              <p
                className={
                  "font__color" +
                  (actualPage === "/" ? "--active" : "") +
                  " font__menu textColor--" +
                  theme
                }
              >
                {textToShow.header_menu.li_1}
              </p>
            </li>
          </Link>
          <Link to="/about">
            <li
              id={actualPage === "/about" ? "activePage" : ""}
              className={
                actualPage === "/about"
                  ? "menu__navigation__list--lign fillPathColor activePage"
                  : "menu__navigation__list--lign fillPathColor "
              }
            >
              <svg
                className={"menu__icon fillPathColor--" + theme}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className={"fillPathColor--" + theme}
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                />
              </svg>

              <p
                className={
                  "font__color" +
                  (actualPage === "/about" ? "--active" : "") +
                  " font__menu textColor--" +
                  theme
                }
              >
                {textToShow.header_menu.li_2}
              </p>
            </li>{" "}
          </Link>
          <Link to="/services">
            <li
              id={actualPage === "/services" ? "activePage" : ""}
              className={
                actualPage === "/services"
                  ? "menu__navigation__list--lign fillPathColor activePage"
                  : "menu__navigation__list--lign fillPathColor "
              }
            >
              <svg
                className={"menu__icon fillPathColor--" + theme}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <rect fill="none" height="24" width="24" />
                <path
                  className={"fillPathColor--" + theme}
                  d="M3,14h4v-4H3V14z M3,19h4v-4H3V19z M3,9h4V5H3V9z M8,14h13v-4H8V14z M8,19h13v-4H8V19z M8,5v4h13V5H8z"
                />
              </svg>

              <p
                className={
                  "font__color" +
                  (actualPage === "/services" ? "--active" : "") +
                  " font__menu textColor--" +
                  theme
                }
              >
                {textToShow.header_menu.li_3}
              </p>
            </li>{" "}
          </Link>{" "}
          <Link to="/projects">
            <li
              id={actualPage === "/projects" ? "activePage" : ""}
              className={
                actualPage === "/projects"
                  ? "menu__navigation__list--lign fillPathColor activePage"
                  : "menu__navigation__list--lign fillPathColor "
              }
            >
              <svg
                className={"menu__icon fillPathColor--" + theme}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className={"fillPathColor--" + theme}
                  d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"
                />
              </svg>

              <p
                className={
                  "font__color" +
                  (actualPage === "/projects" ? "--active" : "") +
                  " font__menu textColor--" +
                  theme
                }
              >
                {textToShow.header_menu.li_4}
              </p>
            </li>{" "}
          </Link>
          <Link to="/contact">
            <li
              id={actualPage === "/contact" ? "activePage" : ""}
              className={
                actualPage === "/contact"
                  ? "menu__navigation__list--lign fillPathColor activePage"
                  : "menu__navigation__list--lign fillPathColor "
              }
            >
              <svg
                className={"menu__icon fillPathColor--" + theme}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className={"fillPathColor--" + theme}
                  d="M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2zm-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2z"
                />
              </svg>

              <p
                className={
                  "font__color" +
                  (actualPage === "/contact" ? "--active" : "") +
                  " font__menu textColor--" +
                  theme
                }
              >
                {textToShow.header_menu.li_5}
              </p>
            </li>{" "}
          </Link>
        </ul>

        <div className="menu__navigation">
          <button className="newHeader__btn">
            <span className="newHeader__btn__span">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
