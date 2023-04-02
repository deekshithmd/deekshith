import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./palette";
import { useTheme } from "../contexts/ThemeContext";
import { GlobalStyles } from "./globalStyles";

const Theme = ({ children }) => {
  const { isDarkTheme } = useTheme();
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
