import { Alert, Container, Grid, Snackbar, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Booking from '../Booking/Booking';


const AvailableAppoinment = ({ date }) => {
    const [openSnackBar,setOpenSnackBar] = useState(false)

    const handleClose = () => {
        setOpenSnackBar(false)
    }


    const bookings = [
        {
            id: 1,
            name: 'Teeth  Orthodontics',
            time: '8.00 AM - 9.00 AM',
            space: '10',
            price:'250'
        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '10.05 AM - 11.30 AM',
            space: '7',
            price:'450'

        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '5.00 PM - 6.30 AM',
            space: '5',
            price:'750'

        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: '7.00 PM - 8.30 AM',
            space: '9',
            price:'300'

        },
        {
            id: 5,
            name: 'Teeth Orthodontics',
            time: '8.00 PM - 9.00 AM',
            space: '14',
            price:'2500'

        },
        {
            id: 6,
            name: 'Teeth Orthodontics',
            time: '8.00 PM - 9.00 AM',
            space: '14',
            price:'500'

        },
    ]
    return (
        <div>
           <Typography sx={{mb:5,mt:5}} variant='h4'>
           {date.toDateString()}
           </Typography>

            <Container>
            <Grid container spacing={2}>
               {
                   bookings.map(booking => <Booking
                     key={booking.id} 
                     booking={booking} 
                     date={date}
                     setOpenSnackBar={setOpenSnackBar}
                     >

                     </Booking>)
               }


            </Grid>
            </Container>
            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Appoinment Booked Successfully
        </Alert>
      </Snackbar>
        </div>
    );
};

export default AvailableAppoinment;
