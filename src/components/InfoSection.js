import React from "react";
import TestImg2 from "../images/info1.png";
import TestImg3 from "../images/info2.png";
import { Button } from "./Button";
import { Link } from "react-router-dom";

import { InfoContainer, InfoText, InfoImg } from "./styling/InfoSection.styled";

export const InfoSection = () => {
  return (
    <InfoContainer>
      <InfoImg>
        <img src={TestImg2} alt="" />
      </InfoImg>
      <InfoText>
        <h1>Easily join our team of incredible developers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mauris,
          gravida senectus proin neque. Ultricies at urna non massa.
        </p>
        <Link to="about">
          <Button value="Learn More" styleClass="btn-small" />
        </Link>
      </InfoText>
      <InfoText>
        <h1>Help teach others the path to success</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mauris,
          gravida senectus proin neque. Ultricies at urna non massa.
        </p>
        <Link to="about">
          <Button value="Learn More" styleClass="btn-small" />
        </Link>
      </InfoText>
      <InfoImg>
        <img src={TestImg3} alt="" />
      </InfoImg>
    </InfoContainer>
  );
};
