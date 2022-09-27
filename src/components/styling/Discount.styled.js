import styled from "styled-components";

export const DiscountContainer = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  margin-top: 75px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-content: center;
  padding: 75px 100px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
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

export const ButtonContainer = styled.div`
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const DiscountImg = styled.div`
  margin-left: 150px;

  @media screen and (max-width: 960px) {
    margin: 0;
  }
`;
