import styled from "styled-components";

export const InfoContainer = styled.div`
  height: 100%;
  margin-top: 100px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.secText};
  padding: 100px 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-content: center;
  grid-gap: 75px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoText = styled.div`
  & > h1 {
    max-width: 450px;
  }

  & > p {
    max-width: 375px;
    color: #727272;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;

export const InfoImg = styled.div`
  display: flex;
  justify-content: center;
  align: items: center;

  & > img {
    width: 80%;
  }
    `;
