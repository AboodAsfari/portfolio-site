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
  Stack, 
  Typography 
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const Projects = () => {
  let hello = ["React", "AWS", "JavaScript", "CSS", "HTML"];

  return (
    <>
    <Stack sx={{ alignItems: "center", mt: "2ch", width: "100%" }}>
      <Stack direction="row" sx={{ justifyContent: "center" }}> 
        <Box sx={{ width: "9%" }} />
        <Card sx={{ width: "55%", boxShadow: 0, backgroundColor: "red" }}>
          <CardMedia sx={{ m: "2ch", width: "calc(100% - 4ch)" }}
            component="img"
            alt="project preview"
            image="2359preview.png"
          />
        </Card>
        <Stack spacing={2} sx={{ mt: 2, width: "9%" }}>
          {hello.map((item, index) => (
            <Box sx={{ width: "100%", height: "10%", boxShadow: 0, borderRadius: "0 6px 6px 0", justifySelf: "left", 
              display: "flex", backgroundColor: "red" }}>
              <Typography sx={{ alignSelf: "center", ml: "1ch" }}> {item} </Typography>
            </Box>
          ))}

          <Box>
            <IconButton size="large" sx={{ backgroundColor: "red", ml: "2ch" }}>
              <GitHubIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton size="large" sx={{ backgroundColor: "red", ml: "2ch" }}>
              <LanguageIcon />
            </IconButton>
          </Box>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={2} sx={{ mt: "2ch" }}>
        <IconButton color="red" sx={{ backgroundColor: "purple"}}> </IconButton>
        <IconButton color="red" sx={{ backgroundColor: "red"}}> </IconButton>
        <IconButton color="red" sx={{ backgroundColor: "red"}}> </IconButton>
      </Stack>
      <Stack direction="row" sx={{ mx: "25ch", mt: "5ch" }}>
        <Stack>
          <Typography>
            This project is dear to me (probably why it's the the first one I'm showing). It was my introduction to web development 
            and to my surprise, I loved it! After being introduced to React and AWS, I realized that web development was much less restrictive 
            than I had initially imagined. Working on 23:59 also reignited my love for working with others. But what is 23:59? It's a 
            web development grade tracking website with full account management, and a unique course template system where students 
            can use templates created by other students, as well as create their own. Pretty cool.
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={1} sx={{ backgroundColor: "red", width: "calc(800px + 3ch)", p: "1ch", alignSelf: "start", justifyContent: "center", borderRadius: "6px" }}>
            <Box component="img" src="2359example1.png" sx={{ width: "200px", borderRadius: "6px", border: "solid 0px", borderColor: "red" }} />
            <Box component="img" src="2359example1.png" sx={{ width: "200px", borderRadius: "6px", border: "solid 0px", borderColor: "red" }} />
            <Box component="img" src="2359example1.png" sx={{ width: "200px", borderRadius: "6px", border: "solid 0px", borderColor: "blue" }} />
            <Box component="img" src="2359example1.png" sx={{ width: "200px", borderRadius: "6px", border: "solid 0px", borderColor: "red" }} />
          </Stack>
        </Stack>

        <Box component="img" src="2359example1.png" sx={{ ml: "2ch", width: "630px", borderRadius: "6px", border: "solid 1ch", borderColor: "red" }} /> 
      </Stack>
    </Stack>
    </>
  );
};

export default Projects;
