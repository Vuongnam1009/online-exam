import { Avatar, Box, ButtonBase, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import DarkMode from ".//DarkMode/index";
import SelectLanguage from "./SelectLanguage";
const Header = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "50px",
        width: "100%",
      }}
    >
      {/* Logo & toggle button */}
      <Box
        sx={{
          width: 228,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: { sx: "none", md: "flex" },
            color: "logo.default",
            fontWeight: "bold",
            fontSize: "24px",
            marginRight: "16px",
          }}
        >
          MULTICHOICE
        </Box>
        <Typography variant="h1"></Typography>
        <ButtonBase>
          <Avatar
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
            }}
            onClick={handleLeftDrawerToggle}
          >
            <MenuIcon />
          </Avatar>
        </ButtonBase>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <DarkMode />
        <SelectLanguage />
      </Box>
    </Box>
  );
};

export default Header;
