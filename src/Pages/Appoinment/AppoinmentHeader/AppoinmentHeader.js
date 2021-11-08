import { Container, Grid } from '@mui/material';
import React from 'react';
import chairImg from '../../../images/chair.png'
import Celender from '../../Celender/Celender';

const AppoinmentHeader = ({date,setDate}) => {
   
    return (
        <Container>
            <Grid container spacing={2}>
                    <Grid xs={12} md={6}>
                        <Celender date={date} setDate={setDate}></Celender>
                    </Grid>
                    <Grid xs={12} md={6}>
                            <img style={{width:'100%'}} src={chairImg} alt=""/>
                    </Grid>
            </Grid>
        </Container>
    );
};

export default AppoinmentHeader;