export default function themeTypography(theme) {
  return {
    fontFamily: theme?.customization?.fontFamily,
    h6: {
      fontWeight: 500,
      color: theme.heading,
      fontSize: "0.75rem",
    },
    h5: {
      fontSize: "0.875rem",
      color: theme.heading,
      fontWeight: 500,
    },
    h4: {
      fontSize: "1rem",
      color: theme.heading,
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.25rem",
      color: theme.heading,
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.5rem",
      color: theme.heading,
      fontWeight: 700,
    },
    h1: {
      fontSize: "2.125rem",
      color: theme.heading,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: theme.textDark,
    },
    subtitle2: {
      fontSize: "0.75rem",
      fontWeight: 400,
      color: theme.darkTextSecondary,
    },
    caption: {
      fontSize: "0.75rem",
      color: theme.darkTextSecondary,
      fontWeight: 400,
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.334em",
    },
    body2: {
      letterSpacing: "0em",
      fontWeight: 400,
      lineHeight: "1.5em",
      color: theme.darkTextPrimary,
    },
    button: {
      textTransform: "capitalize",
    },
    customInput: {
      marginTop: 1,
      marginBottom: 1,
      "& > label": {
        top: 23,
        left: 0,
        color: theme.grey500,
        '&[data-shrink="false"]': {
          top: 5,
        },
      },
      "& > div > input": {
        padding: "30.5px 14px 11.5px !important",
      },
      "& legend": {
        display: "none",
      },
      "& fieldset": {
        top: 0,
      },
    },
    mainContent: {
      minHeight: "calc(100vh - 88px)",
      flexGrow: 1,
      padding: "20px",
      marginTop: "88px",
      borderRadius: `${theme?.customization?.borderRadius}px`,
    },
    mainCard: {
      minHeight: "100%",
      flexGrow: 1,
      padding: "20px",
      margin: "16px",
      borderRadius: `${theme?.customization?.borderRadius}px`,
    },
    commonButton: {
      borderRadius: `${theme?.customization?.borderRadius}px`,
    },
    customButton: {
      "&:hover": {
        cursor: "pointer",
        bgcolor: theme.menuSelectedBack,
      },
    },
    menuCaption: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: theme.heading,
      padding: "6px",
      textTransform: "capitalize",
      marginTop: "10px",
    },
    subMenuCaption: {
      fontSize: "0.6875rem",
      fontWeight: 500,
      color: theme.darkTextSecondary,
      textTransform: "capitalize",
    },
    commonAvatar: {
      cursor: "pointer",
      borderRadius: "8px",
      transition: "all .2s ease-in-out",
      bgcolor: "secondary.light",
      color: "secondary.dark",
      "&:hover": {
        bgcolor: "secondary.dark",
        color: "secondary.light",
      },
    },
    commonImg: {
      transition: "all .2s ease-in-out",
      width: "220px",
      height: "130px",
      objectFit: "cover",
      borderStyle: "solid",
      borderWidth: "3px",
      borderColor: "secondary.dark",
      borderRadius: "12px",
      overflow: "hidden",
      "&:hover": {
        boxShadow: "0 0 3px 1px rgba(0, 140, 186, 0.50)",
        cursor: "pointer"

      },
    },
    smallAvatar: {
      width: "22px",
      height: "22px",
      fontSize: "1rem",
    },
    mediumAvatar: {
      width: "34px",
      height: "34px",
      fontSize: "1.2rem",
    },
    largeAvatar: {
      width: "44px",
      height: "44px",
      fontSize: "1.5rem",
    },
  };
}
