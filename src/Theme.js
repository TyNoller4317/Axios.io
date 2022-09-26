import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#fff",
    leafGreen: "#CCD5AE",
    yellow: "#FAEDCD",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
