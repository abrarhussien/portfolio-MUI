import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

const End = () => {
  const navigate = useNavigate();

  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundColor: "black",
          maxWidth: "100vw",
          minHeight: "100vh",
          paddingInline: { xs: "20px", md: "50px", lg: "250px" },
          paddingLeft: { lg: "250px" },
          paddingTop: { xs: "0", md: "30px" },
        }}
      >
        <Typography
          variant={"h3"}
          color={"white"}
          gutterBottom
          sx={{ lineHeight: {xs:"1.4",md:"1.6"}, fontSize: { xs: "30px",md:"auto" } }}
        >
          ` Looking back, the biggest motivator is the thought of how proud my
          younger self would be of the path I've chosen. `
        </Typography>
        <Stack
          onClick={() => navigate("/")}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            position: { sm: "fixed" },
            top: { sm: "50%" },
            right: { sm: "50px" },
            rotate: { xs: "90deg", sm: "0deg" },
            transform: { sm: "translate(0, -50%)" },
            border: "2px solid white",
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            "&:hover": { cursor: "pointer" },
            margin: { xs: "40px auto", sm: "0 0" },
          }}
        >
          <ArrowForwardIosIcon color="info" />
        </Stack>
      </Stack>
    </>
  );
};

export default End;
