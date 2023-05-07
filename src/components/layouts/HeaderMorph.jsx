import React, { useState, useEffect, useContext } from "react";
import TEXT_ENG from "../../database/TEXT_ENG.json";
import TEXT_FR from "../../database/TEXT_FR.json";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "./PageConfig";

const HeaderMorph = () => {
  const { language, theme, colorTheme, textToShow } = useContext(ThemeContext);

  const location = useLocation();
  const actualPage = location.pathname;

  return (
    <header>
      <div className="newHeader">
        <nav className="newHeader__navigation">
          <ul className="newHeader__navigation__list">
            <Link to="/about">
              <li
                id={actualPage === "/about" ? "activePage" : ""}
                className={
                  actualPage === "/about"
                    ? "newHeader__navigation__list--reverseLign fillPathColor activePage"
                    : "newHeader__navigation__list--reverseLign fillPathColor "
                }
              >
                <button className="newHeader__btn newHeader__btn--small">
                  <svg
                    className={"newHeader__icon fillPathColor--" + theme}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className={"fillPathColor--" + theme}
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    />
                  </svg>
                </button>

                <p
                  className={
                    "font__color" +
                    (actualPage === "/about" ? "--active" : "") +
                    "font__menu font__newHeader textColor--" +
                    theme
                  }
                >
                  {" "}
                  {textToShow.header_menu.li_2}
                </p>
              </li>
            </Link>
            <Link to="/services">
              <li
                id={actualPage === "/services" ? "activePage" : ""}
                className={
                  actualPage === "/services"
                    ? "newHeader__navigation__list--reverseLign fillPathColor activePage"
                    : "newHeader__navigation__list--reverseLign fillPathColor "
                }
              >
                <button className="newHeader__btn newHeader__btn--small">
                  <svg
                    className={"newHeader__icon fillPathColor--" + theme}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <rect fill="none" height="24" width="24" />
                    <path
                      className={"fillPathColor--" + theme}
                      d="M3,14h4v-4H3V14z M3,19h4v-4H3V19z M3,9h4V5H3V9z M8,14h13v-4H8V14z M8,19h13v-4H8V19z M8,5v4h13V5H8z"
                    />
                  </svg>
                </button>

                <p
                  className={
                    "font__color" +
                    (actualPage === "/services" ? "--active" : "") +
                    "font_menu font__newHeader textColor--" +
                    theme
                  }
                >
                  {textToShow.header_menu.li_3}
                </p>
              </li>{" "}
            </Link>{" "}
            <Link to="/">
              <li
                id={actualPage === "/" ? "activePage" : ""}
                className={
                  actualPage === "/"
                    ? "newHeader__navigation__list--centerLign fillPathColor activePage"
                    : "newHeader__navigation__list--centerLign fillPathColor"
                }
              >
                <button className="newHeader__btn newHeader__btn--big">
                  {/* <svg
                    className={"newHeader__icon fillPathColor--" + theme}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className={"fillPathColor--" + theme}
                      d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
                    />
                  </svg> */}
                  <svg
                    className={
                      "newHeader__icon newHeader__icon--big fillPathColor--" +
                      theme
                    }
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.206 45.6666L34.8761 45.065C35.1246 45.0547 35.3253 44.8358 35.3225 44.5784L35.2767 39.9304C35.274 39.6734 35.1054 39.3417 34.9024 39.1943L26.1974 32.9608C25.9941 32.813 25.993 32.6836 26.241 32.6728L30.6484 32.4624C30.6484 32.4624 30.9643 32.4695 30.9643 32.2356V31.1537C30.9643 30.9634 30.6291 30.8146 30.6291 30.8146L26.478 27.4653C26.2831 27.3064 26.332 27.1756 26.5804 27.1746L35.1413 27.0937C35.3898 27.0909 35.8175 26.815 35.8175 26.5578V17.1514C35.8175 16.625 35.6615 16.469 35.4007 16.2289L33.6589 14.6173C33.2715 14.2759 32.6772 14.2955 32.6772 14.9095V19.2088C32.6772 19.4298 32.3067 19.5307 32.1321 19.4191L25.133 14.3534C25.133 14.3534 21.8314 12.1236 22.5361 10.5037C22.8171 9.85942 23.6693 9.82155 24.8545 10.8742L28.3008 13.7594C28.4969 13.9174 28.6806 13.8209 28.6806 13.5638V10.8798C28.6806 10.5233 28.6574 10.468 28.5025 10.3377L24.4846 6.88503C23.1191 5.8054 21.5338 6.18546 20.5699 7.69011C19.4739 9.40185 18.9967 13.2414 21.7021 15.7039L21.7313 15.7708C21.8484 15.894 21.9209 16.178 21.9216 16.4353L21.9273 23.0295C21.9277 23.2868 21.7194 23.5068 21.4711 23.5091L20.1752 23.5245C19.9273 23.5269 19.7212 23.7409 19.7198 23.9983L19.7122 25.6168C19.7111 25.8741 19.8699 26.2149 20.0657 26.3735L23.3907 29.067C23.5865 29.2253 23.5434 29.3547 23.2948 29.3544L20.1664 29.3507C19.9182 29.3504 19.7152 29.5607 19.7153 29.8178L19.7176 32.1707C19.7177 32.428 19.8872 32.7549 20.0941 32.8971L21.5611 33.9046C21.7681 34.047 21.938 34.3739 21.9387 34.6311L21.957 41.1622C21.958 41.4196 21.7551 41.6312 21.507 41.6327L20.1966 41.6399C19.9482 41.6413 19.7456 41.8532 19.7466 42.1102L19.7539 45.2174C19.7543 45.4747 19.9578 45.6769 20.206 45.6666ZM23.9398 23.0262L23.9276 17.9431C23.9269 17.6859 24.0964 17.5905 24.3039 17.7322L28.2305 20.4008C28.4382 20.542 28.7782 20.773 28.9858 20.9141L32.288 23.158C32.4959 23.2994 32.4624 23.4166 32.2139 23.4186L29.0662 23.4477C28.8181 23.4498 28.4118 23.4537 28.1632 23.4557L24.3925 23.4899C24.1438 23.4921 23.9401 23.2834 23.9398 23.0262ZM23.9901 41.184L23.9782 36.1005C23.9778 35.8436 24.1472 35.7483 24.3547 35.8893L32.3387 41.316C32.5462 41.4572 32.5128 41.5744 32.2647 41.5768L24.4425 41.6476C24.1942 41.6499 23.9905 41.4412 23.9901 41.184Z" />
                    <circle cx="26.8629" cy="26.8629" r="26.2796" />
                  </svg>
                </button>

                <p
                  className={
                    "newHeader__alignText font__color" +
                    (actualPage === "/" ? "--active" : "") +
                    "font__menu font__newHeader textColor--" +
                    theme
                  }
                >
                  {textToShow.header_menu.li_1}
                </p>
              </li>
            </Link>
            <Link to="/projects">
              <li
                id={actualPage === "/projects" ? "activePage" : ""}
                className={
                  actualPage === "/projects"
                    ? "newHeader__navigation__list--lign fillPathColor activePage"
                    : "newHeader__navigation__list--lign fillPathColor "
                }
              >
                <button className="newHeader__btn newHeader__btn--small">
                  <svg
                    className={"newHeader__icon fillPathColor--" + theme}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className={"fillPathColor--" + theme}
                      d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"
                    />
                  </svg>
                </button>

                <p
                  className={
                    "font__color" +
                    (actualPage === "/projects" ? "--active" : "") +
                    "font__menu font__newHeader textColor--" +
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
                    ? "newHeader__navigation__list--lign fillPathColor activePage"
                    : "newHeader__navigation__list--lign fillPathColor  "
                }
              >
                <button className="newHeader__btn newHeader__btn--small">
                  <svg
                    className={"newHeader__icon fillPathColor--" + theme}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className={"fillPathColor--" + theme}
                      d="M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2zm-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2z"
                    />
                  </svg>
                </button>

                <p
                  className={
                    "font__color" +
                    (actualPage === "/contact" ? "--active" : "") +
                    "font__menu font__newHeader textColor--" +
                    theme
                  }
                >
                  {textToShow.header_menu.li_5}
                </p>
              </li>{" "}
            </Link>
            <div className="testArrondiNegatif"></div>
          </ul>
        </nav>
      </div>
      <div className="newHeader__hiddenPart"></div>
    </header>
  );
};

export default HeaderMorph;
