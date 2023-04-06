import React from "react";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = React.useState(true);

  const toggleTheme = () => {
    if (isDarkTheme) {
      setDarkTheme(!isDarkTheme);
      sessionStorage.removeItem("dark");
    } else {
      setDarkTheme(!isDarkTheme);
      sessionStorage.setItem("dark", !isDarkTheme + "");
    }
  };

  React.useEffect(() => {
    if (sessionStorage.getItem("dark")) {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => React.useContext(ThemeContext);

export { useTheme, ThemeProvider };
