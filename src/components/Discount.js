import React from "react";
import { Button } from "./Button";
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
          <Button value="Learn More" styleClass="btn-small" />
          <Button value="Discount" styleClass="btn-clear" />
        </ButtonContainer>
      </DiscountText>
      <DiscountImg>
        <img src={Img} alt="" />
      </DiscountImg>
    </DiscountContainer>
  );
};
