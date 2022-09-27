import styled from "styled-components";

export const SpecialContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 100px;
  margin-top: 150px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    text-align: center;
    justify-items: center;
    align-content: center;
  }
`;

export const SpecialText = styled.div`
  & > h2 {
    font-size: 34px;
    max-width: 100%;
  }

  & > p {
    color: ${({ theme }) => theme.greyText};
    max-width: 80%;
    margin-top: 10px;
  }

  @media screen and (max-width: 960px) {
    margin-bottom: 25px;

    & > p {
      max-width: 100%;
    }
  }
`;

export const SpecialCard = styled.div`
  width: 292px;
  height: 363px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: #000;

  & > h1 {
    align-self: flex-start;
    margin-left: 35px;
    margin-top: 50px;
  }

  & > img {
    width: 50%;
  }

  &:nth-child(3) {
    margin-top: 50px;
  }

  @media screen and (max-width: 960px) {
    &:nth-child(4) {
      margin-top: 50px;
    }
  }
`;
