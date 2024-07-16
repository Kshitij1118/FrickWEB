import React from "react";
import "./Donation.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";

const Donation = () => {
  return (
    <div className="donation container">
      <div className="line-heading">
        <div className="dark-line"></div>
        <div className="donation-heading">
          <h2>Make A Donation</h2>
          <h3>Featured Campaign</h3>
        </div>
      </div>
      <div className="gallery">
        <div className="donation-card-one">
          <div className="donation-card">
            <img src={gallery_1} alt="gallery-1" className="gallery-img" />
            <h3>Donate Us To Buy Medicines For Injured Dogs</h3>
            <p>
              Dog Home Foundation is a beacon of hope for stray and injured
              dogs, providing a safe haven for over 500 dogs at our shelter.
            </p>
            <div className="make-a-donation">
              <button>Make a Donation</button>
            </div>
          </div>
        </div>
        <div className="donation-card-two">
          <div className="donation-card">
            <img src={gallery_1} alt="gallery-1" className="gallery-img" />
            <h3>Donate Us To Buy Medicines For Injured Dogs</h3>
            <p>
              Dog Home Foundation is a beacon of hope for stray and injured
              dogs, providing a safe haven for over 500 dogs at our shelter.
            </p>
            <div className="make-a-donation">
              <button>Make a Donation</button>
            </div>
          </div>
        </div>
        <div className="donation-card-three">
          <div className="donation-card">
            <img src={gallery_1} alt="gallery-1" className="gallery-img" />
            <h3>Donate Us To Buy Medicines For Injured Dogs</h3>
            <p>
              Dog Home Foundation is a beacon of hope for stray and injured
              dogs, providing a safe haven for over 500 dogs at our shelter.
            </p>
            <div className="make-a-donation">
              <button>Make a Donation</button>
            </div>
          </div>
        </div>
        <div className="donation-card-four">
          <div className="donation-card">
            <img src={gallery_1} alt="gallery-1" className="gallery-img" />
            <h3>Donate Us To Buy Medicines For Injured Dogs</h3>
            <p>
              Dog Home Foundation is a beacon of hope for stray and injured
              dogs, providing a safe haven for over 500 dogs at our shelter.
            </p>
            <div className="make-a-donation">
              <button>Make a Donation</button>
            </div>
          </div>
        </div>

        {/* <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" /> */}
      </div>
      <div className="button-container">
        <button className="btn dark-btn">
          See more here <img src={white_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Donation;
