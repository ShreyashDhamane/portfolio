import React, { useEffect, useRef } from "react";
import "./HeroSection.scss";
import useTextAnim from "../../hooks/useTextAnim";

const HeroSection = ({ goToExperience }) => {
  return (
    <div className="Hero_section container">
      <div className="hero_wrapper">
        <div className="greet">Hi 👋, I am</div>
        <div className="name">
          <h1>Shreyash</h1>
          <h1>Dhamane</h1>
        </div>

        <div className="desc">
          A software developer who is curious about computer networks and
          databases
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
