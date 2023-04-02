import React from "react";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = React.useState(false);

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
    console.log("theme", sessionStorage.getItem("dark"));
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
