import { deepPurple, lightBlue, grey, green } from "@mui/material/colors";

function palette(theme, isDarkMode) {
  return {
    mode: `${isDarkMode ? "dark" : "light"}`,
    background: {
      default: `${isDarkMode ? "#111936" : "#fff"}`,
      container: `${isDarkMode ? "#1a223f" : lightBlue[50]}`,
    },
    primary: {
        main: theme.menuSelected

    },
    secondary: {
      light: theme.menuSelectedBack,
      main: "#9c27b0",
      dark: `${isDarkMode ? deepPurple[300] : deepPurple[500]}`,
    },
    logo: {
      default: `${isDarkMode ? lightBlue[50] : deepPurple[500]}`,
    },
    textSecondary: theme.darkTextSecondary,
  };
}

export default palette;
