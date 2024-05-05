import { createTheme } from "@mui/material";



 const theme =createTheme({
    palette: { 
        type: 'dark',
        primary:{
            main:"#407FF0"
        },
        secondary:{
            main:"#1A4694"
        },
        grey:{
            main:"#494949"
        },
        info:{
            main:"#FFF"
        }
     } ,
     typography:{
        fontFamily: '"Source Code Pro", monospace',
        fontOpticalSizing: "auto",
        fontStyle: "normal"
     }
     
})

export default theme;