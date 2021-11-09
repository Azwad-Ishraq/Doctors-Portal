import { Container, Grid } from '@mui/material';
import React from 'react';
import chairImg from '../../../images/chair.png'
import Celender from '../../Celender/Celender';

const AppoinmentHeader = ({date,setDate}) => {
   
    return (
        <Container>
            <Grid style={{width:"110%"}} container spacing={2}>
                    <Grid xs={12} md={6}>
                        <Celender date={date} setDate={setDate}></Celender>
                    </Grid>
                    <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}} xs={12} md={6}>
                            <img style={{width:'90%'}} src={chairImg} alt=""/>
                    </Grid>
            </Grid>
        </Container>
    );
};

export default AppoinmentHeader;