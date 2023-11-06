import React from "react";
import "./carusel.css";
import firstPhoto from "../../Assests/images/sliderImgONE.jpg";
import secondPhoto from "../../Assests/images/sliderImgTWO.png";
import lastPhoto from "../../Assests/images/sliderImgTHREE.png";

const Carusel = () => {
  return (
    <div className="my_carusel">
      <div className="md:w-2/4 md:mb-0 mb-6 flex flex-col text-center items-center">
        <section
          id="slider"
          className="w-16 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0"
        >
          <input type="radio" name="slider" id="s1" defaultChecked="false" />
          <input type="radio" name="slider" id="s2" defaultChecked="true" />
          <input type="radio" name="slider" id="s3" defaultChecked="false" />
          <label htmlFor="s1" id="slide1">
            <img
              className="fea"
              src={firstPhoto}
              alt="My img"
              height="100%"
              width="100%"
            />
          </label>
          <label htmlFor="s2" id="slide2">
            <img
              className="fea"
              src={secondPhoto}
              alt="My img"
              height="100%"
              width="100%"
            />
          </label>
          <label htmlFor="s3" id="slide3">
            <img
              className="fea"
              src={lastPhoto}
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
export default Carusel;
