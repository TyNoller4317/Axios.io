import React from "react";
import { Link } from "react-router-dom";
import TestImage from "../images/hero.svg";

export const MakesUsSpecial = () => {
  return (
    <div className="special-container">
      <div className="special-text">
        <h2>What makes us so special?</h2>
        <p>
          Years of development have led to this acheivement. A Perfect task
          application that can be used by anyone around the world.{" "}
        </p>
      </div>
      <div className="special-card">
        <img src={TestImage} alt="" />
        <h1>Flexibility</h1>
      </div>
      <div className="special-card">
        <img src={TestImage} alt="" />
        <h1>Affordable</h1>
      </div>
      <div className="special-card">
        <img src={TestImage} alt="" />
        <h1>Easy To Use</h1>
      </div>
    </div>
  );
};
