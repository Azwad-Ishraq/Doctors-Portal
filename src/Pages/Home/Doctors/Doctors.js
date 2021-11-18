import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
// import doctorsBg from '../../../images/doctorsBg.jpg'


const bgStyle = {
    // background: `url(${doctorsBg})`,
    // height: '100vh',
    display: 'flex',
    alignItems:'center',
    flexDirection:'column',
    padding:'5vh'
}


const Doctors = () => {
    const [doctors,setDoctors] = useState([])
    
    useEffect(()=>{
        fetch(`https://morning-mountain-42778.herokuapp.com/doctors`)
        .then(res => res.json())
        .then(data => setDoctors(data))
        
        

    },[])
    console.log(doctors)
    return (
        <Box style={bgStyle} sx={{mt:5,mb:10}}>
            <Typography style={{borderBottom:'5px solid #1cc7c1',width:"50%"}} sx={{mb:5}} variant='h2'>
                Our Doctors
            </Typography>

           <Container>
           <Grid container spacing={2}>
              
            {
                doctors.slice(0,3).map(item => <Doctor doctor={item}></Doctor>)
            }
  
  

</Grid>
           </Container>
        </Box>
    );
};

export default Doctors;