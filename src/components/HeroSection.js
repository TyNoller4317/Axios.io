import React from "react";
import HeroImage from "../images/hero.svg";
import {
  HeroSectionContainer,
  LeftSide,
  RightSide,
} from "./styling/HeroSection.styled";
import { Button } from "./Button";

export const HeroSection = () => {
  return (
    <>
      <HeroSectionContainer>
        <LeftSide>
          <h1>Making tasks easier for everyday individuals</h1>
          <p>
            We have developed a task application that helps individuals plan and
            execute important tasks. Our task editor is number one when it comes
            useability and friendliness.
          </p>
          <Button value="Learn More" styleClass="btn-large" />
        </LeftSide>
        <RightSide>
          <img src={HeroImage} alt="Hero Image" />
        </RightSide>
      </HeroSectionContainer>
    </>
  );
};
