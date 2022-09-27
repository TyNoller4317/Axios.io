import React from "react";
import { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import { HeroSection } from "../HeroSection";
import { MakesUsSpecial } from "../MakesUsSpecial";
import { InfoSection } from "../InfoSection";
import { Footer } from "../Footer";
import { Services } from "../Services";
import { Discount } from "../Discount";
import Sidebar from "../Sidebar";

import { darkTheme, GlobalStyles, lightTheme } from "../../Theme";
import { ThemeProvider } from "styled-components";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("dark-mode"));
  const isDarkTheme = theme === "dark";
  const [darkSwitch, setDarkSwitch] = useState(true);

  useEffect(() => {
    localStorage.setItem("dark-mode", theme);
  }, [theme]);

  console.log(theme);

  const toggleDark = () => setDarkSwitch(!darkSwitch);

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
    toggleDark();
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Navbar toggle={toggle} themeToggle={toggleTheme} dark={darkSwitch} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroSection />
        <MakesUsSpecial />
        <InfoSection />
        <Services />
        <Discount />
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default Homepage;
