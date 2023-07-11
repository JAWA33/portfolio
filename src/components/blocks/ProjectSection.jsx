import React from "react";

const ProjectSection = ({ children, id, title, size }) => {
  return (
    <div className="pageProject__section" id={id}>
      <div className="pageProject__section__title">
        <h2 className="font__project--section font__color">{title}</h2>
      </div>
      <div
        className={
          "pageProject__section__grid pageProject__section__grid--" +
          size +
          " font__color"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default ProjectSection;
