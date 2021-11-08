import React from 'react';
import chairImg from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import Box from '@mui/material/Box';
import Navigation from '../../Navigation/Navigation'

import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';



const bannerBg = {
    background: `url(${bg})`,
    backgroundAttachment: 'fixed',
    height: '100vh',
    display: 'flex',
    alignItems:'center',
    flexDirection:'column',
    

}
const verticleCenter = {
    display: 'flex',
    alignItems: 'center',
    
    height: '400px',
    
}
const BoxStyle={
  display:'flex',
  alignItems:'center',
  height:'100%',
  justifyContent:'space-between',
  width: '90%'
}
const Banner = () => {
 
    return (
      

        <Box style={bannerBg} sx={{ flexGrow: 1 }}>
         
          <Navigation></Navigation>
          <Box style={BoxStyle}>
          <Grid  container spacing={12}>
        <Grid  style={{textAlign: 'left'}} item xs={12} md={5}>
          <Typography sx={{mb:3}} variant='h3'>
              Your New Smile
              Start Here
          </Typography>
          <Typography sx={{mb:3}} style={{fontWeight:'300'}} variant='h6'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis distinctio architecto illum voluptatum. Qui impedit obcaecati consequuntur, voluptatibus neque necessitatibus!
          </Typography>
          <Button style={{background: 'linear-gradient(to right, #18d2af 0%,#18d2af 52%,#0fcfe7 100%)',boxShadow:'0px 0px',borderRadius:'0px'}} variant='contained'>Get Appoinment</Button>
        </Grid>
        <Grid style={verticleCenter} item xs={12} md={7}>
          <img style={{width:'100%'}} src={chairImg} alt=""/>
        </Grid>
        
      </Grid>
      

          </Box>
     
    </Box>
    );
};

export default Banner;