import { createTheme } from '@mui/material/styles';

import colors from '../assets/scss/themes-vars.module.scss';

import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';


export const theme = (customization) => {
    const color = colors;
    const isDarkMode = customization.isDarkMode;
    console.log(customization);

    const themeOption = {
        colors: color,
        heading: isDarkMode ? color.grey50 : color.grey900,
        paper: isDarkMode ? color.darkPaper : color.paper,
        background: isDarkMode ? color.darkPrimaryLight : color.primaryLight,
        darkTextPrimary: isDarkMode ? color.grey50 : color.grey700,
        darkTextSecondary: isDarkMode ? color.grey50 : color.grey500,
        textDark: isDarkMode ? color.grey50 : color.grey900,
        menuSelected: isDarkMode ? color.darkSecondaryDark : color.secondaryDark,
        menuSelectedBack: isDarkMode ? color.darkSecondaryLight : color.secondaryLight,
        divider: isDarkMode ? color.grey50 : color.grey200,
        backgroundDefault: isDarkMode ? color.darkPaper : color.paper,
        customization
    };

    const themeOptions = {
        direction: 'ltr',
        palette: themePalette(themeOption),
        mixins: {
            toolbar: {
                minHeight: '48px',
                padding: '16px',
                '@media (min-width: 600px)': {
                    minHeight: '48px'
                }
            }
        },
        typography: themeTypography(themeOption)
    };

    const themes = createTheme(themeOptions);
    themes.components = componentStyleOverrides(themeOption);

    return themes;
};

export default theme;
