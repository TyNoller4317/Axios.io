import "./App.css";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { MakesUsSpecial } from "./components/MakesUsSpecial";
import { InfoSection } from "./components/InfoSection";
import { Footer } from "./components/Footer";
import { Services } from "./components/Services";
import { Discount } from "./components/Discount";
import Sidebar from "./components/Sidebar";

import Theme from "./Theme";
import styled from "styled-components";

function App() {
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
}

export default App;
