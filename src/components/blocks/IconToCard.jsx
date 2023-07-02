import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../components/layouts/PageConfig";
import FlexBubbleContainer from "../../components/elements/FlexBubbleContainer";
import { motion } from "framer-motion";

const IconToCard = ({ children, title, text }) => {
  const [toggleOpenCard, setToggleOpenCard] = useState(false);
  const { language, theme, colorTheme, textToShow } = useContext(ThemeContext);

  useEffect(() => {
    if (toggleOpenCard) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [toggleOpenCard]);

  return (
    <motion.div drag draggable className={toggleOpenCard ? "changeIndex" : " "}>
      <div
        className={toggleOpenCard ? "overlay" : ""}
        onClick={() => setToggleOpenCard(false)}
      ></div>
      <div
        className={
          toggleOpenCard
            ? "iconToCard iconToCard--animationOn"
            : "iconToCard iconToCard--animationOff"
        }
      >
        <div className="iconToCard__icon">
          <FlexBubbleContainer width="60px" height="60px" size="small">
            <button
              className="iconToCard__btn"
              onClick={() => setToggleOpenCard(!toggleOpenCard)}
            >
              {children}
            </button>
          </FlexBubbleContainer>
        </div>

        {toggleOpenCard && (
          <div className="iconToCard__text">
            <h3 className="font__card--smalltitle ">{title}</h3>
            <p className="font__card--text ">{text} </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default IconToCard;
