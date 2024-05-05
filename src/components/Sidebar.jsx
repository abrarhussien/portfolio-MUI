import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Stack } from '@mui/material'
import React, { useState } from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
    const [expand,setExpand]=useState(false)
    const toggleExpand=(event)=>{
        if(event.target.localName=="span"){
            return;
        }
        setExpand((pre)=>{return !pre})
    }
    const navigate= useNavigate()

  return (
    <Stack  justifyContent="center" onClick={toggleExpand}  alignItems="center" sx={{minHeight:{xs:"100px",lg:"100vh"},backgroundColor:"black" ,minWidth:{xs:"100vw",lg:"100px"},position:{lg:"fixed"},top:"0",left:"0", borderRight:{lg:"1px white solid",borderBottom:{xs:"1px white solid",lg:"none"}}}}>
        {!expand&&<MenuOutlinedIcon sx={{color:"white", fontSize:"40px"}}/>}
        {expand&&<Box sx={{height:"auto",width:{xs:"100%",lg:"220px"}}}>
            <List sx={{color:"white", width:{lg:"220px"}}}>
                <ListItem disablePadding >
                    <ListItemButton onClick={()=>{navigate("/")}}>
                        <ListItemText  sx={{textAlign:"center"}} primary="ABOUT" /> 
                    </ListItemButton>
                </ListItem>
                <Divider sx={{color:"white"}}/>
                <ListItem disablePadding >
                    <ListItemButton onClick={()=>{navigate("/skills")}}>
                        <ListItemText sx={{textAlign:"center"}} primary="SKILLS" /> 
                    </ListItemButton>
                </ListItem>
                <Divider sx={{color:"white"}}/>
                
                <ListItem disablePadding >
                    <ListItemButton onClick={()=>{navigate("/projects")}}>
                        <ListItemText sx={{textAlign:"center"}} primary="PROJECTS" /> 
                    </ListItemButton>
                </ListItem>
                <Divider sx={{color:"white"}}/>

                <ListItem disablePadding >
                    <ListItemButton onClick={()=>{navigate("/education")}}>
                        <ListItemText sx={{textAlign:"center"}} primary="EDUCATION" /> 
                    </ListItemButton>
                </ListItem>
                <Divider sx={{color:"white"}}/>

                

                <ListItem disablePadding >
                    <ListItemButton onClick={()=>{navigate("/education")}}>
                        <ListItemText sx={{textAlign:"center"}} primary="CERTEFICATES" /> 
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>}
    </Stack>
  )
}

export default Sidebar
