import React from "react";

const SectionSkills = ({ intro }) => {
  return (
    <section className="sectionSkills">
      <div className="sectionSkills__firstPart">
        <div className="sectionSkills__firstPart--top">
          <div className="component">COMPOSANT LIGNES</div>
          <div className="component">COMPOSANT LIGNES</div>
        </div>
        <div className="sectionSkills__firstPart--bottom">
          <div className="component">COMPOSANT BUTTON</div>
          <div className="component">COMPOSANT BUTTON</div>
        </div>
      </div>
      <div className="sectionSkills__secondPart">
        <div className="component">Skills</div>
        <div className="component">Skills</div>
        <div className="component">Skills</div>
        <div className="component">Skills</div>
        <div className="component">Skills</div>
      </div>
    </section>
  );
};

export default SectionSkills;
