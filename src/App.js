import React from "react";
import { 
  AppBar, 
  Box, 
  Button, 
  CssBaseline, 
  Stack, 
  ThemeProvider, 
  Toolbar,
  Typography, 
} from "@mui/material";
import portfolioTheme from "./PortfolioTheme";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

const App = () => {
  const MainPages = {
    HOME: 0,
    PROJECTS: 1,
    SKILLS: 2
  }

  const [activePage, setActivePage] = React.useState(MainPages.PROJECTS);

  return (
    <ThemeProvider theme={portfolioTheme}>
      <CssBaseline /> 
      <AppBar position="sticky" component="nav" sx={{ boxShadow: 0 }}>
          <Toolbar sx={{ display: "flex" }}>
            <Typography sx={{ fontSize: "24px", fontWeight: 700, color: "primary.main" }}> Abdulrahman Asfari </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Stack spacing={1} direction={"row"} sx={{ justifyContent: "end" }}>
              <NavButton action={() => setActivePage(MainPages.HOME)} label="Home" />
              <NavButton action={() => setActivePage(MainPages.PROJECTS)} label="Projects" />
              <NavButton action={() => setActivePage(MainPages.SKILLS)} label="Skills" />
            </Stack>
          </Toolbar>
      </AppBar>
      {activePage === MainPages.HOME && <Home />}
      {activePage === MainPages.PROJECTS && <Projects />}
      {activePage === MainPages.SKILLS && <Skills />}
    </ThemeProvider>
  );
};

const NavButton = (props) => {
  const {
    action,
    label,
  } = props;

  return (
    <Button variant="text" disableRipple sx={{ fontSize: "18px", textTransform: "none", fontWeight: 700, 
      "&:hover": { backgroundColor: "background.default", textDecoration: "underline", textDecorationThickness: "3px" } }} 
      onClick={action}> {label} </Button> 
  );
};

export default App;
