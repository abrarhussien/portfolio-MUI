import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";


const End = () => {
    const navigate= useNavigate()

  return (
    <>
      <Stack
        onClick={() => navigate("/")}
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
      <Stack justifyContent={"center"} alignItems={"center"}
        sx={{
          height: "100vh",
          backgroundColor: "black",
          maxWidth: "100vw",
          minHeight: "100vh",
          paddingInline: { md: "50px",lg: "250px" },
          paddingLeft: { lg: "250px" },
          paddingTop: "30px",
          
        }}
      >
        <Typography
          variant={"h3"}
          color={"white"}
          gutterBottom

          sx={{ lineHeight:"1.5" }}
        >
          ` Looking back, the biggest motivator is the thought of how proud my younger self would be of the path I've chosen. `
        </Typography>
      </Stack>
    </>
  )
}

export default End
