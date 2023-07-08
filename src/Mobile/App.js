/* eslint-disable no-unused-vars */
import React from "react";
import { 
  AppBar, 
  Box, 
  CssBaseline, 
  Fade, 
  IconButton, 
  ThemeProvider, 
  Toolbar,
  Typography, 
} from "@mui/material";
import portfolioTheme from "../PortfolioTheme";
import Home from "./Home";
import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  const MainPages = {
    HOME: 0,
    PROJECTS: 1,
    SKILLS: 2
  };

  const [activePage, setActivePage] = React.useState(MainPages.HOME);
  const [transitioning, setTransitioning] = React.useState(false);

  return (
    <ThemeProvider theme={portfolioTheme}>
      <CssBaseline /> 
      <AppBar position="sticky" component="nav" sx={{ boxShadow: 0, p: 0, zIndex: 99999999 }}>
          <Toolbar sx={{ display: "flex", p: 0 }}>
            <Typography sx={{ fontSize: "25px", fontWeight: 700, color: "text.main", ml: "20px" }}> Abdulrahman Asfari </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton sx={{ justifyContent: "end" }}>
                <MenuIcon sx={{ fontSize: "30px" }} />
            </IconButton>
          </Toolbar>    
      </AppBar>

      <Fade in={activePage === MainPages.HOME}>
        <Box>
          {activePage === MainPages.HOME && <Home showContent={!transitioning} />}
        </Box>
      </Fade>
    </ThemeProvider>
  );
};

export default App;
