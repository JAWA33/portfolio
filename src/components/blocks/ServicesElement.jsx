import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../components/layouts/PageConfig";

const ServicesElement = ({ title, text, children }) => {
  const { language, theme, colorTheme, textToShow } = useContext(ThemeContext);

  return (
    <div className="gridManager__box">
      <div className="gridManager__box__card gridManager__box__card--cardA">
        <div className="box font__color">
          <div className="box__content">
            {children}
            <h2 className="font__infoTitle font__color">{title}</h2>
            {/* <p className="font__basicText font__color">{text}</p> */}
          </div>
        </div>
      </div>
      <div className="gridManager__box__card gridManager__box__card--cardB">
        <div className="box font__color">
          <div className="box__content">
            <p className="font__servicesCards font__color">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesElement;
