import React from "react";
import TestImage from "../images/hero.svg";
import Engineer from "../images/engineering.svg";
import Drone from "../images/drone.svg";
import {
  SpecialContainer,
  SpecialCard,
  SpecialText,
} from "./styling/MakesUsSpecial.styled";

export const MakesUsSpecial = () => {
  return (
    <SpecialContainer>
      <SpecialText>
        <h2>What makes us so special?</h2>
        <p>
          Years of development have led to this acheivement. A Perfect task
          application that can be used by anyone around the world.{" "}
        </p>
      </SpecialText>
      <SpecialCard>
        <img src={TestImage} alt="" />
        <h1>Flexibility</h1>
      </SpecialCard>
      <SpecialCard>
        <img src={Drone} alt="" />
        <h1>Affordable</h1>
      </SpecialCard>
      <SpecialCard>
        <img src={Engineer} alt="" />
        <h1>Easy To Use</h1>
      </SpecialCard>
    </SpecialContainer>
  );
};
