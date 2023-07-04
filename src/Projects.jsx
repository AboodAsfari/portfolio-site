import React from "react";
import { 
  Box, 
  Button, 
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Icon, 
  IconButton, 
  Pagination, 
  PaginationItem, 
  Stack, 
  ThemeProvider, 
  Typography 
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const Projects = () => {
  let hello = ["React", "AWS", "JavaScript", "CSS", "HTML"];

  return (
    <>
    <Stack sx={{ alignItems: "center", mt: "2ch", width: "100%" }}>
      <Stack direction="row" sx={{ justifyContent: "center" }}> 
        <Box sx={{ width: "9%" }} />
        <Box component="img" src="2359preview.png" sx={{ width: "55%", height: "55%", borderRadius: "6px", border: "solid 1.5ch", borderColor: "accent.main" }} /> 
        <Stack spacing={2} sx={{ mt: 2, width: "9%" }}>
          {hello.map((item, index) => (
            <Box sx={{ width: "100%", height: "10%", boxShadow: 0, borderRadius: "0 6px 6px 0", justifySelf: "left", 
              display: "flex", backgroundColor: "accent.main" }}>
              <Typography sx={{ alignSelf: "center", ml: "1ch", fontWeight: 600, color: "white" }}> {item} </Typography>
            </Box>
          ))}

          <Box>
            <IconButton size="large" sx={{ backgroundColor: "#ced4da", ml: "2.5ch", "&:hover": { backgroundColor: "#dde4eb" } }}>
              <GitHubIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton size="large" sx={{ backgroundColor: "#a5d8ff", ml: "2.5ch", "&:hover": { backgroundColor: "#c2dcf0" } }}>
              <LanguageIcon />
            </IconButton>
          </Box>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={2} sx={{ mt: "2ch" }}>
        <IconButton color="red" sx={{ backgroundColor: "accent.secondary", "&:hover": { backgroundColor: "#c4b99f" } }}> </IconButton>
        <IconButton color="red" sx={{ backgroundColor: "#A19882", "&:hover": { backgroundColor: "#c4b99f" } }}> </IconButton>
        <IconButton color="red" sx={{ backgroundColor: "#A19882", "&:hover": { backgroundColor: "#c4b99f" } }}> </IconButton>
      </Stack>
      <Stack direction="row" sx={{ mx: "10%", mt: "5ch" }}> 
        <Typography sx={{ fontWeight: 600, width: "40%", ml: "calc(10% - 3ch)" }}>
          This project is dear to me (probably why it's the the first one I'm showing). It was my introduction to web development 
          and to my surprise, I loved it! After being introduced to React and AWS, I realized that web development was much less restrictive 
          than I had initially imagined. Working on 23:59 also reignited my love for working with others. But what is 23:59? It's a 
          web development grade tracking website with full account management, and a unique course template system where students 
          can use templates created by other students, as well as create their own. Pretty cool.
        </Typography>
        
        <Stack spacing={2} sx={{ ml: "6ch", width: "40%", height: "40%", alignItems: "center" }}>
          <Box component="img" src="2359example1.png" sx={{ width: "100%", height: "100%", borderRadius: "6px" }} /> 
          <Stack spacing={2}>
            <Pagination
              count={3}
              renderItem={(item) => (
                <PaginationItem sx={{ color: "accent.secondary", fontWeight: 600 }} 
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                />
              )}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    </>
  );
};

export default Projects;
