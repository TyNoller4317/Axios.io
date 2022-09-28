import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import Sidebar from "../Sidebar";
import { Banner } from "../Banner";
import { InfoSection } from "../InfoSection";

import { darkTheme, GlobalStyles, lightTheme } from "../../Theme";
import { ThemeProvider } from "styled-components";
import { HeroSection } from "../HeroSection";
import Team from "../Team";

const founders = [
  { name: "Thomas Anderson", position: "CEO" },
  { name: "Thomas Smith", position: "CEO" },
  { name: "Sarah Anderson", position: "CEO" },
  { name: "Thomas Anderson", position: "CEO" },
  { name: "Thomas Anderson", position: "CEO" },
  { name: "Thomas Anderson", position: "CEO" },
];

const investors = [
  { name: "Thomas Anderson", position: "CEO" },
  { name: "Thomas Smith", position: "CEO" },
  { name: "Sarah Anderson", position: "CEO" },
  { name: "Thomas Anderson", position: "CEO" },
  { name: "Thomas Anderson", position: "CEO" },
  { name: "Thomas Anderson", position: "CEO" },
];

const About = () => {
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
          title="Our Story"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet scelerisque amet non dignissim pellentesque amet purus adipiscing metus. Non, purus, convallis egestas turpis condimentum quam pellentesque. Consectetur dignissim amet id dolor. Id nisl egestas cursus tellus eu tincidunt nunc dolor, quis. Sapien varius adipiscing nisi, vitae pharetra. Tellus augue nec sit quam eget morbi sit dictumst posuere. Nibh non, amet ac diam vel nunc urna nullam amet. Vitae pharetra amet justo, velit neque, aenean nunc. Praesent non eget blandit ut. Condimentum vestibulum feugiat convallis tincidunt sollicitudin. Ut sagittis, est porttitor cursus rhoncus ultrices vivamus. Vitae in non felis euismod sit. In scelerisque aliquet tincidunt orci volutpat faucibus integer.
          Diam neque, integer blandit eget vitae tortor. Libero nunc faucibus phasellus etiam sapien. Cursus nisi ullamcorper eget malesuada augue ipsum sollicitudin lacinia diam. Fames pharetra euismod cursus et interdum sed eu tellus. Pulvinar tellus turpis et volutpat. Mauris convallis urna, quis faucibus. Cras duis lobortis sit orci. Sem tellus enim nunc euismod aenean aliquam suscipit faucibus. Cras duis lobortis sit orci. Sem tellus enim nunc euismod aenean aliquam suscipit faucibus. "
          buttonDisplay={false}
          reverse={true}
        />
        <Team
          title="Meet our Founders"
          msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
            suscipit ut in consectetur quis dapibus facilisi semper."
          members={founders}
        />
        <InfoSection />
        <Team
          title="Meet our Investors"
          msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
            suscipit ut in consectetur quis dapibus facilisi semper."
          members={investors}
          reverseText={true}
        />
        <Banner
          title="Company Retreat"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
          fringilla nec morbi placerat arcu nunc feugiat. Enim et a, purus elit,
          et, ipsum egestas sem. Quam volutpat mattis magna tincidunt porttitor.
          Duis egestas urna arcu sed consequat.Enim et a, purus elit, et, ipsum
          egestas sem. Quam volutpat mattis magna tincidunt porttitor. Duis
          egestas urna arcu sed consequat. Quam volutpat mattis magna tincidunt porttitor. Duis
          egestas urna arcu sed consequat. Quam volutpat mattis magna tincidunt porttitor. Duis
          egestas urna arcu sed consequat."
          buttonDisplay={false}
        />
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default About;
