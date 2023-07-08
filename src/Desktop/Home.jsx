import React from "react";
import { 
  Box,
  Slide,
  Stack, 
  Typography 
} from "@mui/material";
import "../ContactDevice.css";

const Home = (props) => {
  const {
    showContent
  } = props;

  const ContactMethods = {
    GITHUB: { link: "https://github.com/AboodAsfari" },
    LINKEDIN: { link: "https://www.linkedin.com/in/abdulrahman-asfari/" },
    EMAIL: { link: "mailto:az.asfari@gmail.com" }
  };
  ContactMethods.GITHUB.next = ContactMethods.LINKEDIN;
  ContactMethods.GITHUB.prev = ContactMethods.EMAIL;
  ContactMethods.LINKEDIN.next = ContactMethods.EMAIL;
  ContactMethods.LINKEDIN.prev = ContactMethods.GITHUB;
  ContactMethods.EMAIL.next = ContactMethods.GITHUB;
  ContactMethods.EMAIL.prev = ContactMethods.LINKEDIN;

  const deviceCRTRef = React.useRef(null);
  const [activeContact, setActiveContact] = React.useState(ContactMethods.GITHUB);
  const [invertDeviceSlide, setInvertDeviceSlide] = React.useState(false);

  const nextContact = () => {
    setInvertDeviceSlide(true);
    setActiveContact(old => old.next);
  };

  const prevContact = () => {
    setInvertDeviceSlide(false);
    setActiveContact(old => old.prev);
  };

  const getSlideDir = (condition) => {
    if (condition ? !invertDeviceSlide : invertDeviceSlide) return "right";
    return "left";
  }

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
      <Box sx={{ width: "calc(45%)", height: "100%", display: "flex", justifyContent: "center" }}>
        <Slide in={showContent} direction="left" timeout={{ enter: 500, exit: 200 }}>
          <Stack sx={{ backgroundColor: "text.secondary", width: "360px", height: "592px", mt: "21ch", borderRadius: "6px 6px 60px 6px" }}>
            <Box sx={{ backgroundColor: "#606C5D", width: "90%", height: "40%", mx: "5%", mt: "10%", borderRadius: "6px 6px 30px 6px" }}> 
              <Box sx={{ position: "relative", backgroundColor: "#B5C99A", width: "70%", height: "80%", mx: "15%", mt: "7%" }}>
                <Box className="scanline" />
                <Box id={"crt"} sx={{ width: "100%", height: "100%" }} ref={deviceCRTRef}> 
                    <Box sx={{ display: "flex", justifyContent: "center", position: "relative" }}>
                      <Slide appear={false} in={activeContact.link === ContactMethods.GITHUB.link} direction={getSlideDir(activeContact.link === ContactMethods.GITHUB.link)} container={deviceCRTRef.current}>
                        <img alt="Github Logo" src="githublogo.png" width="48%" height="auto" style={{ marginTop: "18%", position: "absolute" }} />
                      </Slide>
                      <Slide in={activeContact.link === ContactMethods.LINKEDIN.link} direction={getSlideDir(activeContact.link === ContactMethods.LINKEDIN.link)} container={deviceCRTRef.current}>
                        <img alt="LinkedIn Logo" src="linkedinlogo.png" width="60%" height="auto" style={{ marginTop: "12%", position: "absolute" }} />
                      </Slide>
                      <Slide in={activeContact.link === ContactMethods.EMAIL.link} direction={getSlideDir(activeContact.link === ContactMethods.EMAIL.link)} container={deviceCRTRef.current}>
                        <img alt="LinkedIn Logo" src="emaillogo.png" width="48%" height="auto" style={{ marginTop: "18%", position: "absolute" }} />
                      </Slide>
                    </Box>
                  <Typography sx={{ ml: "0.7ch", color: "#00000095", fontWeight: 600, mt: "18.8ch" }}> A - Open &nbsp; &nbsp; &nbsp;&nbsp; B - Also Open </Typography>
                </Box>
              </Box>
            </Box>

            <Stack direction="row" sx={{ ml: "2ch" }}>
              <Typography sx={{ fontSize: 13, fontWeight: 700, mr: "0.5ch", mt: "0.7ch" }}> Contact </Typography>
              <Typography sx={{ fontSize: 18 }}> DEVICE </Typography>
              <Typography sx={{ fontSize: 18, mt: "0.6ch" }}> &trade; </Typography>
            </Stack>
            <Stack direction="row" sx={{ mt: "8ch", ml: "10%" }}>
              <Stack sx={{ alignItems: "center" }}>
                <Box sx={{ backgroundColor: "text.accent", width: "25px", height: "33px", borderRadius: "3px 3px 0 0", cursor: "pointer", "&:active": { background: "linear-gradient(0deg, rgba(103,93,80,1) 10%, rgba(77,69,60,1) 80%);" } }} />
                <Stack direction="row">
                  <Box onClick={prevContact} sx={{ backgroundColor: "text.accent", width: "33px", height: "25px", borderRadius: "3px 0 0 3px", cursor: "pointer", "&:active": { background: "linear-gradient(-90deg, rgba(103,93,80,1) 10%, rgba(77,69,60,1) 80%);" } }} />
                  <Box sx={{ backgroundColor: "text.accent", width: "25px", height: "25px" }} />
                  <Box onClick={nextContact} sx={{ backgroundColor: "text.accent", width: "33px", height: "25px", borderRadius: "0 3px 3px 0", cursor: "pointer", "&:active": { background: "linear-gradient(90deg, rgba(103,93,80,1) 10%, rgba(77,69,60,1) 80%);" } }} />
                </Stack>
                <Box sx={{ backgroundColor: "text.accent", width: "25px", height: "33px", borderRadius: "0 0 3px 3px", cursor: "pointer", "&:active": { background: "linear-gradient(180deg, rgba(103,93,80,1) 10%, rgba(77,69,60,1) 80%);" } }} />
              </Stack>
              <Stack sx={{ position: "relative"}}>
                <Box onClick={() => window.open(activeContact.link, "_blank")}
                  sx={{ borderRadius: "50%", backgroundColor: "#F1C376", width: "50px", height: "50px", alignSelf: "center", ml: "80px", mt: "45px", cursor: "pointer", "&:active": { background: "radial-gradient(circle, rgba(241,195,118,1) 50%, rgba(163,124,60,1) 100%);" } }} />
                <Typography sx={{ position: "absolute", bottom: "-20px", right: 0, fontWeight: 600, transform: "rotate(-30deg)", color: "text.accent"  }}> B </Typography>
              </Stack>
              
              <Stack sx={{ position: "relative"}}>
                <Box onClick={() => window.open(activeContact.link, "_blank")} 
                  sx={{ borderRadius: "50%", backgroundColor: "#F1C376", width: "50px", height: "50px", alignSelf: "center", ml: "20px", mb: "20px", cursor: "pointer", "&:active": { background: "radial-gradient(circle, rgba(241,195,118,1) 50%, rgba(163,124,60,1) 100%);" } }} />
                <Typography sx={{ position: "absolute", bottom: "26px", right: "-2px", fontWeight: 600, transform: "rotate(-33deg)", color: "text.accent"  }}> A </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Slide>
      </Box>
    </Stack>
  );
};

export default Home;
