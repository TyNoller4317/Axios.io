import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import {
  DiscountContainer,
  DiscountText,
  DiscountImg,
  ButtonContainer,
} from "./styling/Discount.styled";
import Img from "../images/info1.png";

export const Banner = ({ title, text, buttonDisplay }) => {
  return (
    <DiscountContainer>
      <DiscountText>
        <h1>{title}</h1>
        <p>{text}</p>
        {buttonDisplay && (
          <ButtonContainer>
            <Link to="about">
              <Button value="Learn More" styleClass="btn-small" />
            </Link>
            <Link to="discount-code">
              <Button value="Discount" styleClass="btn-clear" />
            </Link>
          </ButtonContainer>
        )}
      </DiscountText>
      <DiscountImg>
        <img src={Img} alt="" />
      </DiscountImg>
    </DiscountContainer>
  );
};
