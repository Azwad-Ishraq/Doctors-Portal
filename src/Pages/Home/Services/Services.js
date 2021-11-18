import React, { useEffect } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import SingleService from '../SingleService/SingleService';
import flourideImg from '../../../images/fluoride.png'
import cavityImg from '../../../images/cavity.png'
import whiteningImg from '../../../images/whitening.png'
import Typography from '@mui/material/Typography';



const Services = () => {
    const services = [
        {
            name: 'Flouride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloribus asperiores incidunt illum ducimus perspiciatis laudantium, architecto nam corporis eaque, facere, ipsam aliquam omnis aut officia veniam? Eos asperiores quaerat commodi ducimus nulla, libero veritatis cum suscipit voluptate possimus porro.',
            img: flourideImg
        },
        {
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloribus asperiores incidunt illum ducimus perspiciatis laudantium, architecto nam corporis eaque, facere, ipsam aliquam omnis aut officia veniam? Eos asperiores quaerat commodi ducimus nulla, libero veritatis cum suscipit voluptate possimus porro.',
            img: cavityImg
        },
        {
            name: 'Teath Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloribus asperiores incidunt illum ducimus perspiciatis laudantium, architecto nam corporis eaque, facere, ipsam aliquam omnis aut officia veniam? Eos asperiores quaerat commodi ducimus nulla, libero veritatis cum suscipit voluptate possimus porro.',
            img: whiteningImg
        }
    ]
    
    return (

        
        <Box sx={{ flexGrow: 1 ,mt:5}}>
            <Container>
                <Typography  sx={{fontWeight: 800,color:'#12d0d9',m:2}} variant="h6" component="div">
                    Our Services
                </Typography>
                <Typography sx={{fontWeight: 400,m:2}} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid data-aos='fade-right' style={{marginTop:'50px'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map((service, index) => (

                        <SingleService key={service.name} service={service}></SingleService>

                    ))}
                </Grid>
            </Container>

        </Box>
    );
};

export default Services;