import { Grid, Typography } from '@mui/material';
import React from 'react';

const Doctor = ({doctor}) => {
    const {name,image,email} = doctor
    
    return (
        <Grid  item xs={12} sm={6} md={4}>
            <img style={{width:'80%'}} src={`data:image/jpeg;base64,${image}`} alt=""/>
            <Typography variant='h5'>
                {name}
            </Typography>
            <Typography style={{color:'#1cc7c1'}} variant='p'>
                {email}
            </Typography>
        </Grid>
    );
};

export default Doctor;