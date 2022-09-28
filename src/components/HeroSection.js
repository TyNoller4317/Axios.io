import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../images/hero.svg";
import {
  HeroSectionContainer,
  HeroSectionContainerReverse,
  LeftSide,
  LeftSideReverse,
  RightSide,
  RightSideReverse,
} from "./styling/HeroSection.styled";
import { Button } from "./Button";

export const HeroSection = ({
  title,
  message,
  buttonDisplay,
  reverse,
  btnText,
}) => {
  return !reverse ? (
    <>
      <HeroSectionContainer>
        <LeftSide>
          <h1>{title}</h1>
          <p>{message}</p>
          {buttonDisplay && (
            <Link to="/about">
              <Button value={btnText} styleClass="btn-large" />
            </Link>
          )}
        </LeftSide>
        <RightSide>
          <img src={HeroImage} alt="Hero Image" />
        </RightSide>
      </HeroSectionContainer>
    </>
  ) : (
    <>
      <HeroSectionContainerReverse>
        <RightSideReverse>
          <img src={HeroImage} alt="Hero Image" />
        </RightSideReverse>
        <LeftSideReverse>
          <h1>{title}</h1>
          <p>{message}</p>
          {buttonDisplay && (
            <Link to="/about">
              <Button value={btnText} styleClass="btn-large" />
            </Link>
          )}
        </LeftSideReverse>
      </HeroSectionContainerReverse>
    </>
  );
};
