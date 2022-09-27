import styled from "styled-components";

export const DiscountContainer = styled.div`
  height: 500px;
  background-color: ${({ theme }) => theme.secondary};
  margin-top: 75px;
  display: flex;
  align-items: center;
  padding: 0 100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    height: 100%;
    padding: 25px 25px;
    text-align: center;
  }
`;

export const DiscountText = styled.div`
  & > h1 {
    font-size: 42px;
    color: ${({ theme }) => theme.secText};
  }

  & > p {
    color: #727272;
    max-width: 576px;
  }

  @media screen and (max-width: 960px) {
    margin-bottom: 50px;
  }
`;

export const ButtonContainer = styled.div``;

export const DiscountImg = styled.div`
  margin-left: 150px;

  @media screen and (max-width: 960px) {
    margin: 0;
  }
`;
