import { Box, Stack, Typography, Grid, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import React from "react";
import zero from "../assets/images/zero.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <Stack
        justifyContent={"space-between"}
        sx={{
          backgroundColor: "black",
          maxWidth: "100vw",
          minHeight: "100vh",
          paddingInline: { md: "50px", lg: "0" },
          paddingLeft: { lg: "100px" },
        }}
      >
        <Grid
          spacing={{ md: 10 }}
          justifyContent={"start"}
          container
          sx={{
            backgroundColor: "black",
            paddingLeft: { lg: "100px", xl: "200px" },
            paddingTop: { xs: "20px", lg: "100px", xl: "150px" },
          }}
        >
          <Grid
            item
            xs={12}
            md={8}
            xl={6}
            sx={{
              height: "400px",
              display: "flex",
              flexDirection: "column",
              paddingInline: { xs: "20px", sm: "40px", md: "0", lg: "0px" },
            }}
          >
            <Typography
              alignSelf={"end"}
              variant="h4"
              color={"secondary"}
              gutterBottom
            >
              Hey there&#x1F44B;
            </Typography>
            <Typography variant="h3" color={"white"} gutterBottom>
              I'am Abrar Hussien
            </Typography>
            <Typography
              variant={"h3"}
              color={"white"}
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Frontend Developer
            </Typography>
            <Typography variant="h5" color={"white"} gutterBottom>
              and a JavaScript lover
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            xl={3}
            sx={{
              marginTop: { xs: "30px", sm: "0" },
              marginBottom: { sm: "50px" },
              paddingInline: { sm: "170px", md: "0", lg: "0" },
            }}
          >
            <img width={"100%"} src={`${zero}`} />
          </Grid>
        </Grid>
        <Grid container justifyContent={"end"}>
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            xl={2}
            sx={{
              height: "360px",
              padding: "20px",
              paddingBlock: "50px",
            }}
          >
            <Stack justifyContent={"space-between"} sx={{ height: "100%" }}>
              <Box>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h4"
                  color={"white"}
                  gutterBottom
                >
                  say hello
                </Typography>
                <Typography
                  sx={{ "&:hover": { cursor: "pointer" } }}
                  variant="p"
                  color={"white"}
                  gutterBottom
                >
                  abrarhussien@gmail.com
                </Typography>
              </Box>

              <Stack spacing={1} direction="row" sx={{ marginTop: "25px" }}>
                <LinkedInIcon
                  sx={{ "&:hover": { cursor: "pointer" } }}
                  fontSize="large"
                  color="primary"
                />
                <GitHubIcon
                  sx={{ "&:hover": { cursor: "pointer" } }}
                  fontSize="large"
                  color="primary"
                />
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            xl={2}
            sx={{
              height: "360px",
              backgroundColor: "#494949",
              padding: "20px",
              paddingBlock: "50px",
            }}
          >
            <Stack justifyContent={"space-between"} sx={{ height: "100%" }}>
              <Box>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h4"
                  color={"white"}
                  gutterBottom
                >
                  My Works
                </Typography>
                <Typography variant="p" color={"white"} gutterBottom>
                  Just me playing around
                </Typography>
              </Box>

              <Button
                sx={{ width: "80%", height: "50px" }}
                color={"info"}
                variant="outlined"
              >
                click
              </Button>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            xl={2}
            sx={{
              height: "360px",
              backgroundColor: "#407FF0",
              padding: "20px",
              paddingBlock: "50px",
            }}
          >
            <Stack justifyContent={"space-between"} sx={{ height: "100%" }}>
              <Box>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h4"
                  color={"white"}
                  gutterBottom
                >
                  say hello
                </Typography>
                <Typography variant="p" color={"white"} gutterBottom>
                  abrarhussien@gmail.com
                </Typography>
              </Box>

              <Button
                sx={{ width: "80%", height: "50px" }}
                color={"info"}
                variant="outlined"
              >
                click
              </Button>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            xl={2}
            sx={{
              height: "360px",
              backgroundColor: "#1A4694",
              padding: "20px",
              paddingBlock: "50px",
            }}
          >
            <Stack justifyContent={"space-between"} sx={{height:"100%"}}>
              <Box>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h4"
                  color={"white"}
                  gutterBottom
                >
                  Resume
                </Typography>
                <Typography variant="p" color={"white"} gutterBottom>
                  Download my resume
                </Typography>
              </Box>

              <Button
                sx={{ width: "80%", height: "50px" }}
                color={"info"}
                variant="outlined"
              >
                Download
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <Stack
          onClick={() => navigate("/skills")}
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

export default About;
