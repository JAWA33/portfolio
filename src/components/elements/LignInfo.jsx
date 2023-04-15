import React from "react";

const LignInfo = ({ label, text }) => {
  return (
    <div className="lignInfo">
      <label className="font__label font__color">{label}</label>
      <p className="font__basicText font__color">{text}</p>
    </div>
  );
};

export default LignInfo;
