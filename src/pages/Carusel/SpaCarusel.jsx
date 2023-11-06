import React from "react";
import "./spacarusel.css";
import firstSpa from "../../Assests/images/sliderSpaONE.jpg";
import secondSpa from "../../Assests/images/sliderSpaTWO.jpg";
import lastSpa from "../../Assests/images/sliderSpaTHREE.avif";

const SpaCarusel = () => {
  return (
    <div className="spa_carusel">
      <div className="md:w-2/4 md:mb-0 mb-6 flex flex-col text-center items-center">
        <section
          id="slider"
          className="w-16 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0"
        >
          <input
            type="radio"
            name="spaslider"
            id="sp1"
            defaultChecked="false"
          />
          <input type="radio" name="spaslider" id="sp2" defaultChecked="true" />
          <input
            type="radio"
            name="spaslider"
            id="sp3"
            defaultChecked="false"
          />
          <label htmlFor="sp1" id="slide1">
            <img
              className="fea"
              src={firstSpa}
              alt="My img"
              height="100%"
              width="100%"
            />
          </label>
          <label htmlFor="sp2" id="slide2">
            <img
              className="fea"
              src={secondSpa}
              alt="My img"
              height="100%"
              width="100%"
            />
          </label>
          <label htmlFor="sp3" id="slide3">
            <img
              className="fea"
              src={lastSpa}
              alt="My img"
              height="100%"
              width="100%"
            />
          </label>
        </section>
      </div>
      <button>Discover More</button>
    </div>
  );
};
export default SpaCarusel;
