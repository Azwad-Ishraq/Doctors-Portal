import React, { useState } from 'react';
import Celender from '../../Celender/Celender';
import Appoinments from '../Appoinments/Appoinments';
import { Grid } from '@mui/material';
const DashboardHome = () => {
    const [date,setDate] = useState(new Date())
    return (
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
            <Celender
            date={date}
            setDate={setDate}
            ></Celender>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
           <Appoinments date={date}></Appoinments>
        </Grid>


    </Grid>
    );
};

export default DashboardHome;