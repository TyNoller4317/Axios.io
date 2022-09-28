import React from "react";
import { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import { HeroSection } from "../HeroSection";
import { MakesUsSpecial } from "../MakesUsSpecial";
import { InfoSection } from "../InfoSection";
import { Footer } from "../Footer";
import { Services } from "../Services";
import { Banner } from "../Banner";
import Sidebar from "../Sidebar";

import { darkTheme, GlobalStyles, lightTheme } from "../../Theme";
import { ThemeProvider } from "styled-components";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("dark-mode"));
  const isDarkTheme = theme === "dark";
  const [darkSwitch, setDarkSwitch] = useState(false);

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
        <Navbar
          toggle={toggle}
          themeToggle={toggleTheme}
          dark={darkSwitch}
          title="Axios.io"
        />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroSection
          title="Making tasks easier for everyday individuals"
          message="We have developed a task application that helps individuals plan and
          execute important tasks. Our task editor is number one when it comes
          useability and friendliness."
          buttonDisplay={true}
          reverse={false}
          btnText="Learn More"
        />
        <MakesUsSpecial />
        <InfoSection />
        <Services />
        <Banner
          title="Student Discount"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
          fringilla nec morbi placerat arcu nunc feugiat. Enim et a, purus elit,
          et, ipsum egestas sem. Quam volutpat mattis magna tincidunt porttitor.
          Duis egestas urna arcu sed consequat.Enim et a, purus elit, et, ipsum
          egestas sem. Quam volutpat mattis magna tincidunt porttitor. Duis
          egestas urna arcu sed consequat."
          buttonDisplay={true}
        />
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default Homepage;
