import React from "react";
import { 
  Box,
  IconButton,
  Slide,
  Stack, 
  Typography 
} from "@mui/material";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Home = (props) => {
  const {
    showContent
  } = props;

  return (
    <Stack direction="row" sx={{ width: "100%", height: "100%" }}>
      <Stack sx={{ mt: "10ch", ml: "0.5%", width: "54.5%" }}>
        <Slide in={showContent} direction="right" timeout={{ enter: 300, exit: 200 }}>
          <Typography sx={{ fontSize: "30px", fontWeight: 700, color: "text.secondary" }}> Or Abood to keep it simple :) </Typography>
        </Slide>

        <Slide in={showContent} direction="right" timeout={{ enter: 500, exit: 200 }}>
          <Box>
            <Typography sx={{ fontSize: "20px", fontWeight: 700, color: "text.accent", mt: "4ch" }}> 
              Hi there, I'm Abood! Welcome to my portfolio. Here I show off some of my projects and skills, while maintaining a 
              cozy atmosphere across the whole page. I'm a software engineering student in my penultimate year of study. In my degree
              I am specializing in embedded systems as well as networked applications, although you wouldn't guess it by the projects 
              I work on outside of university. 
            </Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: 700, color: "text.accent", mt: "2ch" }}> 
              This year I unexpectedly fell in love with building web applications and full stack development as a whole, after almost 5 
              years of despising it with a passion. How this radical change came to be is still beyond me, but I accredit at least some of 
              it to me discovering React and how intuitive it makes the whole process for me. 
            </Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: 700, color: "text.accent", mt: "2ch" }}> 
              Anyways, at this point I'm just rambling. Feel free to take a look around the website, or even contact me if you wish,
              using the handy little device I've left on your screen. Either way, enjoy your stay here!
            </Typography>
          </Box>
        </Slide>
      </Stack>
      <Box sx={{ width: "calc(45%)", height: "100%", display: "flex", justifyContent: "center" }}>
        <Stack sx={{ backgroundColor: "text.secondary", width: "360px", height: "592px", mt: "21ch", borderRadius: "6px 6px 60px 6px" }}>
          <Box sx={{ backgroundColor: "#606C5D", width: "90%", height: "40%", mx: "5%", mt: "10%", borderRadius: "6px 6px 30px 6px" }}> 
            <Box sx={{ backgroundColor: "#B5C99A", width: "70%", height: "80%", mx: "15%", mt: "7%" }}> </Box>
          </Box>
          <Stack direction="row" sx={{ mt: "10ch", ml: "10%" }}>
            <Stack sx={{ alignItems: "center" }}>
              <Box sx={{ backgroundColor: "text.accent", width: "25px", height: "33px", borderRadius: "3px 3px 0 0", cursor: "pointer", "&:active": { background: "linear-gradient(0deg, rgba(103,93,80,1) 10%, rgba(77,69,60,1) 80%);" } }} />
              <Stack direction="row">
                <Box sx={{ backgroundColor: "text.accent", width: "33px", height: "25px", borderRadius: "3px 0 0 3px", cursor: "pointer", "&:active": { background: "linear-gradient(-90deg, rgba(103,93,80,1) 10%, rgba(77,69,60,1) 80%);" } }} />
                <Box sx={{ backgroundColor: "text.accent", width: "25px", height: "25px" }} />
                <Box sx={{ backgroundColor: "text.accent", width: "33px", height: "25px", borderRadius: "0 3px 3px 0", cursor: "pointer", "&:active": { background: "linear-gradient(90deg, rgba(103,93,80,1) 10%, rgba(77,69,60,1) 80%);" } }} />
              </Stack>
              <Box sx={{ backgroundColor: "text.accent", width: "25px", height: "33px", borderRadius: "0 0 3px 3px", cursor: "pointer", "&:active": { background: "linear-gradient(180deg, rgba(103,93,80,1) 10%, rgba(77,69,60,1) 80%);" } }} />
            </Stack>
            <Box sx={{ borderRadius: "50%", backgroundColor: "#F1C376", width: "50px", height: "50px", alignSelf: "center", ml: "80px", mt: "45px", cursor: "pointer", "&:active": { background: "radial-gradient(circle, rgba(241,195,118,1) 50%, rgba(163,124,60,1) 100%);" } }}></Box>
            <Box sx={{ borderRadius: "50%", backgroundColor: "#F1C376", width: "50px", height: "50px", alignSelf: "center", ml: "20px", mb: "20px", cursor: "pointer", "&:active": { background: "radial-gradient(circle, rgba(241,195,118,1) 50%, rgba(163,124,60,1) 100%);" } }}></Box>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Home;
