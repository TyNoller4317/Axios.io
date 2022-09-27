import React, { useState } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import Sidebar from "../Sidebar";

import { darkTheme, GlobalStyles, lightTheme } from "../../Theme";
import { ThemeProvider } from "styled-components";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const [darkSwitch, setDarkSwitch] = useState(true);

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

        {/* <Footer /> */}
      </>
    </ThemeProvider>
  );
};

export default Contact;
