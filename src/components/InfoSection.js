import React from "react";
import TestImg from "../images/hero.svg";
import TestImg2 from "../images/info1.png";
import TestImg3 from "../images/info2.png";
import { Button } from "./Button";
import { Link } from "react-router-dom";

import {
  InfoContainer,
  InfoTop,
  InfoBottom,
} from "./styling/InfoSection.styled";

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
          <Link to="about">
            <Button value="Learn More" styleClass="btn-small" />
          </Link>
        </div>
      </div>
      <div className="info-bottom">
        <div className="info-text">
          <h1>Help teach others the path to success</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mauris,
            gravida senectus proin neque. Ultricies at urna non massa.
          </p>
          <Link to="about">
            <Button value="Learn More" styleClass="btn-small" />
          </Link>
        </div>
        <img src={TestImg3} alt="" />
      </div>
    </div>
  );
};
