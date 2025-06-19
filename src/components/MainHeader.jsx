import React from 'react'
import { slideContentStyle, slideInnerContentStyle } from './styles/SlideStyle'
import image from '../assets/images/aboutBg.jpg'
import { Box, Typography } from '@mui/material'
import logo from '../assets/images/logo.png'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
export const MainHeader = ({text}) => {
  return (
      <Box className="slide-content" sx={slideContentStyle(image,'35vh')}>
      <Box sx={slideInnerContentStyle}>
    <img src={logo} style={{width:'100px'}}/>
   <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',direction:'rtl'}}>
   <Typography>الرئيسية</Typography>
    <ArrowLeftOutlinedIcon />
 <Typography>{text} </Typography>
   </Box>
     
      </Box>
    </Box>
  )
}
