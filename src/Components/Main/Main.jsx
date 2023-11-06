import React from "react";
import "./main.css";
import wlecImg from "../../Assests/images/welcomeIMG.jpg";
import HotelSection from "../../pages/Sections/HotelSection";
import Carusel from "../../pages/Carusel/Carusel";
import RestCarusel from "../../pages/Carusel/RestCarusel";
import SpaCarusel from "../../pages/Carusel/SpaCarusel";
import Galery from "../../pages/Galery/Galery";

const Main = () => {
  return (
    <div className="container">
      <div className="content">
        <section className="headSection">
          <h1>Welcome to Paris,</h1>
          <p>The city of love...</p>
        </section>
        <section>
          <HotelSection />
        </section>
        <section className="rooms_carusel">
          <div className="good_line">
            <div className="brIcon"></div>
            <h1>Rooms & Suites</h1>
            <div className="brIcon"></div>
          </div>
          <p>
            Blonde wooden panelling, ceilings and furniture, and an ochre stone
            fireplace give the Marmotte Superior Room the simple yet comfortable
            atmosphere of a contemporary mountain retreat. It can form a private
            suite when combined with the Chamois and Ours Superior Rooms.
          </p>
          <Carusel />
        </section>
        <section className="rest_carusel">
          <div className="good_line">
            <div className="brIcon"></div>
            <h1>Restaurant & Bar</h1>
            <div className="brIcon"></div>
          </div>
          <p>
            Indulge in an unforgettable gastronomic experience at LeMontBlanc, a
            splendid restaurant featuring seasonal gourmet cuisine artistically
            prepared from local produce by our passionate chef, Jan Jak.
          </p>
          <RestCarusel />
        </section>
        <section className="spaa_carusel">
          <div className="good_line">
            <div className="brIcon"></div>
            <h1>Club & Spa</h1>
            <div className="brIcon"></div>
          </div>
          <p>
            We use therapies from across the globe — hand-picked for their
            efficacy and relaxing, non-invasive nature — to build a wellness
            story with each guest, and improve their mental and physiological
            function regardless of age or malady.
          </p>
          <SpaCarusel />
        </section>
        <section className="galery_section">
          <div className="good_line">
            <div className="brIcon"></div>
            <h1>Gallery</h1>
            <div className="brIcon"></div>
          </div>
          <p>We have beautiful scenes within us and around us.</p>
          <Galery />
        </section>
        <section className="about_section">
          <div className="good_line">
            <div className="brIcon"></div>
            <h1>About Us</h1>
            <div className="brIcon"></div>
          </div>
          <div className="about-content">
            <div className="first-info">
              <div className="img-info"></div>
              <div className="text-info">
                <p className="f-text">
                  At the resort, each room is equipped with a desk. Complete
                  with a private bathroom equipped with a shower and bathrobes,
                  guest rooms at La Paris Hotel have a flat-screen TV and air
                  conditioning, and some rooms are equipped with a seating area.
                  All guest rooms include a closet
                </p>
                <p className="l-text">
                  At La Paris guests are welcome to use a Russian bath, a sauna
                  and a hot tub. Guests at the resort will be able to enjoy
                  activities in and around Paris, like cycling.
                </p>
              </div>
            </div>
            <div className="brIcon"></div>
            <div className="last-info">
              <div className="text-info">
                <p className="f-text">
                  At the resort, each room is equipped with a desk. Complete
                  with a private bathroom equipped with a shower and bathrobes,
                  guest rooms at La Paris Hotel have a flat-screen TV and air
                  conditioning, and some rooms are equipped with a seating area.
                  All guest rooms include a closet.
                </p>
                <p className="l-text">
                  Isharandi is 2.8 miles from La Paris, while Tala is 5.3 miles
                  away. The nearest airport is Paris International Airport, 93
                  miles from theaccommodation.
                </p>
              </div>
              <div className="img-info-two"></div>
            </div>
          </div>
        </section>
        <section className="welcome_section">
          <div className="good_line">
            <div className="brIcon"></div>
            <h1>We are Always Ready to Welcome You</h1>
            <div className="brIcon"></div>
          </div>
          <div className="welcome-content">
            <img src={wlecImg} alt="Welcome" width="80%" height="600px" />
            <p>
              We use therapies from across the globe — hand-picked for their
              efficacy and relaxing, non-invasive nature — to build a wellness
              story with each guest, and improve their mental and physiological
              function regardless of age or malady.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
