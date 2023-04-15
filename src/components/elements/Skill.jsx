import React, { useEffect } from "react";

const Skill = ({ text, percent }) => {
  let lengthOfProgess = percent + "%";
  let lengthOfBG = 100 - percent + "%";

  return (
    <div className="skill">
      <div className="skill__title">
        <h3 className="font__label skill__title--text font__color">{text}</h3>
        <p className="font__basicText skill__title--count font__color">
          {percent + "%"}
        </p>
      </div>
      <div className="skill__progress">
        <div
          className="skill__progress--percent bgColor"
          style={{ width: lengthOfProgess }}
        ></div>
        <div
          className="skill__progress--background"
          style={{ width: lengthOfBG }}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
