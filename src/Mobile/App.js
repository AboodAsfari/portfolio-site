import React from "react";
import { 
  AppBar, 
  Box, 
  Button, 
  CssBaseline, 
  Fade, 
  IconButton, 
  Stack, 
  ThemeProvider, 
  Toolbar,
  Typography, 
} from "@mui/material";
import portfolioTheme from "../PortfolioTheme";
import Home from "./Home";
import Projects from "../Desktop/Projects";
import Skills from "../Desktop/Skills";
import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  const MainPages = {
    HOME: 0,
    PROJECTS: 1,
    SKILLS: 2
  };

  const [activePage, setActivePage] = React.useState(MainPages.HOME);
  const [transitioning, setTransitioning] = React.useState(false);
  const [nameSize, setNameSize] = React.useState(30);
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
      else return oldSize; 
    });

    setNameTopOffset(oldOffset => { 
      if (!nameGrow.current && oldOffset > 10) return oldOffset - 1;
      else if (nameGrow.current && oldOffset < 30) return oldOffset + 1;
      else return oldOffset; 
    });

    setNameBottomOffset(oldOffset => { 
      if (!nameGrow.current && oldOffset > 0.6) return oldOffset - 0.07;
      else if (nameGrow.current && oldOffset < 2) return oldOffset + 0.07;
      else return oldOffset; 
    });

    requestAnimationFrame(updateName);
  }, []);

  React.useEffect(() => {
    // requestAnimationFrame(updateName);
  }, [updateName]);
  
  const openProjects = () => {
    if (activePage !== MainPages.HOME) setActivePage(MainPages.PROJECTS);
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
      <AppBar position="sticky" component="nav" sx={{ boxShadow: 0, p: 0 }}>
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
      {/* 
      <Fade in={activePage === MainPages.PROJECTS}>
        <Box>
          {activePage === MainPages.PROJECTS && <Projects showContent={!transitioning} />}
        </Box>
      </Fade>
      {activePage === MainPages.SKILLS && <Skills />} */}
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
