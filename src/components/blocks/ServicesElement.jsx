import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../components/layouts/PageConfig";

const ServicesElement = ({
  title,
  text,
  index,
  changeIndexToShow,
  indexToShowFirst,
  children,
}) => {
  const { language, theme, colorTheme, textToShow } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [activate, setActivate] = useState("");

  const [selectedBox, setSelectedBox] = useState(false);

  useEffect(() => {
    setActivate(isOpen ? "clicked" : "");
  }, [isOpen]);

  const activateTheCard = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      changeIndexToShow(null);
    } else {
      changeIndexToShow(index);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setSelectedBox(indexToShowFirst);
  }, [indexToShowFirst]);

  const reduceBox = () => {
    setSelectedBox(null);
    console.log("clear index", index);
  };

  return (
    <div
      id={selectedBox === index ? "boxSelected" : ""}
      className={"gridManager__box " + activate}
      onMouseLeave={reduceBox}
    >
      <div className="gridManager__box__card gridManager__box__card--cardA">
        <div className="box font__color">
          <div className="box__content">
            {children}
            <h2 className="font__infoTitle font__color">{title}</h2>
            {/* <p className="font__basicText font__color">{text}</p> */}
          </div>
        </div>
      </div>
      <div
        className="gridManager__box__card gridManager__box__card--cardB"
        onClick={() => activateTheCard()}
      >
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
