import React from "react";
import { 
  AppBar, 
  Button, 
  CssBaseline, 
  Stack, 
  ThemeProvider, 
  Toolbar, 
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
          <Toolbar>
            <Stack spacing={1} direction={"row"} sx={{ justifyContent: "end", width: "100%" }}>
              <Button variant="text" disableRipple sx={{ fontSize: "18px", textTransform: "none", fontWeight: 700, "&:hover": { backgroundColor: "background.default", textDecoration: "underline", textDecorationThickness: "3px" } }} onClick={() => setActivePage(MainPages.HOME)}> Home </Button> 
              <Button variant="text" disableRipple sx={{ fontSize: "18px", textTransform: "none", fontWeight: 700, "&:hover": { backgroundColor: "background.default", textDecoration: "underline", textDecorationThickness: "3px" } }} onClick={() => setActivePage(MainPages.PROJECTS)}> Projects </Button> 
              <Button variant="text" disableRipple sx={{ fontSize: "18px", textTransform: "none", fontWeight: 700, "&:hover": { backgroundColor: "background.default", textDecoration: "underline", textDecorationThickness: "3px" } }} onClick={() => setActivePage(MainPages.SKILLS)}> Skills </Button> 
            </Stack>
          </Toolbar>
      </AppBar>
      {activePage === MainPages.HOME && <Home />}
      {activePage === MainPages.PROJECTS && <Projects />}
      {activePage === MainPages.SKILLS && <Skills />}
    </ThemeProvider>
  );
};

export default App;
