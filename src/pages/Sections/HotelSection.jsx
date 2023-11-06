import React from "react";
import "./hotelSection.css";
import vector from "../../Assests/images/downVector.png";

const HotelSection = () => {
  return (
    <div className="hotel_section">
      <div className="good_line">
        <div className="brIcon"></div>
        <h1>Hotel La Paris</h1>
        <div className="brIcon"></div>
      </div>
      <p>
        Welcome to our 5-star hotel in the heart of Paris in the historic center
        of Santany, in one of the best buildings in the city. This 17th century
        building has been transformed into a paradise of architecture, design
        and modern art. It offers 25 rooms and suites surrounded by magnificent
        views for an extra special stay in a unique setting.
      </p>
      <span>
        Read More <img src={vector} alt="down" width="16px" height="16px" />
      </span>
      <div className="hotelImg"></div>
    </div>
  );
};

export default HotelSection;
