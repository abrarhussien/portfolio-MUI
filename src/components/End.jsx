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
          width: "50px",
        }}
      >
        <ArrowForwardIosIcon color="info" />
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
          end:
        </Typography>
      </Box>
    </>
  )
}

export default End
