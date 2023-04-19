import React, { useContext } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/blocks/SectionTitle";
import { ThemeContext } from "../components/layouts/PageConfig";

const Services = () => {
  const { language, theme, colorTheme, textToShow } = useContext(ThemeContext);

  return (
    <div className="wrapper">
      <motion.div
        className="stickyPage aboutConfig"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 3000 } }}
      >
        <SectionTitle title={textToShow.services_page.title} />

        <div className="gridManager">
          <div className="cardIconText font__color">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              viewBox="0 0 24 24"
            >
              <g>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z" />
              </g>
            </svg>
            <h2 className="font__infoTitle font__color">TEST</h2>
            <p className="font__basicText font__color">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              earum libero maxime atque ullam incidunt, fuga inventore vitae!
              Accusamus unde ratione sed non laboriosam.
            </p>
          </div>
          <div className="cardIconText font__color">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </svg>
            <h2 className="font__infoTitle font__color">TEST</h2>
            <p className="font__basicText font__color">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              earum libero maxime atque ullam incidunt, fuga inventore vitae!
              Accusamus unde ratione sed non laboriosam.
            </p>
          </div>
          <div className="cardIconText font__color">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </svg>
            <h2 className="font__infoTitle font__color">TEST</h2>
            <p className="font__basicText font__color">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              earum libero maxime atque ullam incidunt, fuga inventore vitae!
              Accusamus unde ratione sed non laboriosam.
            </p>
          </div>
          <div className="cardIconText font__color">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>
            <h2 className="font__infoTitle font__color">TEST</h2>
            <p className="font__basicText font__color">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              earum libero maxime atque ullam incidunt, fuga inventore vitae!
              Accusamus unde ratione sed non laboriosam.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
