import React from "react";
import { 
  AppBar, 
  Box, 
  Button, 
  CssBaseline, 
  Fade, 
  Stack, 
  ThemeProvider, 
  Toolbar,
  Typography, 
} from "@mui/material";
import portfolioTheme from "./PortfolioTheme";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import { wait } from "@testing-library/user-event/dist/utils";

const App = () => {
  const MainPages = {
    HOME: 0,
    PROJECTS: 1,
    SKILLS: 2
  }

  const [activePage, setActivePage] = React.useState(MainPages.HOME);
  const [nameSize, setNameSize] = React.useState(104);
  const [nameTopOffset, setNameTopOffset] = React.useState(30);
  const nameGrow = React.useRef(true);
  const queuedTransition = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      setNameSize(oldSize => { 
        if (oldSize === 60 && queuedTransition.current !== null) {
          queuedTransition.current();
          queuedTransition.current = null;
        }
        
        if (!nameGrow.current && oldSize > 24) return oldSize - 2;
        else if (nameGrow.current && oldSize < 104) return oldSize + 2; 
        else return oldSize; 
      });

      setNameTopOffset(oldOffset => { 
        if (!nameGrow.current && oldOffset > 10) return oldOffset - 0.5;
        else if (nameGrow.current && oldOffset < 30) return oldOffset + 0.5;
        else return oldOffset; 
      });
    }, 10);
  }, []);

  const openProjects = () => {
    if (activePage !== MainPages.HOME) setActivePage(MainPages.PROJECTS);
    else {
      queuedTransition.current = () => setActivePage(MainPages.PROJECTS); 
      nameGrow.current = false;
    }
  };

  const openHome = () => {
    if (activePage === MainPages.HOME) return;
    else {
      setActivePage(MainPages.HOME); 
      nameGrow.current = true;
    }
  };

  return (
    <ThemeProvider theme={portfolioTheme}>
      <CssBaseline /> 
      <Typography sx={{ fontSize: nameSize + "px", fontWeight: 700, color: "text.main", position: "absolute", top: nameTopOffset + "px", left: "0.5%", zIndex: 99999 }}> Abdulrahman Asfari </Typography>
      <AppBar position="sticky" component="nav" sx={{ boxShadow: 0 }}>
          <Toolbar sx={{ display: "flex" }}>
            <Box sx={{ flexGrow: 1 }} />
            <Stack spacing={1} direction={"row"} sx={{ justifyContent: "end" }}>
              <NavButton action={openHome} label="Home" />
              <NavButton action={openProjects} label="Projects" />
              <NavButton action={() => setActivePage(MainPages.SKILLS)} label="Skills" />
            </Stack>
          </Toolbar>
      </AppBar>
      {activePage === MainPages.HOME && <Home />}
      <Fade in={activePage === MainPages.PROJECTS}>
        <Box>
          { <Projects /> }
        </Box>
      </Fade>
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
    <Button variant="text" disableRipple sx={{ fontSize: "18px", color: "text.main", textTransform: "none", fontWeight: 700, 
      "&:hover": { backgroundColor: "background.default", textDecoration: "underline", textDecorationThickness: "3px" } }} 
      onClick={action}> {label} </Button> 
  );
};

export default App;
