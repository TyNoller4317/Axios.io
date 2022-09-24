import React from "react";
import TestImg from "../images/hero.svg";
import TestImg2 from "../images/info1.png";
import TestImg3 from "../images/info2.png";

export const InfoSection = () => {
  return (
    <div className="info-container">
      <div className="info-top">
        <img src={TestImg2} alt="" />
        <div className="info-text">
          <h1>Easily join our team of incredible developers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mauris,
            gravida senectus proin neque. Ultricies at urna non massa.
          </p>
          <button className="info-btn">Learn More</button>
        </div>
      </div>
      <div className="info-bottom">
        <div className="info-text">
          <h1>Easily join our team of incredible developers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mauris,
            gravida senectus proin neque. Ultricies at urna non massa.
          </p>
          <button className="info-btn">Learn More</button>
        </div>
        <img src={TestImg3} alt="" />
      </div>
    </div>
  );
};
