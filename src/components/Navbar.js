import React, { useState } from "react";
import {
  NavbarContainer,
  NavLogo,
  Nav,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./styling/Navbar.styled";
import { FaBars } from "react-icons/fa";

export const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>Axios.io</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>About Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};
