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

export const Discount = () => {
  return (
    <DiscountContainer>
      <DiscountText>
        <h1>Student Discount</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
          fringilla nec morbi placerat arcu nunc feugiat. Enim et a, purus elit,
          et, ipsum egestas sem. Quam volutpat mattis magna tincidunt porttitor.
          Duis egestas urna arcu sed consequat.Enim et a, purus elit, et, ipsum
          egestas sem. Quam volutpat mattis magna tincidunt porttitor. Duis
          egestas urna arcu sed consequat.
        </p>
        <ButtonContainer>
          <Link to="about">
            <Button value="Learn More" styleClass="btn-small" />
          </Link>
          <Link to="discount-code">
            <Button value="Discount" styleClass="btn-clear" />
          </Link>
        </ButtonContainer>
      </DiscountText>
      <DiscountImg>
        <img src={Img} alt="" />
      </DiscountImg>
    </DiscountContainer>
  );
};
