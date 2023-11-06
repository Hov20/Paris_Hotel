import React from "react";
import "./footer.css";
import vector from "../../Assests/images/footerVector.png";
import miniVector from "../../Assests/images/footerMiniVector.png";
import rightVector from "../../Assests/images/rightVector.png";
import facebook from '../../Assests/images/facebookIcon.png';
import instagram from '../../Assests/images/instagramIcon.png';
import linkedIn from '../../Assests/images/linkedinIcon.png';

const Footer = () => {
  return (
    <footer className="footer_content">
      <div className="footer_info">
        <div className="footer_subs">
          <div className="subs-text">
            <div>
              <h4>La Paris</h4>
              <p>Subscribe Us</p>
            </div>
            <div>
              <img src={miniVector} alt="vector" />
            </div>
          </div>
          <div className="subs-input">
            <img src={rightVector} alt="Vector" />
            <input type="email" placeholder="Email address" />
          </div>
        </div>
        <div className="footer_contact">
            <h4>Contact</h4>
            <p>+33 (0)1 44 55 60 00</p>
            <p className="mail-footer">info@laparis.com</p>
            <div>
                <img src={facebook} alt="Icons" />
                <img src={instagram} alt="Icons" />
                <img src={linkedIn} alt="Icons" />
            </div>
        </div>
        <div className="footer_address">
          <h4>Address</h4>
          <p>Champ de Mars, 5 Av. Anatole France, 75007 Paris, France</p>
        </div>
        <div className="footer_explore">
          <h4>Explore</h4>
          <p>Galery</p>
          <p>Safety</p>
          <p>Webcam</p>
        </div>
        <div className="footer_news">
          <h4>News</h4>
          <p>Press</p>
          <p>Events</p>
          <p>Occasions</p>
        </div>
      </div>
      <img className="vectorImg" src={vector} alt="Vector" />
    </footer>
  );
};

export default Footer;
