import { motion } from "framer-motion";

const TitleAndSubTitle = ({ title, subtitle }) => {
  return (
    <div className="titleAndSubTitle">
      <motion.h2
        className="font__BigText__capital font__BigText__capital--D textColor"
        initial={{ x: "-100vw" }}
        animate={{ x: "0vw" }}
        transition={{ duration: 1, type: "spring", delay: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="font__BigText__writing font__BigText__writing--A font__color"
        initial={{ x: "-100vw" }}
        animate={{ x: "0vw" }}
        transition={{ duration: 1, type: "spring", delay: 0.75 }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default TitleAndSubTitle;
