import React from "react";
import {
  NavbarContainer,
  NavLogo,
  Nav,
  MobileIcon,
  NavMenu,
  NavItem,
  ThemeChanger,
  NavLinks,
  ThemeChanger2,
} from "./styling/Navbar.styled";
import { FaBars } from "react-icons/fa";

export const Navbar = ({ toggle, themeToggle, dark }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Axios.io</NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">About Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact">Contact</NavLinks>
            </NavItem>
            <NavItem>
              {dark ? (
                <ThemeChanger onClick={themeToggle} />
              ) : (
                <ThemeChanger2 onClick={themeToggle} />
              )}
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};
