import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import Sidebar from "../Sidebar";
import { HeroSection } from "../HeroSection";

import { darkTheme, GlobalStyles, lightTheme } from "../../Theme";
import { ThemeProvider } from "styled-components";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("dark-mode"));
  const isDarkTheme = theme === "dark";
  const [darkSwitch, setDarkSwitch] = useState(true);

  const toggleDark = () => setDarkSwitch(!darkSwitch);

  useEffect(() => {
    localStorage.setItem("dark-mode", theme);
  }, [theme]);

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
        <HeroSection
          title="Contact Us"
          message="(742) 252-1923 1234 main st, brookly ny 10012. We are located in downtown new york inside of town square along with google, amazon, and stripe. "
          buttonDisplay={false}
          reverse={false}
        />
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default Contact;
