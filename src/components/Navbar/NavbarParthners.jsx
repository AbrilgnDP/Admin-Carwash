import React from "react";
import Button from "@mui/material/Button";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import MenuProfile from "./MenuProfile";

export const NavbarParthners  = () =>{
  const { user } = useSelector(
    (state) => state.auth
  );
  return (
    <>
      <AppBar  position="sticky"
        sx={{maxHeight: "5.5rem", minHeight: "5rem", display: 'flex'}}>
        <Toolbar sx={{display:'flex', justifyContent:{xs:'left',md:'space-around'}}} >
        <Button   endIcon={<Typography textAlign='left' fontSize={{xs:4}} color='white' >CICHMEX</Typography>            } >
              <img
                alt="Icono CICHMEX"
                width={40}
                src="/src/assets/Images/icono2.2.png"
                
              />
            </Button>
            <Typography fontFamily='BikoBold' display={{xs:'none', sm:"block"}}  m={2}  variant="h4" color="white">{user.fullname}</Typography> 
            <Box sx={{ display: { xs: 'block', sm: 'none', md:'inline-block' } }}> 
            <MenuProfile  />
            </Box>
            </Toolbar>
      </AppBar>

    </>
  );
}


