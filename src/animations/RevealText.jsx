import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import goOutAnimation from "../helpers/goOutAnimation";

const RevealText = ({ children, out }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  //once : true => pas laisser l'affichage permanent après l'animation.

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    } else {
      mainControls.start("hidden");
      slideControls.start("hidden");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "fit-content",
        overflow: "hidden",
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50, scale: 0.8 },
          visible: { opacity: 1, y: 0, scale: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
        //exit={goOutAnimation(1, 1)}
      >
        {children}
      </motion.div>
      {/* <motion.div
        className="bgColor"
        variants={{
          hidden: { left: 0, opacity: 0 },
          visible: { left: "100%", opacity: 1 },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
        }}
      /> */}
    </div>
  );
};

export default RevealText;
