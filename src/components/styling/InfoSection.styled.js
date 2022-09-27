import styled from "styled-components";

export const InfoContainer = styled.div`
  height: 990px;
  margin-top: 100px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.secText};
  padding: 0 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-content: center;
  grid-gap: 75px;
`;

export const InfoText = styled.div`
  & > h1 {
    max-width: 397px;
  }

  & > p {
    max-width: 350px;
    color: #727272;
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
