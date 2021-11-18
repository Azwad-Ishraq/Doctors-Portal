import { Box, Grid, Typography } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import paymentImg from '../../../images/payment.svg'
import CheckOutForm from './CheckOutForm';
const stripePromise = loadStripe('pk_test_51JvkA5JnjrLYlDbS4R2acZopqtlpGmnlPsfBBkEFShZu840NCT6LHVEWZckpP4dAtcbYd0tJioiAsC9MEFjFGJly00ECwg2AI5')
const Payment = () => {
    const { appoinmentId } = useParams()
    const [appoinment, setAppoinment] = useState({})
    useEffect(() => {
        fetch(`https://morning-mountain-42778.herokuapp.com/appoinments/${appoinmentId}`)
            .then(res => res.json())
            .then(data => setAppoinment(data))
    }, [appoinmentId])


    return (
        <Box style={{ height: '85vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography style={{ borderBottom: '5px solid #11d0da', width: '50%' }} variant='h2'>
                Payment
           </Typography>
            <Grid container spacing={2}>


                <Grid style={{display:'flex',justifyContent:'center'}} item xs={12} md={6}>


                    {appoinment.price ? <Elements stripe={stripePromise}>
                        <CheckOutForm appoinment={appoinment}></CheckOutForm>
                    </Elements>
                        :
                        <span></span>
                    }
                </Grid>


                <Grid style={{ display: 'flex', alignItems: 'center' }} item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={paymentImg} alt="" />
                </Grid>



            </Grid>

        </Box>
    );
};

export default Payment;