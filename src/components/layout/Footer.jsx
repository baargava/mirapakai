import React from 'react'
import {Box,Typography} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
    <Box sx={{bgcolor:'#1a1a19',color:'white',textAlign:'center',p:3}}>
      <Box sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(3px)",
              transition: "all 300ms",
            },
          }}>
        <InstagramIcon/>
        <TwitterIcon/>
        <GitHubIcon/>
        <YouTubeIcon/>
      </Box>
      <Typography sx={{
        "@media(max-width:600px)":{
          fontSize:'1em'
        }
      }}>All Rights Reserved &copy; BAARGAV_RG</Typography>
    </Box>
    </>
  )
}

export default Footer