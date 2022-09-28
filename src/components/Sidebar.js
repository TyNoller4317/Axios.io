import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
} from "./styling/Sidebar.styled";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="/">Home</SideBarLink>
          <SideBarLink to="/services">Services</SideBarLink>
          <SideBarLink to="/about">About Us</SideBarLink>
          <SideBarLink to="/contact">Contact</SideBarLink>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default Sidebar;
