import { Alert, Box, Button, CircularProgress, Container, Snackbar, Typography } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth'
const CheckOutForm = ({appoinment}) => {
  const [open, setOpen] = React.useState(false);
  
  
    const {price,patientName,_id} = appoinment
    
    const {user} = useAuth()
    const stripe = useStripe()
    const [success,setSuccess] = useState('')
    const [processing,setProcessing] = useState(false)
    const elements = useElements()
    const [error,setError] = useState('')
    const [clientSecret,setClientSecrete] = useState('')
    useEffect(()=>{
      fetch(`https://morning-mountain-42778.herokuapp.com/create-payment-intent`,{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify({price})

      })
      .then(res => res.json())
      .then(data => setClientSecrete(data.clientSecret))
    },[price])
    const handleSubmit = async (e) =>{
        e.preventDefault()
        if (!stripe || !elements) {
            
            return;
          }
          const card = elements.getElement(CardElement)
          if(card == null){
              return
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          if(error){
              setError(error.message)
          }else{
              setError('')
              console.log(paymentMethod)
          }
          const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email: user.email
                },
              },
            },
          );

          if(intentError){
            setError(intentError.message)
          }else{
            setError('')
            console.log(paymentIntent)
            setSuccess('Your Payment Processed Successfully')
            setProcessing(false)

            const payment ={
              amount: paymentIntent.amount,
              transaction: paymentIntent.client_secret.slice('_secret')[0],
              created: paymentIntent.created,
              last4 : paymentMethod.card.last4
            }
            const url = `https://morning-mountain-42778.herokuapp.com/appoinments/${_id}`
            fetch(url,{
              method:'PUT',
              headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => console.log(data))
          }
    }
    // backgroundColor:'rgba(189, 195, 199,.5)'
    return (
        <Box style={{width:'70%'}}>
           <Typography variant='h4'>
                Payment Details
              </Typography>
           <form style={{height:'70vh',display:'flex',flexDirection:'column',justifyContent:'center'}} onSubmit={handleSubmit}>
             
      <CardElement
      style={{width:'100%'}}
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {
        processing ? <CircularProgress></CircularProgress>
        :
        <Button style={{boxShadow:'0px 0px',borderRadius:'0'}} variant='contained' type="submit" disabled={!stripe}>
        Pay
      </Button>
      }
     
    </form>
    {!success && <Snackbar open={open} autoHideDuration={6000} onClose={()=>setOpen(false)}>
    <Alert severity="error">This is an error message!</Alert>
</Snackbar>}
    {success && <p>{success}</p>}
        </Box>
           
    
        
    );
};

export default CheckOutForm;