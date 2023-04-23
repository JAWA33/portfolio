import React from "react";

const ContactBlocks = ({ children, title, text }) => {
  return (
    <div className="contactBlocks">
      {children}
      <h3 className="font__introTitle">{title}</h3>
      <p className="font__basicText">{text}</p>
    </div>
  );
};

export default ContactBlocks;
