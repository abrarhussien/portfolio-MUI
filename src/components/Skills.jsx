import { Box, Stack, SvgIcon, Typography } from "@mui/material";
import React from "react";
import Reactsvg from "../assets/SVGs/React";
import Angularsvg from "../assets/SVGs/Angular";
import Vuesvg from "../assets/SVGs/Vuesvg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";



const Skills = () => {
    const navigate= useNavigate()

  return (
    <>
    <Stack onClick={()=>navigate("/projects")} justifyContent={"center"} alignItems={"center"} sx={{position:"fixed",top:"50%" , right:"50px" , transform: "translate(0, -50%)", border:"2px solid white", borderRadius:"50%" , height:"50px" , width:"50px"}}>
      <ArrowForwardIosIcon color="info"/>
    </Stack>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "black",
          maxWidth: "100vw",
          minHeight: "100vh",
          paddingInline: { md: "50px", lg: "0" },
          paddingLeft: { lg: "150px" },
          paddingTop: "30px",
        }}
      >
        <Typography
          variant={"h3"}
          color={"white"}
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Skills:
        </Typography>
        <SvgIcon sx={{height:"40px",width:"40px"}}>
          <Reactsvg />
        </SvgIcon>
        <SvgIcon sx={{height:"40px",width:"40px"}}>
          <Angularsvg/>
        </SvgIcon>
        <SvgIcon sx={{height:"40px",width:"40px"}}>
          <Vuesvg/>
        </SvgIcon>
      </Box>
    </>
  );
};

export default Skills;
