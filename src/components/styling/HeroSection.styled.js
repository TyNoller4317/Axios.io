import styled from "styled-components";

export const HeroSectionContainer = styled.div`
  display: flex;
  padding: 0 100px;
  align-items: center;
  margin-top: 50px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
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

  @media screen and (max-width: 960px) {
    & > h1 {
      font-size: 42px;
      line-height: 50px;
      text-align: center;
    }

    & > p {
      text-align: center;
    }
  }
`;

export const RightSide = styled.div`
  & > img {
    width: 68%;
  }

  @media screen and (max-width: 960px) {
    margin-top: 50px;

    & > img {
      margin: 0 auto;
      width: 100%;
    }
  }
`;
