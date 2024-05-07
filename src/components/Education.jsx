import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

import CertificationIcon from "../assets/SVGs/certificationIcon";

const Education = () => {
  const navigate = useNavigate();

  const Certifications = [
    { year: "2024", name: "Meta, Meta Front‑End Developer", from: "Coursera" },
    {
      year: "2024",
      name: "Angular University, Typescript Bootcamp Beginner To Advanced",
      from: "Udemy",
    },
    {
      year: "2024",
      name: "Johns Hopkins University, HTML, CSS, and JavaScript for Web Developers",
      from: "Coursera",
    },
    {
      year: "2023",
      name: "NTI, Web Design Digital Egypt Youth Program",
      from: "NTI",
    },
  ];

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
          "&:hover": { cursor: "pointer" },
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
          Certifications:
        </Typography>
        {Certifications.map((cert) => (
          <Stack direction={"row"} alignItems={"center"}>
            <Box sx={{ width: "30px", height: "30px", marginRight: "5px" }}>
              <CertificationIcon />
            </Box>

            <Typography
              variant={"h6"}
              color={"lightGrey"}
              gutterBottom
              sx={{ fontWeight: "bold", marginRight: "15px" }}
            >
              {cert.year}
            </Typography>
            <Typography
              variant={"h6"}
              color={"white"}
              gutterBottom
              sx={{ fontWeight: "bold", marginRight: "10px" }}
            >
              {cert.name + ","}
            </Typography>
            <Typography
              variant={"h6"}
              color={"primary"}
              gutterBottom
              sx={{ fontWeight: "bold","&:hover" : { cursor: "pointer"} }}
            >
              {cert.from}
            </Typography>
          </Stack>
        ))}
      </Box>
    </>
  );
};

export default Education;
