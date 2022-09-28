import React from "react";
import {
  TeamCardContainer,
  TeamCard,
  TeamContainer,
  TeamText,
  TeamTextReverse,
} from "./styling/Team.styled";

import TestImg from "../images/hero.svg";

const Team = ({ title, msg, members, reverseText }) => {
  return !reverseText ? (
    <>
      <TeamContainer>
        <TeamText>
          <h1>{title}</h1>
          <p>{msg}</p>
        </TeamText>
        <TeamCardContainer>
          {members.map((founder) => (
            <TeamCard>
              <img src={TestImg} alt="" />
              <h2>{founder.name}</h2>
              <p>{founder.position}</p>
            </TeamCard>
          ))}
        </TeamCardContainer>
      </TeamContainer>
    </>
  ) : (
    <>
      <TeamContainer>
        <TeamTextReverse>
          <h1>{title}</h1>
          <p>{msg}</p>
        </TeamTextReverse>
        <TeamCardContainer>
          {members.map((founder) => (
            <TeamCard>
              <img src={TestImg} alt="" />
              <h2>{founder.name}</h2>
              <p>{founder.position}</p>
            </TeamCard>
          ))}
        </TeamCardContainer>
      </TeamContainer>
    </>
  );
};

export default Team;
