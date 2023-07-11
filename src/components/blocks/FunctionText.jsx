import React from "react";

const FunctionText = ({ data }) => {
  return (
    <div className="elementProject">
      <h3 className="functionTitle font__title font__bgColor">{data.title}</h3>
      <p className="font__basicText font__color">{data.text}</p>
    </div>
  );
};

export default FunctionText;
