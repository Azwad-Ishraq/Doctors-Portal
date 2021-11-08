import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import bg from '../../../images/appointment-bg.png'


const contactUsBanner = {
    background: `url(${bg})`,
    marginTop: '100px',
    backgroundColor: 'rgba(45,58,74,.8)',
    backgroundBlendMode: 'darken,luminosity'

}
const ContactUs = () => {
    return (
        <Box style={contactUsBanner} sx={{flexGrow:1}}>
           <Typography sx={{color:"#12d0d9",fontWeight:400,mb:5,mt:5}} variant='h6'>
                Contact Us
           </Typography>
           <Typography sx={{color:'white',mb:5}} variant='h3'>
                Always Contact With Us
           </Typography>
           

           <Grid sx={{mt:5,mb:5}} container spacing={2}>

        <Grid item xs={12} md={12}>

        <TextField style={{backgroundColor:'white',width:'50%'}} id="filled-basic" label="Email Address" variant="filled" />

        </Grid>

        <Grid item xs={12} md={12}>

        <TextField style={{backgroundColor:'white',width:'50%'}} id="filled-basic" label="Subject" variant="filled" />

        </Grid>

        <Grid item xs={12} md={12}>


        <TextField
         style={{backgroundColor:'white',width:'50%'}}
          id="filled-multiline-static"
          label="Message"
          multiline
          rows={4}
          defaultValue="Message"
          variant="filled"
        />
        </Grid>

        
      </Grid>

      <Button variant='contained's style={{background: 'linear-gradient(to right, #18d2af 0%,#18d2af 52%,#0fcfe7 100%)',boxShadow:'0px 0px',borderRadius:'0'}} >Submit </Button>

        </Box>
    );
};

export default ContactUs;