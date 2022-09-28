import styled from "styled-components";

export const HeroSectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 100px;
  align-items: center;
  margin: 50px 0;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    justify-items: center;
    align-content: center;
    padding: 0 25px;
  }
`;

export const HeroSectionContainerReverse = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 100px;
  margin-top: 50px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    justify-items: center;
    align-content: center;
    padding: 0 25px;
  }
`;

export const LeftSide = styled.div`
  & > h1 {
    font-size: 72px;
    max-width: 718px;
    line-height: 87px;
  }

  & > p {
    color: ${({ theme }) => theme.greyText};
    margin-top: 15px;
    max-width: 718px;
  }

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

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

export const LeftSideReverse = styled.div`
  display: flex;
  flex-direction: column;

  & > h1 {
    font-size: 72px;
    max-width: 718px;
    line-height: 87px;
    text-align: right;
  }

  & > p {
    color: ${({ theme }) => theme.greyText};
    margin-top: 15px;
    max-width: 718px;
    text-align: right;
  }

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

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
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > img {
    width: 70%;
  }

  @media screen and (max-width: 960px) {
    margin-top: 50px;

    & > img {
      margin: 0 auto;
      width: 100%;
    }
  }
`;

export const RightSideReverse = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > img {
    width: 70%;
  }

  @media screen and (max-width: 960px) {
    margin: 50px auto;

    & > img {
      margin: 0 auto;
      width: 100%;
    }
  }
`;
