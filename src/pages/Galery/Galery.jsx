import React from "react";
import "./galery.css";
// import galeryOne from '../../Assests/images/galeryImgONE.webp';
import galeryOne from "../../Assests/images/propExp.png";
// import galeryTwo from '../../Assests/images/galeryImgTWO.jpg';
import galeryTwo from "../../Assests/images/propExpTwo.png";
// import galeryThree from '../../Assests/images/galeryImgTHREE.jpg';
import galeryThree from "../../Assests/images/propExpThree.png";
// import galeryFour from '../../Assests/images/galeryImgFOUR.jpg';
import galeryFour from "../../Assests/images/propExpFour.png";
// import galeryFive from '../../Assests/images/galeryImgFIVE.jpg';
import galeryFive from "../../Assests/images/propExpFive.png";
// import galerySix from '../../Assests/images/galeryImgSIX.png';
import galerySix from "../../Assests/images/propExpSix.png";
// import galerySeven from '../../Assests/images/galeryImgSEVEN.jpg';
import galerySeven from "../../Assests/images/propExpSeven.png";
// import galeryEight from '../../Assests/images/galeryImgEIGHT.jpg';
import galeryEight from "../../Assests/images/propExpEight.png";
// import galeryNine from '../../Assests/images/galeryImgNINE.avif';
import galeryNine from "../../Assests/images/propExpNine.png";

const Galery = () => {
  return (
    <div className="galery-content">
      <div className="galery">
        <div className="first-column">
          <div className="images ONE">
            <img src={galeryOne} alt="galeryIMG" />
          </div>
          <div className="images TWO">
            <img src={galeryTwo} alt="galeryIMG" />
          </div>
          <div className="images THREE">
            <img src={galeryThree} alt="galeryIMG" />
          </div>
        </div>
        <div className="second-column">
          <div className="images FOUR">
            <img src={galeryFour} alt="galeryIMG" />
          </div>
          <div className="images FIVE">
            <img src={galeryFive} alt="galeryIMG" />
          </div>
          <div className="images SIX">
            <img src={galerySix} alt="galeryIMG" />
          </div>
        </div>
        <div className="last-column">
          <div className="images SEVEN">
            <img src={galerySeven} alt="galeryIMG" />
          </div>
          <div className="images EIGHT">
            <img src={galeryEight} alt="galeryIMG" />
          </div>
          <div className="images NINE">
            <img src={galeryNine} alt="galeryIMG" />
          </div>
        </div>
      </div>
      <button className="more_info">View All</button>
    </div>
  );
};

export default Galery;
