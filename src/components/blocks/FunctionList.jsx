import React, { useEffect } from "react";

const FunctionList = ({ title, list }) => {
  return (
    <div className="elementProject elementProject--small ">
      <h3 className="functionTitle font__title font__bgColor">{title}</h3>
      <ul>
        {list &&
          list.map((el, index) => {
            return <li key={index}>{el.tool}</li>;
          })}
      </ul>
    </div>
  );
};

export default FunctionList;
