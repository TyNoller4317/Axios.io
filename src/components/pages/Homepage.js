import React from "react";
import { useState } from "react";
import { Navbar } from "../Navbar";
import { HeroSection } from "../HeroSection";
import { MakesUsSpecial } from "../MakesUsSpecial";
import { InfoSection } from "../InfoSection";
import { Footer } from "../Footer";
import { Services } from "../Services";
import { Discount } from "../Discount";
import Sidebar from "../Sidebar";

import Theme from "../../Theme";
import styled from "styled-components";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Theme>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <MakesUsSpecial />
      <InfoSection />
      <Services />
      <Discount />
      <Footer />
    </Theme>
  );
};

export default Homepage;
