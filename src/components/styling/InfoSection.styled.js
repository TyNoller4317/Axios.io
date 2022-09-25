import styled from "styled-components";

export const InfoContainer = styled.div`
  height: 990px;
  margin-top: 100px;
  background-color: #faedcd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 100px;

  & > h1 {
    font-size: 42px;
    max-width: 397px;
  }

  & > p {
    font-size: 18px;
    max-width: 350px;
    color: #767676;
  }

  & > img {
    width: 500px;
    height: 350px;
  }
`;

export const InfoTop = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;

  & > img {
    align-self: flex-start;
  }
`;

export const InfoBottom = styled.div`
  display: grid;
  margin-top: 50px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
`;

export const InfoText = styled.div``;
