import React from "react";
import { 
  Box, 
  IconButton, 
  Pagination, 
  PaginationItem, 
  Stack, 
  Typography 
} from "@mui/material";
import projects from "./Project";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const Projects = () => {
  const [selectedProject, setSelectedProject] = React.useState(0);
  const [examplePage, setExamplePage] = React.useState(1);

  return (
    <>
    <Stack sx={{ alignItems: "center", mt: "2ch", width: "100%" }}>
      <Stack direction="row" sx={{ justifyContent: "center" }}> 
        <Box sx={{ width: "9%" }} />
        <Box component="img" src={projects[selectedProject].projectName + "/header.png"} sx={{ width: "55%", height: "55%", borderRadius: "6px", border: "solid 1.5ch", borderColor: "text.secondary" }} /> 
        <Stack spacing={2} sx={{ mt: 2, width: "9%" }}>
          {projects[selectedProject].skills.map((item, index) => (
            <Box sx={{ minWidth: "120px", width: "100%", height: "10%", boxShadow: 0, borderRadius: "0 6px 6px 0", justifySelf: "left", 
              display: "flex", backgroundColor: "text.secondary" }} key={item}>
              <Typography sx={{ alignSelf: "center", ml: "1ch", fontWeight: 600, color: "white" }}> {item} </Typography>
            </Box>
          ))}

          <Box sx={{ flexGrow: 1 }} />

          <Box>
            <IconButton size="large" onClick={() => { window.open(projects[selectedProject].githubLink, "_blank")}}
              sx={{ backgroundColor: "#ced4da", ml: "2.5ch", "&:hover": { backgroundColor: "#dde4eb" } }}>
              <GitHubIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton size="large" disabled={!projects[selectedProject].visitLink} onClick={() => { window.open(projects[selectedProject].visitLink, "_blank")}}
              sx={{ backgroundColor: "#a5d8ff", ml: "2.5ch", "&:hover": { backgroundColor: "#c2dcf0" }, "&:disabled": { backgroundColor: "#e8e6e6" } }}>
              <LanguageIcon />
            </IconButton>
          </Box>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={2} sx={{ mt: "2ch" }}>
        {projects.map((item, index) => (
          <IconButton color="red" key={item.projectName} onClick={() => setSelectedProject(index)}
            sx={{ backgroundColor: selectedProject === index ? "text.main" : "#A19882", 
            "&:hover": { backgroundColor: selectedProject === index ? "text.main" : "#c4b99f" } }} />
        ))}
      </Stack>
      {projects[selectedProject].previewCount > 0 ? 
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
        </Stack> :
        <Typography sx={{ fontWeight: 600, width: "40%", textAlign: "center", mt: "5ch", color: "text.accent" }}> {projects[selectedProject].description} </Typography>
      }
    </Stack>
    </>
  );
};

export default Projects;
