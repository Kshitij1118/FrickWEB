import React from "react";
import "./SuccessStories.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";

const Stories = () => {
  return (
    <div className="stories container">
      <div className="line-heading">
        <div className="dark-line"></div>
        <div className="stories-heading">
          <h2>Success Stories</h2>
          <h3>Our hurt to healed stories</h3>
        </div>
      </div>
      <div className="gallery">
        <div className="stories-card-one">
          <div className="stories-card">
            <img src={gallery_1} alt="gallery-1" className="gallery-img" />
            <h3>Donate Us To Buy Medicines For Injured Dogs</h3>
            <p>
              Dog Home Foundation is a beacon of hope for stray and injured
              dogs, providing a safe haven for over 500 dogs at our shelter.
            </p>
            <div className="make-a-stories">
              <button>Read More.</button>
            </div>
          </div>
        </div>
        <div className="stories-card-two">
          <div className="stories-card">
            <img src={gallery_1} alt="gallery-1" className="gallery-img" />
            <h3>Donate Us To Buy Medicines For Injured Dogs</h3>
            <p>
              Dog Home Foundation is a beacon of hope for stray and injured
              dogs, providing a safe haven for over 500 dogs at our shelter.
            </p>
            <div className="make-a-stories">
              <button>Read More.</button>
            </div>
          </div>
        </div>
        <div className="stories-card-three">
          <div className="stories-card">
            <img src={gallery_1} alt="gallery-1" className="gallery-img" />
            <h3>Donate Us To Buy Medicines For Injured Dogs</h3>
            <p>
              Dog Home Foundation is a beacon of hope for stray and injured
              dogs, providing a safe haven for over 500 dogs at our shelter.
            </p>
            <div className="make-a-stories">
              <button>Read More.</button>
            </div>
          </div>
        </div>
        <div className="stories-card-four">
          <div className="stories-card">
            <img src={gallery_1} alt="gallery-1" className="gallery-img" />
            <h3>Donate Us To Buy Medicines For Injured Dogs</h3>
            <p>
              Dog Home Foundation is a beacon of hope for stray and injured
              dogs, providing a safe haven for over 500 dogs at our shelter.
            </p>
            <div className="make-a-stories">
              <button>Read More.</button>
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

export default Stories;
