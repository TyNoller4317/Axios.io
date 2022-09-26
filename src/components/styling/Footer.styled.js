import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 442px;
  background-color: #2c2c2c;
  padding: 75px 100px;
  color: white;

  @media screen and (max-width: 960px) {
    height: 100%;
  }
`;

export const TopFooter = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const FooterLogoSection = styled.div`
  & > h1 {
    font-size: 24px;
    font-weight: 900;
  }

  & > p {
    max-width: 370px;
    margin-top: 10px;
  }
`;

export const FooterSubscribe = styled.div`
  width: 365px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  margin-top: 15px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 15px;

  &:after {
    content: "Subscribe";
    display: flex;
    justify-content: center;
    font-weight: 800;
    align-items: center;
    width: 130px;
    height: 50px;
    border-radius: 10px;
    background-color: #ccd5ae;
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  &:hover::after {
    opacity: 0.75;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;

  & > a {
    color: white;
    text-decoration: none;
    font-weight: 300;
    margin-top: 15px;
  }

  & > p {
    margin-top: 15px;
    max-width: 175px;
  }
`;

export const BottomFooter = styled.div`
  margin-top: 100px;
`;
