import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import solo__logo from "../../icons/solo__logo.svg";
import { Link } from "react-router-dom";

const AccordionBlock = ({
  title,
  text,
  backCard,
  children,
  panel,
  selectedBlock,
  toggleSelectedBlock,
  buttonTitle,
}) => {
  const [expanded, setExpanded] = useState("false");

  useEffect(() => {
    if (selectedBlock === panel) {
      setExpanded("true");
    } else {
      setExpanded("false");
    }
  }, [selectedBlock]);

  return (
    <motion.div
      className="accordion__panel"
      onClick={(e) => toggleSelectedBlock(e, panel)}
      initial={{ y: "100vh", scale: 0 }}
      animate={{ y: "0vh", scale: 1 }}
      transition={{
        duration: 0.5,
        delay: panel * 0.1 + 0.5,
        type: "spring",
        ease: "easeOut",
      }}
    >
      <h2 id={panel + "-heading"}>
        <button
          className="accordion__trigger"
          ariaControls={panel + "-content"}
          ariaExpanded={expanded}
        >
          <span
            className="accordion__title font__accordion"
            id={panel + "-title"}
          >
            {title}
          </span>

          <svg
            className="accordion__icon"
            ariaHidden="true"
            width="171"
            height="402"
            viewBox="0 0 171 402"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.4441 400.76L160.605 394.659C163.217 394.555 165.326 392.335 165.297 389.725L164.815 342.592C164.787 339.985 163.015 336.622 160.882 335.127L69.4051 271.916C67.2681 270.417 67.2571 269.105 69.8631 268.995L116.178 266.862C116.178 266.862 119.498 266.934 119.498 264.562V253.591C119.498 251.661 115.976 250.152 115.976 250.152L72.3541 216.189C70.3051 214.577 70.8191 213.251 73.4301 213.241L163.392 212.42C166.004 212.392 170.498 209.594 170.498 206.986V111.6C170.498 106.262 168.859 104.68 166.118 102.245L147.814 85.903C143.744 82.441 137.498 82.639 137.498 88.866V132.463C137.498 134.704 133.605 135.727 131.77 134.596L58.2201 83.226C58.2201 83.226 23.5241 60.615 30.9301 44.188C33.8831 37.655 42.8381 37.271 55.2931 47.945L91.5091 77.203C93.5691 78.805 95.5001 77.827 95.5001 75.219V48.002C95.5001 44.387 95.2561 43.826 93.6281 42.505L51.4061 7.49302C37.0561 -3.45498 20.3971 0.399019 10.2681 15.657C-1.2489 33.015 -6.2639 71.95 22.1661 96.921L22.4731 97.6C23.7031 98.849 24.4651 101.729 24.4721 104.338L24.5321 171.207C24.5361 173.816 22.3481 176.047 19.7381 176.07L6.1201 176.227C3.5151 176.251 1.3491 178.421 1.3351 181.031L1.2551 197.444C1.2431 200.053 2.9121 203.509 4.9691 205.117L39.9101 232.431C41.9681 234.036 41.5151 235.348 38.9031 235.345L6.0281 235.308C3.4191 235.304 1.2861 237.437 1.2871 240.044L1.3111 263.904C1.3131 266.513 3.0941 269.828 5.2681 271.27L20.6841 281.487C22.8591 282.931 24.6451 286.246 24.6521 288.854L24.8441 355.083C24.8551 357.693 22.7231 359.839 20.1151 359.854L6.3451 359.927C3.7351 359.941 1.6061 362.09 1.6161 364.696L1.6931 396.205C1.6971 398.814 3.8361 400.864 6.4441 400.76ZM45.6811 171.174L45.5531 119.628C45.5451 117.02 47.3261 116.053 49.5071 117.489L90.7701 144.551C92.9521 145.982 96.5251 148.325 98.7071 149.756L133.408 172.51C135.593 173.944 135.241 175.132 132.63 175.153L99.5521 175.448C96.9451 175.469 92.6751 175.509 90.0631 175.529L50.4381 175.876C47.8241 175.898 45.6841 173.782 45.6811 171.174ZM46.2091 355.304L46.0841 303.754C46.0801 301.149 47.8601 300.183 50.0411 301.613L133.941 356.642C136.122 358.074 135.771 359.263 133.163 359.287L50.9631 360.005C48.3541 360.028 46.2141 357.912 46.2091 355.304Z"
              strokeMiterlimit="10"
            />
          </svg>
        </button>
      </h2>
      <div
        className="accordion__panel--content"
        id={panel + "-content"}
        ariaLabelledBy={panel + "-heading"}
        ariaHidden={!expanded}
        role="region"
      >
        <p className="font__strongText">{text}</p>
        <Link to="/projects/error">
          <button className="callToAction">
            <span className="callToAction__text">{buttonTitle}</span>
          </button>
        </Link>

        <img
          className="accordion__image"
          src={backCard}
          alt="forêt vue du ciel"
        />
      </div>
    </motion.div>
  );
};

export default AccordionBlock;
