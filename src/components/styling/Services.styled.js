import styled from "styled-components";

export const ServicesContainer = styled.div``;

export const ServicesText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  & > h1 {
    font-size: 42px;
    font-weight: 800;
  }

  & > p {
    color: #767676;
    max-width: 597px;
    text-align: center;
  }
`;

export const ServicesChange = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    font-weight: bold;
  }
`;

export const Changer = styled.div`
  width: 40px;
  height: 24px;
  background: #ccd5ae;
  border-radius: 50px;
  margin: 50px 100px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:after {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    background: #666b55;
    border-radius: 50%;
    left: 42%;
    top: 5%;
  }

  @media screen and (max-width: 960px) {
    margin: 50px 25px;
  }
`;

export const Changer2 = styled.div`
  width: 40px;
  height: 24px;
  background: #ccd5ae;
  border-radius: 50px;
  margin: 50px 100px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:after {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    background: #666b55;
    border-radius: 50%;
    left: 0%;
    top: 5%;
  }

  @media screen and (max-width: 960px) {
    margin: 50px 25px;
  }
`;

export const ServicesCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 100px;
  grid-gap: 15px;
  margin-bottom: 50px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 0;
    align-items: center;
    justify-items: center;
  }
`;

export const ServicesCard = styled.div`
  width: 397px;
  height: 397px;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;
  background-color: #fff;
  color: ${({ theme }) => theme.secText};

  &:hover {
    transform: scale(1.05);
  }

  & > img {
    width: 45%;
  }

  & > h2 {
    align-self: flex-start;
    margin-left: 50px;
    margin-top: 35px;
  }

  & > p {
    color: #727272;
    max-width: 287px;
    align-self: flex-start;
    margin-left: 50px;
  }

  @media screen and (max-width: 960px) {
    width: 350px;
    height: 350px;
  }
`;
