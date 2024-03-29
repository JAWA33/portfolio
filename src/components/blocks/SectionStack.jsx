import React, { useContext, useState } from "react";

import { ThemeContext } from "../layouts/PageConfig";
import { useEffect } from "react";
import BlockBigText from "./BlockBigText";

import playBubble from "../../img/playBubble.jpg";
import slowCode from "../../helpers/slowCode";

const SectionStack = ({ children }) => {
  const { textToShow, language } = useContext(ThemeContext);
  const [refresh, setRefresh] = useState(false);
  const section = document.getElementById("sectionStack");

  const refreshBubbles = async () => {
    setRefresh(true);
    await slowCode(300);
    await setRefresh(false);
  };

  return (
    <section className="sectionStack" id="sectionStack">
      <div className="sectionStack__bg">
        <div
          className="sectionStack__bg__refresh"
          onClick={() => refreshBubbles()}
        >
          <svg viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6337 2.3538C12.7955 1.50806 11.778 0.861408 10.6565 0.461586C9.53489 0.061763 8.33782 -0.0810147 7.15366 0.0437961C3.48366 0.413796 0.463664 3.3938 0.0536639 7.0638C-0.496336 11.9138 3.25366 16.0038 7.98366 16.0038C9.49377 16.0038 10.9729 15.5753 12.2492 14.7681C13.5254 13.9609 14.5465 12.8082 15.1937 11.4438C15.5137 10.7738 15.0337 10.0038 14.2937 10.0038C13.9237 10.0038 13.5737 10.2038 13.4137 10.5338C12.8331 11.7828 11.84 12.7938 10.6016 13.3966C9.36314 13.9994 7.95487 14.1574 6.61366 13.8438C4.39366 13.3538 2.60366 11.5438 2.13366 9.3238C1.9361 8.44606 1.93838 7.53513 2.14036 6.65839C2.34233 5.78166 2.73883 4.96155 3.30051 4.25872C3.8622 3.55589 4.57471 2.98833 5.38533 2.59801C6.19596 2.2077 7.08396 2.00462 7.98366 2.0038C9.64366 2.0038 11.1237 2.6938 12.2037 3.7838L10.6937 5.2938C10.0637 5.9238 10.5037 7.0038 11.3937 7.0038H14.9837C15.5337 7.0038 15.9837 6.5538 15.9837 6.0038V2.4138C15.9837 1.5238 14.9037 1.0738 14.2737 1.7038L13.6337 2.3538Z" />
          </svg>
        </div>

        <img src={playBubble} alt={textToShow.stackBg.Alt} />
      </div>
      <div className="sectionStack__textContainerA">
        <BlockBigText
          model="B"
          intro={textToShow.stackBg.intro_B}
          text={textToShow.stackBg.text_B}
          reverse={true}
        />
      </div>

      <div className="sectionStack__centralContainer">
        {!refresh && children}
      </div>
    </section>
  );
};

export default SectionStack;
