import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Details = () => {
    const details = [
        {
          title:'Opening Hours',
          des:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorem aperiam quasi ',
          bg:'#1cc7c1',
          icon:<i class="far fa-clock"></i>
        },
        {
          title:'Visti Our Location',
          des:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorem aperiam quasi ',
          bg:'#3a4256',
          icon:<i class="fas fa-map-marker-alt"></i>
    
        },
        {
          title:'Contact Us Now',
          des:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorem aperiam quasi ',
          bg:'#1cc7c1',
          icon:<i class="fas fa-phone-alt"></i>
    
        },
    
      ]
    return (
        <Container style={{marginTop:'-150px'}} sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {details.map((singleItem, index) => (
            <Grid item xs={12} sm={12} md={4} key={index}>
            <Box style={{textAlign:'left',backgroundColor: singleItem.bg,color:'white'}} sx={{m:3,p:5}}>
                <Typography sx={{mb:2}} variant='h5'>
                  {singleItem.icon}  {singleItem.title}
                </Typography>
                <Typography style={{fontWeight:'400'}} variant='p'>
                    {singleItem.des}
                </Typography>

            </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
};

export default Details;