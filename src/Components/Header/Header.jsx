import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";

export const Header = () => {

  return (
    <>
      <AppBar color="inherit" style={{ padding: "3% 10% 0 10%", boxShadow: 'none', background: 'none'}}>
        <Toolbar>
            <Typography fontFamily='Babylonica' variant="h4">Bhargavi Pithani</Typography>
        </Toolbar>
      </AppBar>

    </>
  );
};
