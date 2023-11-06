import React from "react";
import "./restcarusel.css";
import firstRest from "../../Assests/images/sliderRestONE.jpg";
import secondRest from "../../Assests/images/sliderRestTWO.jpg";
import lastRest from "../../Assests/images/sliderRestTHREE.jpeg";

const RestCarusel = () => {
  return (
    <div className="rest_carusel">
      <div className="md:w-2/4 md:mb-0 mb-6 flex flex-col text-center items-center">
        <section
          id="slider"
          className="w-16 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0"
        >
          <input
            type="radio"
            name="restslider"
            id="r1"
            defaultChecked="false"
          />
          <input type="radio" name="restslider" id="r2" defaultChecked="true" />
          <input
            type="radio"
            name="restslider"
            id="r3"
            defaultChecked="false"
          />
          <label htmlFor="r1" id="slide1">
            <img
              className="fea"
              src={firstRest}
              alt="My img"
              height="100%"
              width="100%"
            />
          </label>
          <label htmlFor="r2" id="slide2">
            <img
              className="fea"
              src={secondRest}
              alt="My img"
              height="100%"
              width="100%"
            />
          </label>
          <label htmlFor="r3" id="slide3">
            <img
              className="fea"
              src={lastRest}
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
export default RestCarusel;
