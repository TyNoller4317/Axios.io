import React from "react";
import { NavContainer, LogoHolder, Nav } from "./styling/Navbar.styled";

export const Navbar = () => {
  return (
    <NavContainer>
      <LogoHolder>
        <h1>Axios.io</h1>
      </LogoHolder>
      <nav className="nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </NavContainer>
  );
};
