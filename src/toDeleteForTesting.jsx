import React from "react";

const DotsAnimation = () => {
  const numberOfPoints = 5;
  const numberOfLigns = 50;

  const AnimationLign = () => {
    let i;
    for (i = 0; i <= numberOfPoints; i++) {
      return <div className="dots"></div>;
    }
  };

  const AnimationRow = () => {
    let j;
    for (j = 0; j <= numberOfLigns; j++) {
      return (
        <div className="rotateDots__container">
          <AnimationLign />
        </div>
      );
    }
  };

  return (
    <div className="blockDots">
      <div className="rotateDots rotateDots--top">
        <AnimationRow />
      </div>
      <div className="rotateDots">
        <AnimationRow />
      </div>
    </div>
  );
};

export default DotsAnimation;
