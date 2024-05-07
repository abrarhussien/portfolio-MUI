import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";



const Education = () => {
  const navigate= useNavigate()

  return (
    <>
      <Stack
        onClick={() => navigate("/end")}
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
          width: "50px",
          
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
          Education:
        </Typography>
        <Typography
          variant={"h3"}
          color={"white"}
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          certeficates:
        </Typography>
      </Box>
    </>
  )
}

export default Education
