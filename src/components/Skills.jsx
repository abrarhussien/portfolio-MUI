import { Box, Grid, Grow, Stack, SvgIcon, Typography } from "@mui/material";
import React from "react";
import Reactsvg from "../assets/SVGs/React";
import Angularsvg from "../assets/SVGs/Angular";
import Vuesvg from "../assets/SVGs/Vuesvg";
import AIsvg from "../assets/SVGs/AIsvg";
import Bootstrabsvg from "../assets/SVGs/Bootstrapsvg";
import CPPsvg from "../assets/SVGs/CPPsvg";
import CSSsvg from "../assets/SVGs/CSSsvg";
import Csvg from "../assets/SVGs/Csvg";
import Figmasvg from "../assets/SVGs/Figmasvg";
import Githubsvg from "../assets/SVGs/Githubsvg";
import Gitsvg from "../assets/SVGs/Gitsvg";
import HTMLsvg from "../assets/SVGs/HTMLsvg";
import Jestsvg from "../assets/SVGs/Jestsvg";
import Jquerysvg from "../assets/SVGs/Jquerysvg";
import JSsvg from "../assets/SVGs/JSsvg";
import MongoDBsvg from "../assets/SVGs/MongoDBsvg";
import MUIsvg from "../assets/SVGs/MUIsvg";
import NestJSsvg from "../assets/SVGs/NestJSsvg";
import NextJSsvg from "../assets/SVGs/NextJSsvg";
import NodeJSsvg from "../assets/SVGs/NodeJSsvg";
import PSsvg from "../assets/SVGs/PSsvg";
import Reduxsvg from "../assets/SVGs/Reduxsvg";
import RXJSsvg from "../assets/SVGs/RXJSsvg";
import Sasssvg from "../assets/SVGs/Sasssvg";
import SQLsvg from "../assets/SVGs/SQLsvg";
import Tailwindsvg from "../assets/SVGs/tailwindsvg";
import TSsvg from "../assets/SVGs/TSsvg";
import Vitestsvg from "../assets/SVGs/Vitest";
import XDsvg from "../assets/SVGs/XDsvg";
import XMLsvg from "../assets/SVGs/XMLsvg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';


const StyledIcon = styled(SvgIcon)`
  ${({ theme }) => `

  transition: ${theme.transitions.create([ 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    transform: scale(1.4);
  }
  `}
`;

const Skills = () => {
    const navigate= useNavigate()

  return (
    <>
    <Stack onClick={()=>navigate("/projects")} justifyContent={"center"} alignItems={"center"} sx={{position:"fixed",top:"50%" , right:"50px" , transform: "translate(0, -50%)", border:"2px solid white", borderRadius:"50%" , height:"50px" , width:"50px","&:hover" : { cursor: "pointer"}}}>
      <ArrowForwardIosIcon color="info"/>
    </Stack>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "black",
          maxWidth: "100vw",
          minHeight: "100vh",
          paddingInline: {xs:"20px", md: "80px",lg:"250px" },
          paddingLeft: { lg: "250px" },
          paddingTop: {xs:"30px",lg:"100px"},
          
          
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

        <Stack direction={"row"} flexWrap={"wrap"} sx={{marginTop:"30px"}} >
        
        <Grow in={true} timeout={500}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"}, margin:"10px" }}>
          <Reactsvg />
        </StyledIcon>
        </Grow>

        
        <Grow in={true} timeout={600}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"}, margin:"10px"}}>
          <Angularsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={700}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"},margin:"10px"}}>
          <Vuesvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={800}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"},margin:"10px"}}>
          <AIsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={900}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"},margin:"10px"}}>
          <Bootstrabsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={1000}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"},margin:"10px"}}>
          <CPPsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={1100}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"},margin:"10px"}}>
          <CSSsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={1200}>
        <StyledIcon  sx={{color:"white",height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"},margin:"10px"}}>
          <Csvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={1300}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"},margin:"10px"}}>
          <Figmasvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={1400}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"},margin:"10px"}}>
          <Githubsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={1500}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"},margin:"10px"}}>
          <Gitsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={1600}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"},margin:"10px"}}>
          <HTMLsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={1700}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"},margin:"10px"}}>
          <Jestsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={1800}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"},margin:"10px"}}>
          <Jquerysvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={1900}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"},margin:"10px"}}>
          <JSsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={2000}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"},margin:"10px"}}>
          <MongoDBsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={2100}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"},margin:"10px"}}>
          <MUIsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={2200}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"},margin:"10px"}}>
          <NestJSsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={2300}>
        <StyledIcon sx={{color:"white",height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"},margin:"10px"}}>
          <NextJSsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={2400}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"}, margin:"10px"}}>
          <NodeJSsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={2500}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"}, margin:"10px"}}>
          <PSsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={2600}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"}, margin:"10px"}}>
          <Reduxsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={2700}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"}, margin:"10px"}}>
          <RXJSsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={2800}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"}, margin:"10px"}}>
          <Sasssvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={2900}>
        <StyledIcon sx={{color:"white",height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"}, margin:"10px"}}>
          <SQLsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={3000}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"}, margin:"10px"}}>
          <Tailwindsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={3100}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"}, margin:"10px"}}>
          <TSsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={3200}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"}, margin:"10px"}}>
          <Vitestsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={3400}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"}, margin:"10px"}}>
          <XDsvg/>
        </StyledIcon>
        </Grow>
        
        <Grow in={true} timeout={3500}>
        <StyledIcon sx={{height:{xs:"60px",md:"70px"},width:{xs:"60px",md:"70px"}, margin:"10px"}}>
        <XMLsvg/>
        </StyledIcon>
        </Grow>
        </Stack>

        
      </Box>
    </>
  );
};

export default Skills;
