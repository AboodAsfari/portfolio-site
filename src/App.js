import React from "react";
import { 
  AppBar, 
  Button, 
  Stack, 
  Toolbar, 
} from "@mui/material";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

const App = () => {
  const MainPages = {
    HOME: 0,
    PROJECTS: 1,
    SKILLS: 2
  }

  const [activePage, setActivePage] = React.useState(MainPages.HOME);

  return (
    <>
    <AppBar position="sticky" component="nav" sx={{ boxShadow: 0 }}>
        <Toolbar>
          <Stack spacing={1} direction={"row"} sx={{ justifyContent: "end", width: "100%" }}>
            <Button variant="contained" onClick={() => setActivePage(MainPages.HOME)}> Home </Button> 
            <Button variant="contained" onClick={() => setActivePage(MainPages.PROJECTS)}> Projects </Button> 
            <Button variant="contained" onClick={() => setActivePage(MainPages.SKILLS)}> Skills </Button> 
          </Stack>
        </Toolbar>
    </AppBar>
    {activePage === MainPages.HOME && <Home />}
    {activePage === MainPages.PROJECTS && <Projects />}
    {activePage === MainPages.SKILLS && <Skills />}
    </>
  );
};

export default App;
