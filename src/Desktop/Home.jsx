import React from "react";
import { 
  Box,
  Slide,
  Stack, 
  Typography 
} from "@mui/material";
import "../ContactDevice.css";
import ContactDevice from "../ContactDevice";

const Home = (props) => {
  const {
    showContent
  } = props;

  return (
    <Stack direction="row" sx={{ width: "100%", height: "100%" }}>
      <Stack sx={{ mt: "10ch", ml: "2%", width: "54.5%" }}>
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
              using the handy little device I've left on your screen or by emailing az.asfari@gmail.com. Either way, enjoy your stay here!
            </Typography>
          </Box>
        </Slide>
      </Stack>

      <ContactDevice showContent={showContent} />
    </Stack>
  );
};

export default Home;
