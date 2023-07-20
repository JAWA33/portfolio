import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Diaporama = ({ sliders, size }) => {
  return (
    <div className={size === "small" ? "diaporama--small" : "diaporama"}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={size === "small" ? "3000" : "6000"}
        stopOnHover={false}
        showArrows={false}
        showIndicators={size === "small" ? false : true}
        showThumbs={size === "small" ? false : true}
        showStatus={false}
      >
        {sliders.map((slide, index) => {
          return (
            <div
              key={index}
              className={size === "small" ? "slider--small" : "slider"}
            >
              <img src={slide.image} />
              {(slide.title || slide.text) && (
                <div className="slider__overlay">
                  <h3>{slide.title}</h3>
                  <p className="font__basicText">{slide.text}</p>
                </div>
              )}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Diaporama;
