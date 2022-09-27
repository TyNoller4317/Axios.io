import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

export const lightTheme = {
  body: "#f1f1f1",
  text: "#121620",
  secondary: "#faedcd",
  secText: "#121620",
  greyText: "#727272",
};

export const darkTheme = {
  body: "#121620",
  text: "#f1f1f1",
  secondary: "#f1f1f1",
  secText: "#121620",
  greyText: "#e3e3e3",
};

// const Theme = ({ children }) => (
//   <ThemeProvider theme={theme}>{children}</ThemeProvider>
// );

// export default Theme;
