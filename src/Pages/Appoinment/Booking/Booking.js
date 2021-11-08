import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({booking,date,setOpenSnackBar}) => {
    const {name,space,time} = booking
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        
        <>
         <Grid item xs={12} sm={6} md={4}>
             <Paper sx={{p:5}} elevation={3}>
                <Typography sx={{mb:2}} style={{color:'#12d0d9'}} variant='h5' gutterBottom component='div'>
                        {name}
                </Typography>
                <Typography sx={{mb:2}} variant='h6' gutterBottom component='div'>
                        {time}
                </Typography>
                <Typography sx={{mb:2}} variant='p' gutterBottom component='div'>
                {space} Space Available
                </Typography>
                
                <Button onClick={handleOpen}variant='contained's style={{background: 'linear-gradient(to right, #18d2af 0%,#18d2af 52%,#0fcfe7 100%)',boxShadow:'0px 0px',borderRadius:'0'}} >Book Appoinment</Button>
             </Paper>
         </Grid>
         <BookingModal
          date={date} 
          booking={booking} 
          open={open} 
          handleClose={handleClose}
          setOpenSnackBar={setOpenSnackBar}
          >

          </BookingModal>
        </>
    );
};

export default Booking;