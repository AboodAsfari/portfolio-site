import React from "react";
import { 
  Box, 
  IconButton, 
  Pagination, 
  PaginationItem, 
  Slide, 
  Stack, 
  Typography 
} from "@mui/material";
import projects from "./Project";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const Projects = (props) => {
  const {
    showContent
  } = props;

  const [selectedProject, setSelectedProject] = React.useState(0);
  const [examplePage, setExamplePage] = React.useState(1);
  const [carouselHover, setCarouselHover] = React.useState(false);

  projects.forEach((item, index) => {
    const imageElement = new Image();
    imageElement.src = item.projectName + "/header.png";  
  })

  const getArrowColor = (isHover) => {
    if (isHover) {
      if (selectedProject === 0) return "#bdbdbd";
      return "#525252";
    } else {
      if (selectedProject === 0) return "white";
      return "black";
    }
  }

  const nextProject = () => {
    setExamplePage(1);
    setSelectedProject(old => old + 1);
  };

  const prevProject = () => {
    setExamplePage(1);
    setSelectedProject(old => old - 1);
  };
  
  return (
    <>
    <Stack sx={{ alignItems: "center", mt: "2ch", width: "100%" }}>
      <Slide in={showContent} direction="left" timeout={{ enter: 300, exit: 300 }}>
        <Stack direction="row" sx={{ justifyContent: "center", position: "relative" }}> 
          <Box sx={{ width: "9%" }} />
          <Box component="img" onMouseEnter={() => setCarouselHover(true)} onMouseLeave={() => setCarouselHover(false)} src={projects[selectedProject].projectName + "/header.png"} sx={{ width: "55%", height: "55%", borderRadius: "6px", border: "solid 1.5ch", borderColor: "text.secondary" }} /> 
          { carouselHover && <>
            {selectedProject > 0 && <ArrowCircleLeftIcon onClick={prevProject} onMouseEnter={() => setCarouselHover(true)} sx={{ position: "absolute", top: "43.7%", left: "25%", fontSize: "50px", cursor: "pointer", color: getArrowColor(false), "&:hover": { color: getArrowColor(true) } }}/>}
            {selectedProject < projects.length - 1 && <ArrowCircleRightIcon onClick={nextProject} onMouseEnter={() => setCarouselHover(true)} sx={{ position: "absolute", top: "43.7%", right: "25%", fontSize: "50px", cursor: "pointer", color: getArrowColor(false), "&:hover": { color: getArrowColor(true) } }}/>}
          </>}

          <Stack spacing={2} sx={{ mt: 2, width: "9%" }}>
            {projects[selectedProject].skills.map((item, index) => (
              <Box sx={{ minWidth: "120px", width: "100%", height: "10%", boxShadow: 0, borderRadius: "0 6px 6px 0", justifySelf: "left", 
                display: "flex", backgroundColor: "text.secondary" }} key={item}>
                <Typography sx={{ alignSelf: "center", ml: "1ch", fontWeight: 600, color: "white" }}> {item} </Typography>
              </Box>
            ))}

            <Box sx={{ flexGrow: 1 }} />

            <Slide in={showContent} direction="left" timeout={{ enter: 500, exit: 300 }}>
              <Box>
                <Box>
                  <IconButton size="large" onClick={() => { window.open(projects[selectedProject].githubLink, "_blank")}}
                    sx={{ backgroundColor: "#ced4da", ml: "2.5ch", "&:hover": { backgroundColor: "#dde4eb" } }}>
                    <GitHubIcon />
                  </IconButton>
                </Box>
                <Box>
                  <IconButton size="large" disabled={!projects[selectedProject].visitLink} onClick={() => { window.open(projects[selectedProject].visitLink, "_blank")}}
                    sx={{ backgroundColor: "#a5d8ff", mt: 2, ml: "2.5ch", "&:hover": { backgroundColor: "#c2dcf0" }, "&:disabled": { backgroundColor: "#e8e6e6" } }}>
                    <LanguageIcon />
                  </IconButton>
                </Box>
              </Box>
            </Slide>
          </Stack>
        </Stack>
      </Slide>
      
      <Slide in={showContent} direction="right" timeout={{ enter: 900, exit: 200 }}>
        <Stack direction="row" spacing={2} sx={{ mt: "2ch" }}>
          {projects.map((item, index) => (
            <IconButton color="red" key={item.projectName} onClick={() => { setExamplePage(1); setSelectedProject(index); }}
              sx={{ backgroundColor: selectedProject === index ? "text.main" : "#A19882", 
              "&:hover": { backgroundColor: selectedProject === index ? "text.main" : "#c4b99f" } }} />
          ))}
        </Stack>
      </Slide>

      {projects[selectedProject].previewCount > 0 ? 
        <Slide in={showContent} direction="up" timeout={{ enter: 500, exit: 300 }}>
          <Stack direction="row" sx={{ mx: "10%", mt: "5ch" }}> 
            <Typography sx={{ fontWeight: 600, width: "40%", ml: "calc(10% - 3ch)", color: "text.accent" }}> {projects[selectedProject].description} </Typography>
            
            <Stack spacing={2} sx={{ ml: "6ch", width: "40%", height: "40%", alignItems: "center" }}>
              <Box component="img" src={projects[selectedProject].projectName + "/example" + examplePage + ".png"} sx={{ width: "100%", height: "100%", borderRadius: "6px" }} /> 
              <Stack spacing={2}>
                <Pagination page={examplePage}
                  count={projects[selectedProject].previewCount}
                  renderItem={(item) => (
                    <PaginationItem sx={{ color: "text.main", fontWeight: 600 }} 
                      slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                      {...item} onClick={() => setExamplePage(item.page)}
                    />
                  )}
                />
              </Stack>
            </Stack>
          </Stack> 
        </Slide> :
        <Slide in={showContent} direction="up" timeout={{ enter: 500, exit: 300 }}> 
          <Typography sx={{ fontWeight: 600, width: "40%", textAlign: "center", mt: "5ch", color: "text.accent" }}> {projects[selectedProject].description} </Typography>
        </Slide>
      }
    </Stack>
    </>
  );
};

export default Projects;
