import { Box, Button, IconButton, Stack, Typography, styled } from "@mui/material";
import React, { useState } from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

import angularDemo from "../assets/images/demoangular.png";
import angularDemo2 from "../assets/images/demoangular2.png";
import angularDemo3 from "../assets/images/demoangular3.png";
import angularDemo4 from "../assets/images/demoangular4.png";
import angularDemo5 from "../assets/images/demoangular5.png";
import angularDemo6 from "../assets/images/demoangular6.png";

import Reactdemo1 from "../assets/images/demoreact1.png";
import Reactdemo2 from "../assets/images/demoreact2.png";
import Reactdemo3 from "../assets/images/demoreact3.png";

import examDemo1 from "../assets/images/examination1.png"
import examDemo2 from "../assets/images/examination2.png"
import examDemo3 from "../assets/images/examination3.png"
import examDemo4 from "../assets/images/examination4.png"
import examDemo5 from "../assets/images/examination5.png"

import Github2 from "../assets/SVGs/github2";
import Github3 from "../assets/SVGs/github3";

const styledBox= styled(Box)`
  &:hover  {
    cursor: pointer;
  }

}
`;
const Projects = () => {
  const navigate = useNavigate();
  const [currentImage,setCurrenImage]=useState([0,0,0])
  const changeimg=(index)=>{

    const newcurrent=[...currentImage];
    if(currentImage[index]===projects[index].imgs.length-1){
      newcurrent[index]=0;
      
    }
    else{
    newcurrent[index]=newcurrent[index]+1
    }

    setCurrenImage(newcurrent)


  }
  const projects = [
    {
      color: "#494949",
      title: "zero electronics",
      details: "angular and node.JS",
      imgs: [
        angularDemo,
        angularDemo2,
        angularDemo3,
        angularDemo4,
        angularDemo5,
        angularDemo6,
      ],
      links: {
        frontend: "https://github.com/abrarhussien/E-commerce-Angular",
        backend: "https://github.com/Raafat1Heiba/Node-E-commerce",
        demo: "https://e-commerce-zero-two.vercel.app/home",
      },
    },
    {
      color: "#1A4694",
      title: "zero blog",
      details: "React.js and nest.JS",
      imgs: [Reactdemo1, Reactdemo2, Reactdemo3],
      links: {
        frontend: "https://github.com/abrarhussien/blog-React.JS",
        backend: "https://github.com/abrarhussien/blog-API",
        demo: "https://blog-react-js-lilac.vercel.app/",
      },
    },
    {
      color: "black",
      title: "Examination system",
      details: " HTML, CSS, Bootstrap, and vanila JavaScript",
      imgs: [examDemo1,examDemo2,examDemo3,examDemo4,examDemo5],
      links: {
        frontend: "https://github.com/abrarhussien/examination-system--JS",
        demo: "https://abrarhussien.github.io/examination-system--JS/sign-up",
      },
    },
  ];

  return (
    <>
      <Stack
        onClick={() => navigate("/education")}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          position: "fixed",
          top: "50%",
          right: "50px",
          transform: "translate(0, -50%)",
          border: "2px solid white",
          borderRadius: "50%",
          height: "50px",
          width: "50px","&:hover" : { cursor: "pointer"}
        }}
      >
        <ArrowForwardIosIcon color="info" />
      </Stack>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "black",
          maxWidth: "100vw",
          paddingInline: { xs: "20px", md: "80px", lg: "250px" },
          paddingLeft: { lg: "250px" },
          paddingTop: { xs: "30px", lg: "100px" },
        }}
      >
        <Typography
          variant={"h3"}
          color={"white"}
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          projects:
        </Typography>
        <Stack  sx={{flexDirection:"row", flexWrap:"wrap"}}>
          {projects.map((project,index) => (
            <Box
            key={index}
              sx={{
                minHeight: "360px",
                backgroundColor: project.color,
                padding: "20px",
                paddingTop: "50px",
                maxWidth: "450px",
              }}
            >
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="h4"
                color={"white"}
                gutterBottom
              >
                {project.title}
              </Typography>
              <Typography variant="p" color={"white"}>
                {project.details}
              </Typography>
              <Box sx={{ marginTop: "20px","&:hover" : { cursor: "pointer"} }} onClick={()=>changeimg(index)} >
                <img width={"100%"} src={project.imgs[currentImage[index]]} />
              </Box>
              <Stack
                sx={{ width: "100%", marginBlock: "20px" }}
                direction={"row"}
                justifyContent={"space-evenly"}
              >
                <Stack justifyContent={"center"} alignItems={"center"}  onClick={()=>window.location.href = project.links.frontend}>
                  <Typography variant="p" color={"white"} gutterBottom>
                    frontend
                  </Typography>
                  <Box color={"white"} sx={{ width: "50px", height: "50px","&:hover" : { cursor: "pointer"} }}>
                    <Github2 />
                  </Box>
                </Stack>
                {project.links.backend&&<Stack justifyContent={"center"} alignItems={"center"}  onClick={()=>window.location.href = project.links.backend}>
                  <Typography variant="p" color={"white"} gutterBottom>
                    backend
                  </Typography>
                  <Box color={"white"} sx={{ width: "50px", height: "50px","&:hover" : { cursor: "pointer"} }}>
                    <Github3 />
                  </Box>
                </Stack>}
              </Stack>
              <Stack sx={{ width: "100%" }} alignItems={"center"}>
                <Button
                  sx={{ width: "80%", height: "50px" }}
                  color={"info"}
                  variant="outlined"
                  onClick={()=>window.location.href = project.links.demo}
                >
                  live demo
                </Button>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default Projects;
