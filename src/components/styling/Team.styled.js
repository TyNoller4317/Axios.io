import styled from "styled-components";

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 100px;
  margin: 70px auto;

  @media screen and (max-width: 960px) {
    padding: 0 25px;
  }
`;

export const TeamText = styled.div`
  margin-bottom: 25px;

  & > h1 {
    font-size: 42px;
    font-weight: 800;
  }

  & > p {
    color: ${({ theme }) => theme.greyText};
    max-width: 440px;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;

export const TeamTextReverse = styled.div`
  margin-bottom: 25px;
  text-align: right;

  & > h1 {
    font-size: 42px;
    font-weight: 800;
  }

  & > p {
    color: ${({ theme }) => theme.greyText};
    max-width: 440px;
    text-align: right;
    float: right;
  }

  @media screen and (max-width: 960px) {
    text-align: center;

    & > p {
      text-align: center;
    }
  }
`;

export const TeamCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const TeamCard = styled.div`
  width: 396px;
  height: 300px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 0.3s ease-in-out;
  color: ${({ theme }) => theme.secText};

  & > img {
    width: 170px;
    border-radius: 50%;
  }

  &:hover {
    transform: scale(1.05);
  }
`;
