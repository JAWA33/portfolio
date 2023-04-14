import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <section className="sectionTitle">
      <div className="sectionTitle__container">
        <h1 className="font__pageTitle">{title}</h1>
      </div>
    </section>
  );
};

export default SectionTitle;
