import React from "react";
import HeroImage from "../images/hero.svg";

export const HeroSection = () => {
  return (
    <>
      <div className="hero-container">
        <div className="left-side">
          <h1>Making tasks easier for everyday individuals</h1>
          <p>
            We have developed a task application that helps individuals plan and
            execute important tasks. Our task editor is number one when it comes
            useability and friendliness.
          </p>
          <button className="hero-btn">Learn More</button>
        </div>
        <div className="right-side">
          <img src={HeroImage} alt="Hero Image" />
        </div>
      </div>
    </>
  );
};
