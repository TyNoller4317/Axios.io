import styled from "styled-components";

export const HeroSectionContainer = styled.div`
  display: flex;
  padding: 0 100px;
  align-items: center;
  margin-top: 50px;
`;

export const LeftSide = styled.div`
  & > h1 {
    font-size: 72px;
    max-width: 718px;
    line-height: 87px;
  }

  & > p {
    color: #767676;
    margin-top: 15px;
    max-width: 445px;
  }
`;

export const RightSide = styled.div`
  & > img {
    width: 68%;
    float: right;
  }
`;