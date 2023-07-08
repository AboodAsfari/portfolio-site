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
import portfolioTheme from "../PortfolioTheme";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

const App = () => {
  const MainPages = {
    HOME: 0,
    PROJECTS: 1,
    SKILLS: 2
  };

  const [activePage, setActivePage] = React.useState(MainPages.HOME);
  const [transitioning, setTransitioning] = React.useState(false);
  const [nameSize, setNameSize] = React.useState(104);
  const [nameTopOffset, setNameTopOffset] = React.useState(30);
  const [nameBottomOffset, setNameBottomOffset] = React.useState(2);
  const nameGrow = React.useRef(true);
  const queuedTransition = React.useRef(null);

  const updateName = React.useCallback(() => {
    setNameSize(oldSize => { 
      if (((oldSize === 60 && !nameGrow.current) || (oldSize === 100 && nameGrow.current)) && queuedTransition.current !== null) {
        queuedTransition.current();
        queuedTransition.current = null;
        setTransitioning(false);
      }
      
      if (!nameGrow.current && oldSize > 24) return oldSize - 4;
      else if (nameGrow.current && oldSize < 104) return oldSize + 4; 
      return oldSize; 
    });

    setNameTopOffset(oldOffset => { 
      if (!nameGrow.current && oldOffset > 10) return oldOffset - 1;
      else if (nameGrow.current && oldOffset < 30) return oldOffset + 1;
      return oldOffset; 
    });

    setNameBottomOffset(oldOffset => { 
      if (!nameGrow.current && oldOffset > 0.6) return oldOffset - 0.07;
      else if (nameGrow.current && oldOffset < 2) return oldOffset + 0.07;
      return oldOffset; 
    });

    requestAnimationFrame(updateName);
  }, []);

  React.useEffect(() => {
    requestAnimationFrame(updateName);
  }, [updateName]);
  
  const openProjects = () => {
    if (activePage === MainPages.PROJECTS) return;
    else if (activePage !== MainPages.HOME) setActivePage(MainPages.PROJECTS);
    else {
      setTransitioning(true);
      queuedTransition.current = () => setActivePage(MainPages.PROJECTS); 
      nameGrow.current = false;
    }
  };

  const openHome = () => {
    if (activePage === MainPages.HOME) return;
    else {
      setTransitioning(true);
      queuedTransition.current = () => setActivePage(MainPages.HOME); 
      nameGrow.current = true;
    }
  };

  return (
    <ThemeProvider theme={portfolioTheme}>
      <CssBaseline /> 
      <Typography sx={{ fontSize: nameSize + "px", fontWeight: 700, color: "text.main", position: "absolute", 
        top: nameTopOffset + "px", left: nameBottomOffset + "%", zIndex: 999999999 }}> 
        Abdulrahman Asfari 
      </Typography>
      <AppBar position="sticky" component="nav" sx={{ boxShadow: 0, zIndex: 99999999 }}>
          <Toolbar sx={{ display: "flex" }}>
            <Box sx={{ flexGrow: 1 }} />
            <Stack spacing={1} direction={"row"} sx={{ justifyContent: "end" }}>
              <NavButton action={openHome} label="Home" />
              <NavButton action={openProjects} label="Projects" />
              <NavButton label="Skills" />
            </Stack>
          </Toolbar>
      </AppBar>
      <Fade in={activePage === MainPages.HOME}>
        <Box>
          {activePage === MainPages.HOME && <Home showContent={!transitioning} />}
        </Box>
      </Fade>
      <Fade in={activePage === MainPages.PROJECTS}>
        <Box>
          {activePage === MainPages.PROJECTS && <Projects showContent={!transitioning} />}
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
      "&:hover": { backgroundColor: "background.default", textDecoration: "underline", textDecorationThickness: "3px", zIndex: 9 } }} 
      onClick={action}> {label} </Button> 
  );
};

export default App;
