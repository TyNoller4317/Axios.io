import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 100px;

  @media screen and (max-width: 960px) {
    padding: 0 25px;
  }
`;

export const NavLogo = styled(Link)`
  color: ${({ theme }) => theme.text};
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 800;
  text-decoration: none;
  font-size: 24px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(Link)`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-weight: bold;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const ThemeChanger = styled.div`
  width: 50px;
  height: 15px;
  background-color: ${({ theme }) => theme.text};
  margin-top: 33px;
  margin-left: 15px;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:after {
    content: "";
    width: 20px;
    height: 10px;
    background: red;
    position: absolute;
    border-radius: 2px;
    top: 15%;
    right: 5%;
    background-color: ${({ theme }) => theme.body};
  }
`;

export const ThemeChanger2 = styled.div`
  width: 50px;
  height: 15px;
  background-color: ${({ theme }) => theme.text};
  margin-top: 33px;
  margin-left: 15px;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:after {
    content: "";
    width: 20px;
    height: 10px;
    background: red;
    position: absolute;
    border-radius: 2px;
    top: 15%;
    left: 5%;
    background-color: ${({ theme }) => theme.body};
  }
`;
