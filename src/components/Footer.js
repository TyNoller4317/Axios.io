import React from "react";
import {
  FooterContainer,
  TopFooter,
  FooterLogoSection,
  FooterLinks,
  BottomFooter,
  FooterSubscribe,
} from "./styling/Footer.styled";

export const Footer = () => {
  return (
    <FooterContainer>
      <TopFooter>
        <FooterLogoSection>
          <h1>Axios.io</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            voluptatem omnis iusto aut.
          </p>
          <FooterSubscribe>Your Email...</FooterSubscribe>
        </FooterLogoSection>
        <FooterLinks>
          <h3>Platform</h3>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </FooterLinks>
        <FooterLinks>
          <h3>Help</h3>
          <a href="#">How does it work?</a>
          <a href="#">Where to ask questions?</a>
          <a href="#">How to pay?</a>
          <a href="#">What is needed for this?</a>
        </FooterLinks>
        <FooterLinks>
          <h3>Contact</h3>
          <p>(283) 123-3245</p>
          <p>116 archer rd Brooklyn, New York 10025</p>
        </FooterLinks>
      </TopFooter>
      <BottomFooter>
        <p>Copy &copy; 2015-2022. All Rights Reserved</p>
      </BottomFooter>
    </FooterContainer>
  );
};
