import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import theme from "./themes/theme";
import { Box, Button, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Education from "./components/Education";
import { BorderBottom } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import End from "./components/End";

function App() {
  const [count, setCount] = useState(0);
  const routes = ["about", "education"];

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack sx={{ backgroundColor: "black" }}>
          <Sidebar sx={{ borderRight: "1px white solid" }} />
          

            <Routes>
              <Route
                path="/"
                element={<About sx={{ BorderBottom: "white 1px solid" }} />}
              />
              <Route path="/skills" element={<Skills />} />
              <Route path="/education" element={<Education />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/end" element={<End />} />
            </Routes>


        </Stack>
      </ThemeProvider>
    </>
  );
}

export default App;
