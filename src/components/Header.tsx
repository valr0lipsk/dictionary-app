import { Home } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
          Dictionary App
        </Typography>
        <IconButton color="inherit" onClick={() => navigate("/")}>
          <Home />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
