import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../components/layouts/PageConfig";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

const ServicesDetails = ({
  title,
  text,
  index,
  changeIndexToShow,
  indexToShowFirst,
  children,
  textData,
  lottieSrc,
}) => {
  const { language, theme, colorTheme, textToShow } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [activate, setActivate] = useState("");

  const [selectedBox, setSelectedBox] = useState(false);

  useEffect(() => {
    setActivate(isOpen ? "clicked" : "");
  }, [isOpen]);

  const activateTheCard = () => {
    if (isOpen) {
      changeIndexToShow(null);
    } else {
      changeIndexToShow(index);
    }
    setIsOpen(!isOpen);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setSelectedBox(indexToShowFirst);
  }, [indexToShowFirst]);

  const reduceBox = () => {
    changeIndexToShow(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      id={selectedBox == index ? "boxSelected" : ""}
      className={"gridManager__box " + activate}
    >
      <div className="detailCard gridManager__box__card gridManager__box__card--cardC">
        <div className="detailCard__header">
          <div className="detailCard__header__container">
            <div className="detail">
              <div className="detail__title">
                {children}
                <h2 className="detail__title--text">{textData.title}</h2>
              </div>

              <div className="detail__close" onClick={reduceBox}>
                <span>X</span>
              </div>
            </div>
          </div>
        </div>

        <div className="detailCard__grid">
          <div className="detailCard__grid__element">
            <h3 className="font__card--title">{textData.detail.A.title}</h3>
            <p className="font__card--text">{textData.detail.A.text}</p>
          </div>

          <div className="detailCard__grid__element">
            <Player autoplay speed={1} loop src={lottieSrc} />
          </div>

          <div className="detailCard__grid__element">
            <h3 className="font__card--title">{textData.detail.B.title}</h3>
            <p className="font__card--text">{textData.detail.B.text}</p>
          </div>
          <div className="detailCard__grid__element">
            <h3 className="font__card--title">{textData.detail.C.title}</h3>
            <p className="font__card--text">{textData.detail.C.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
