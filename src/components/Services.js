import React, { useState } from "react";
import {
  ServicesContainer,
  ServicesText,
  ServicesChange,
  ServicesCardContainer,
  ServicesCard,
  Changer,
  Changer2,
} from "./styling/Services.styled";
import Img from "../images/hero.svg";
import Cloud from "../images/cloud.svg";
import Educator from "../images/educator.svg";
import Engineer from "../images/engineering.svg";
import Drone from "../images/drone.svg";

export const Services = () => {
  const [switcher, setSwitcher] = useState(false);

  const changeView = () => {
    setSwitcher(!switcher);
  };

  return switcher ? (
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
        <Changer onClick={() => changeView()} />
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
          <img src={Cloud} alt="" />
          <h2>Document Management</h2>
          <p>One click document management with proximaDocs.</p>
        </ServicesCard>
        <ServicesCard>
          <img src={Educator} alt="" />
          <h2>Course Material</h2>
          <p>
            Multiple topics such as Computer Science, Physics, Data Science and
            more..
          </p>
        </ServicesCard>
        <ServicesCard>
          <img src={Drone} alt="" />
          <h2>Email Automation</h2>
          <p>
            Developed with python this makes sorting through emails almost
            effortless.
          </p>
        </ServicesCard>
        <ServicesCard>
          <img src={Engineer} alt="" />
          <h2>API Database</h2>
          <p>Over 100 different APIs to use on your own websites.</p>
        </ServicesCard>
      </ServicesCardContainer>
    </ServicesContainer>
  ) : (
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
        <Changer2 onClick={() => changeView()} />
        <p>Personal</p>
      </ServicesChange>
      <ServicesCardContainer>
        <ServicesCard>
          <img src={Engineer} alt="" />
          <h2>Employee Database</h2>
          <p>Quick to add and remove employees with little to no effort.</p>
        </ServicesCard>
        <ServicesCard>
          <img src={Educator} alt="" />
          <h2>Payroll System</h2>
          <p>
            Easy to manage payroll system that can be scaled to 50,000
            employees.
          </p>
        </ServicesCard>
        <ServicesCard>
          <img src={Cloud} alt="" />
          <h2>Cloud Hosting</h2>
          <p>Use our cloud service to store personal info in cloud.</p>
        </ServicesCard>
        <ServicesCard>
          <img src={Drone} alt="" />
          <h2>Email Automation</h2>
          <p>
            QDeveloped with python this makes sorting through emails almost
            effortless.
          </p>
        </ServicesCard>
        <ServicesCard>
          <img src={Img} alt="" />
          <h2>Customer Management</h2>
          <p>Database that you can add customer to for easy accessibility.</p>
        </ServicesCard>
      </ServicesCardContainer>
    </ServicesContainer>
  );
};
