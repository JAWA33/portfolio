import React, { useContext, useEffect, useState } from "react";
import { cubicBezier, motion } from "framer-motion";
import { ThemeContext } from "../../components/layouts/PageConfig";
import RevealText from "../../animations/RevealText";

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
    window.scrollTo({ top: 110, behavior: "smooth" });
  };

  useEffect(() => {
    setSelectedBox(indexToShowFirst);
  }, [indexToShowFirst]);

  const reduceBox = () => {
    setSelectedBox(null);
  };

  return (
    <motion.div
      id={selectedBox === index ? "boxSelected" : ""}
      className={"gridManager__box " + activate}
      onMouseLeave={reduceBox}
      initial={{ opacity: 0, scale: 0, rotate: 360 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: index / 4,
        delay: index / 10,
        type: "spring",
      }}
    >
      <div className="gridManager__box__card gridManager__box__card--cardA">
        <div className="box box--title font__color">
          <div className="box__content">
            <RevealText>{children}</RevealText>

            <h2 className="font__infoTitle font__color">{title}</h2>
          </div>
        </div>
      </div>
      <div
        className="gridManager__box__card gridManager__box__card--cardB"
        onClick={() => activateTheCard()}
      >
        <div className="box box--text font__color">
          <div className="box__content">
            <p className="font__servicesCards font__color">{text}</p>

            <div className="box__content__span">
              <span className="font__scroll">
                {language === "ENG"
                  ? "Click to know more"
                  : "Cliquez pour en savoir plus"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesElement;
