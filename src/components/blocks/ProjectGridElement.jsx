import React from "react";

const ProjectGridElement = ({ children, title }) => {
  return (
    <div className="elementProject elementProject--container">
      <h4 className="font__project--element  font__bgColor">{title}</h4>
      {children}
    </div>
  );
};

export default ProjectGridElement;
