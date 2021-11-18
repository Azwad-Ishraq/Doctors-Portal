import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import footerBg from '../../../images/footerBg.jpg'
import './Footer.css'



const bgStyle = {
    background: `url(${footerBg})`,
    backgroundSize: 'cover',
    height: '70vh',
    display: 'flex',
    alignItems: 'center'
}
const gridItemStyle = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    height:'250px',
    textAlign:'left',
    padding:'30px'
}
const Footer = () => {
    return (
        <Box style={bgStyle}>
            <Grid container spacing={2}>
                <Grid style={gridItemStyle} item xs={6} sm={4} md={3}>


                    <Typography sx={{mb:1}} variant='body1'>
                        Emergency Dental Care
                </Typography>

                    <Typography sx={{mb:1}} variant='body1'>
                        Check Up
                </Typography>

                    <Typography sx={{mb:1}} variant='body1'>
                        Treatment for personal Diseases
                </Typography>
                    <Typography sx={{mb:1}} variant='body1'>
                        Tooth Extraction
                </Typography>
                    <Typography sx={{mb:1}} variant='body1'>
                        Check Up
                </Typography>


                </Grid>
                <Grid style={gridItemStyle} item xs={6} sm={4} md={3}>


                    <Typography sx={{mb:1}} style={{ color: '#1cc7c1' }} variant='h5'>
                        Services
                    </Typography>

                    <Typography sx={{mb:1}} variant='body1'>
                        Emergency Dental Care
                </Typography>

                    <Typography sx={{mb:1}} variant='body1'>
                        Check Up
                </Typography>

                    <Typography sx={{mb:1}} variant='body1'>
                        Treatment for personal Diseases
                </Typography>
                    <Typography sx={{mb:1}} variant='body1'>
                        Tooth Extraction
                </Typography>
                    <Typography sx={{mb:1}} variant='body1'>
                        Check Up
                </Typography>
                    <Typography sx={{mb:1}} variant='body1'>
                        Check Up
                </Typography>
                    <Typography sx={{mb:1}} variant='body1'>
                        Check Up
                </Typography>



                </Grid>


                <Grid style={gridItemStyle} item xs={6} sm={4} md={3}>
                <Typography sx={{mb:1}} style={{ color: '#1cc7c1' }} variant='h5'>
                        Oral Health
                    </Typography>

                    <Typography sx={{mb:1}} variant='body1'>
                        Emergency Dental Care
                </Typography>

                    <Typography sx={{mb:1}} variant='body1'>
                        Check Up
                </Typography>

                    <Typography sx={{mb:1}} variant='body1'>
                        Treatment for personal Diseases
                </Typography>
                    <Typography sx={{mb:1}} variant='body1'>
                        Tooth Extraction
                </Typography>
                    <Typography sx={{mb:1}} variant='body1'>
                        Check Up
                </Typography>
                    <Typography sx={{mb:1}} variant='body1'>
                        Check Up
                </Typography>
                    <Typography sx={{mb:1}} variant='body1'>
                        Check Up
                </Typography>
                </Grid>



                <Grid style={gridItemStyle} item xs={6} sm={4} md={3}>
                <Typography sx={{mb:1}} style={{ color: '#1cc7c1' }} variant='h5'>
                        Oral Address
                    </Typography>

                    <Typography sx={{mb:1}} variant='body1'>
                        New York- 101010 Hudson Yard
                </Typography>


                    <Typography sx={{mb:1}} variant='p'>
                        <i   class="fab fa-google footer-icon"></i>
                        <i  class="fab fa-facebook footer-icon"></i>
                        <i    class="fab fa-twitter footer-icon"></i>
                </Typography>


                <Typography sx={{mb:1}} variant='body1'>
                        Call Now
                </Typography>

                <Button style={{background: 'linear-gradient(to right, #18d2af 0%,#18d2af 52%,#0fcfe7 100%)',boxShadow:'0px 0px',borderRadius:'0px'}} variant='contained'>+014597451</Button>


                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;