import React from "react";

const ContactBlocks = ({ children, title, text, href }) => {
  return (
    <>
      {href ? (
        <div className="contactBlocks">
          <a href={href}>{children}</a>
          <h3 className="font__introTitle">{title}</h3>

          <p className="font__basicText">{text}</p>
        </div>
      ) : (
        <div className="contactBlocks">
          {children}
          <h3 className="font__introTitle">{title}</h3>
          <p className="font__basicText">{text}</p>
        </div>
      )}
    </>
  );
};

export default ContactBlocks;
