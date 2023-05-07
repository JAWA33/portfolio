import { Outlet } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { ThemeContext } from "../layouts/PageConfig.jsx";

const FlexBubbleContainer = ({ children, width, height, size }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="flexBubbleContainer"
      style={{ "--_bubbleWidth": width, "--_bubbleHeight": height }}
    >
      <div
        className={
          size === "big"
            ? "flexBubbleContainer__settings flexBubbleContainer__settings--bigBubble"
            : "flexBubbleContainer__settings flexBubbleContainer__settings--smallBubble"
        }
      >
        <div className="flexBubbleContainer__settings__child">{children}</div>
      </div>
    </div>
  );
};

export default FlexBubbleContainer;
