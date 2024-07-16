import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { FaRegHeart } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <p>Help, Donate & Fundraise</p>
        <h1>Your Contribution Is Important</h1>
        <button className="btn">
          <FaRegHeart />
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
