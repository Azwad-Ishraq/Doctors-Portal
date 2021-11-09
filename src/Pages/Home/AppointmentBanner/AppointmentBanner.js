import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import doctorImg from '../../../images/doctor.png'
import { Button, Container, Typography } from '@mui/material';
import bg from '../../../images/appointment-bg.png'

const appoinmentBanner = {
    background: `url(${bg})`,
    marginTop: '175px',
    backgroundColor: 'rgba(45,58,74,.8)',
    backgroundBlendMode: 'darken,luminosity',
    backgroundAttachment: 'fixed'

}

const AppointmentBanner = () => {
    return (
        <Box style={appoinmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
          <img style={{width:'65%',marginTop:'-150px'}} src={doctorImg} alt=""/>
          </Grid>
          <Grid item xs={12} md={6} sx={{display: 'flex',justifyContent:'flex-start',textAlign:'left',alignItems:'center',mb:5}}>
           <Container>
           <Typography variant='h6' sx={{mb:5}} style={{color: '#12d0d9'}}>
                Appointment
            </Typography>
            <Typography sx={{mb:5}} variant='h4' style={{color:'white'}}>
               Make an Appointment
            </Typography>
            <Typography sx={{mb:5}} style={{color:'white',fontSize:'14',fontWeight:300}} variant='h6'>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat commodi voluptatem facere blanditiis voluptates, ipsa eligendi ipsum. Minima, pariatur deserunt.
            </Typography>
            <Button variant='contained's style={{background: 'linear-gradient(to right, #18d2af 0%,#18d2af 52%,#0fcfe7 100%)',boxShadow:'0px 0px',borderRadius:'0'}} >Learn More</Button>
           </Container>
          </Grid>
          
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;