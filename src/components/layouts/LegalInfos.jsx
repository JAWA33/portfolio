import React, { useContext } from "react";
import { useState } from "react";
import { ThemeContext } from "./PageConfig";

const LegalInfos = () => {
  const { textToShow } = useContext(ThemeContext);

  return (
    <section className="legalContainer">
      <div className="legalContainer__element">
        <h2 className="font__BigText__capital font__BigText__capital--D textColor">
          {" "}
          {textToShow.legal.titles.A}
        </h2>
        <p className="font__legal font__color">{textToShow.legal.text.A1}</p>
        <p className="font__legal font__color">{textToShow.legal.text.A2}</p>
        <p className="font__legal font__color">{textToShow.legal.text.A3}</p>
        <p className="font__legal font__color">{textToShow.legal.text.A4}</p>
        <p className="font__legal font__color">{textToShow.legal.text.A5}</p>
        <p className="font__legal font__color">{textToShow.legal.text.A6}</p>
      </div>
      <div className="legalContainer__element">
        <h2 className="font__BigText__capital font__BigText__capital--D textColor">
          {" "}
          {textToShow.legal.titles.B}
        </h2>
        <p className="font__legal font__color">{textToShow.legal.text.B1}</p>
        <p className="font__legal font__color">{textToShow.legal.text.B2}</p>

        <p className="font__legal font__color">
          <a
            className="legalContainer__element__link"
            href="https://www.lws.fr"
            target="_blank"
          >
            {textToShow.legal.text.B3}
          </a>
        </p>
      </div>
      <div className="legalContainer__element">
        <h2 className="font__BigText__capital font__BigText__capital--D textColor">
          {" "}
          {textToShow.legal.titles.C}
        </h2>
        <p className="font__legal font__color">{textToShow.legal.text.C1}</p>
        <p className="font__legal font__color">{textToShow.legal.text.C2}</p>
        <p className="font__legal font__color">{textToShow.legal.text.C3}</p>
        <p className="font__legal font__color">{textToShow.legal.text.C4}</p>
        <p className="font__legal font__color">{textToShow.legal.text.C5}</p>
        <p className="font__legal font__color">{textToShow.legal.text.C6}</p>
      </div>
      <div className="legalContainer__element">
        <h2 className="font__BigText__capital font__BigText__capital--D textColor">
          {" "}
          {textToShow.legal.titles.D}
        </h2>
        <p className="font__legal font__color">{textToShow.legal.text.D1}</p>
        <p className="font__legal font__color">{textToShow.legal.text.D2}</p>
        <p className="font__legal font__color">{textToShow.legal.text.D3}</p>
      </div>
      <div className="legalContainer__element">
        <h2 className="font__BigText__capital font__BigText__capital--D textColor">
          {" "}
          {textToShow.legal.titles.E}
        </h2>
        <p className="font__legal font__color">{textToShow.legal.text.E1}</p>
        <p className="font__legal font__color">{textToShow.legal.text.E2}</p>
      </div>
      <div className="legalContainer__element">
        <h2 className="font__BigText__capital font__BigText__capital--D textColor">
          {" "}
          {textToShow.legal.titles.F}
        </h2>
        <p className="font__legal font__color">{textToShow.legal.text.F1}</p>
      </div>
      <div className="legalContainer__element">
        <h2 className="font__BigText__capital font__BigText__capital--D textColor">
          {" "}
          {textToShow.legal.titles.G}
        </h2>
        <p className="font__legal font__color">{textToShow.legal.text.G1}</p>
      </div>
      <div className="legalContainer__element">
        <h2 className="font__BigText__capital font__BigText__capital--D textColor">
          {" "}
          {textToShow.legal.titles.H}
        </h2>
        <p className="font__legal font__color">{textToShow.legal.text.H1}</p>
        <p className="font__legal font__color">{textToShow.legal.text.H2}</p>
        <p className="font__legal font__color">{textToShow.legal.text.H3}</p>
        <p className="font__legal font__color">{textToShow.legal.text.H4}</p>
      </div>
    </section>
  );
};

export default LegalInfos;
