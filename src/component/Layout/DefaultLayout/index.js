import {
  Box,
  AppBar,
  Toolbar,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import Header from "./Header/index";
import SideBar from "./SideBar/index";
import { useSelector, useDispatch } from "react-redux";
import { setMenu } from "../../../redux/actions/index";
import { drawerWidth } from "../../../redux/store/constant";

const DefaultLayout = ({ children }) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const leftDrawerOpened = useSelector(
    (state) => state.customization.drawerOpen
  );
  const dispatch = useDispatch();

  const handleLeftDrawerToggle = () => {
    dispatch(setMenu(!leftDrawerOpened));
  };
  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${matchUpMd ? drawerWidth : 0}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: "background.default",
          transition: leftDrawerOpened
            ? theme.transitions.create("width")
            : "none",
        }}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>
      <SideBar
        drawerOpen={leftDrawerOpened}
        drawerClose={handleLeftDrawerToggle}
      />
      <Box
        sx={{
          width: "100%",
          marginRight: "8px",
          marginLeft: `${leftDrawerOpened ? "0" : "8px"}`,
        }}
      >
        <Main
          open={leftDrawerOpened}
          sx={{
            bgcolor: "background.container",
            paddingTop: "90px",
            ...theme.typography.mainContent,
          }}
        >
          {children}
        </Main>
      </Box>
    </Box>
  );
};

export default DefaultLayout;
