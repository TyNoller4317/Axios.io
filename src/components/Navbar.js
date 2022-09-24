import React from "react";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-holder">
        <h1>Axios.io</h1>
      </div>
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
    </div>
  );
};
