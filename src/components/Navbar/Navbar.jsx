import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import icono from "../../assets/Images/icono2.png";
import { Avatar, Button, Grid, Icon, Tooltip } from "@mui/material";
import NavListDrawer from "./NavList";
import { Links } from "../../routes/Links";
import { useSelector } from "react-redux";
import Image from "mui-image";
import ImageAvatar from '../../assets/Images/Icono App.png'
import AvatarCustom from "../ui/AvatarCustom";

const drawerWidth = 240;



const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 2),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const Navbar = () => {
  const {user} = useSelector(
    (state) => state.auth
  );

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar sx={{backgroundColor:'white'}} position="fixed" open={open}>
        <Toolbar style={{justifyContent:'space-between'}} >
         
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography color="GrayText" variant="h4" >Bienvenido:{" "} {user.fullname} </Typography>
          
          <Grid item direction={"row"} >
            
          <AvatarCustom ProfileImage={user.profile_image}/>
          
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "#0E2E73",
          },
        }}
        variant="permanent"
        open={open}
      >
        <DrawerHeader sx={{ backgroundColor: '"#0E2E73"' }}>
          <Tooltip title="Cerrar">
          <IconButton onClick={handleDrawerClose} >
            <ChevronLeftIcon color="secondary" />
            <Image width="50px" src={icono} />
          </IconButton>
          </Tooltip>
          <Grid direction={'column'} >
          <Typography variant="body1" color="white">Administrador</Typography>
          <Typography variant="body2" fontFamily={"BikoBoldLight"} color="GrayText">Produccion</Typography>
          </Grid>
          {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <>
              <ChevronRightIcon />
              </>
            ) : (
              <ChevronLeftIcon />
              )}
          </IconButton> */}
        </DrawerHeader>
        <Divider />
        <NavListDrawer navArrayLinks={Links} />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
};
