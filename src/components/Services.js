import React from "react";
import {
  ServicesContainer,
  ServicesText,
  ServicesChange,
  ServicesCardContainer,
  ServicesCard,
  Changer,
} from "./styling/Services.styled";
import Img from "../images/hero.svg";

export const Services = () => {
  return (
    <ServicesContainer>
      <ServicesText>
        <h1>Services</h1>
        <p>
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized.
        </p>
      </ServicesText>
      <ServicesChange>
        <p>Enterprise</p>
        <Changer />
        <p>Personal</p>
      </ServicesChange>
      <ServicesCardContainer>
        <ServicesCard>
          <img src={Img} alt="" />
          <h2>Proxima Messaging</h2>
          <p>
            Quick messaging application that can be used for personal or
            business use.
          </p>
        </ServicesCard>
        <ServicesCard>
          <img src={Img} alt="" />
          <h2>Document Management</h2>
          <p>
            Quick messaging application that can be used for personal or
            business use.
          </p>
        </ServicesCard>
        <ServicesCard>
          <img src={Img} alt="" />
          <h2>Cloud Hosting</h2>
          <p>
            Quick messaging application that can be used for personal or
            business use.
          </p>
        </ServicesCard>
        <ServicesCard>
          <img src={Img} alt="" />
          <h2>Course Material</h2>
          <p>
            Quick messaging application that can be used for personal or
            business use.
          </p>
        </ServicesCard>
        <ServicesCard>
          <img src={Img} alt="" />
          <h2>Email Automation</h2>
          <p>
            Quick messaging application that can be used for personal or
            business use.
          </p>
        </ServicesCard>
        <ServicesCard>
          <img src={Img} alt="" />
          <h2>API Database</h2>
          <p>
            Quick messaging application that can be used for personal or
            business use.
          </p>
        </ServicesCard>
      </ServicesCardContainer>
    </ServicesContainer>
  );
};
