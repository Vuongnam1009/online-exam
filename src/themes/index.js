import { createTheme } from "@mui/material/styles";

import componentStyleOverrides from "./compStyleOverride";
import themeTypography from "./typography";
import themePalette from "./palette";
import { deepPurple, lightBlue, grey, green } from "@mui/material/colors";

export const theme = (customization) => {
  const isDarkMode = customization.isDarkMode;
  const themeOption = {
    heading: isDarkMode ? grey[50] : grey[900],
    paper: isDarkMode ? green[500] : green[500],
    background: isDarkMode ? grey[50] : grey[900],
    darkTextPrimary: isDarkMode ? grey[600] : grey[900],
    darkTextSecondary: isDarkMode ? deepPurple[300] : grey[400],
    textDark: isDarkMode ? grey[50] : grey[900],
    menuSelected: isDarkMode ? deepPurple[300] : deepPurple[500],
    menuSelectedBack: isDarkMode ? "#1d2549" : deepPurple[50],
    menuTabBack: isDarkMode ? '#29314f' :'#fff',
    divider: isDarkMode ? grey[50] : grey[200],
    backgroundDefault: isDarkMode ? green[500] : green[500],
    customization,
  };

  const themeOptions = {
    direction: "ltr",
    mixins: {
      toolbar: {
        minHeight: "48px",
        padding: "16px",
        "@media (min-width: 600px)": {
          minHeight: "48px",
        },
      },
    },
    typography: themeTypography(themeOption),
    palette: themePalette(themeOption, isDarkMode),
  };

  const themes = createTheme(themeOptions);
  themes.components = componentStyleOverrides(themeOption);

  return themes;
};

export default theme;
