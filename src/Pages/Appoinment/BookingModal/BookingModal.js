import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({open,handleClose,booking,date,setOpenSnackBar}) => {
    const {name,time} = booking
    const {user} = useAuth()
    const initialInfo = {patientName:user.displayName,email:user.email,phone:''}
    const [bookingInfo,setBookingInfo] = useState(initialInfo)


    const handleOnblur = (e) =>{
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...bookingInfo}
      newInfo[field] = value;
     
      setBookingInfo(newInfo)
    }

    const handleSubmit = e => {
      e.preventDefault()
      const appoinment = {...bookingInfo,time,serviceName:name,date: date.toUTCString()}

      console.log(appoinment)

      fetch(`http://localhost:5000/appoinments`,{
        method:'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(appoinment)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.insertedId){
          handleClose()
          setOpenSnackBar(true)
        }
      })
    }


   
    return (
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
           <form onSubmit={handleSubmit}>
          
            <TextField
            sx={{width:'90%',m:2}}
          disabled
          id="standard-size-small"
          defaultValue={time}
          size="small"
          variant="standard"
        />
            <TextField
            sx={{width:'90%',m:2}}
          
          id="standard-size-small"
          name='patientName'
          defaultValue={user.displayName}
          size="small"
          variant="standard"
          onBlur={handleOnblur}
        />
            <TextField
            sx={{width:'90%',m:2}}
          
          id="standard-size-small"
          name='email'
          defaultValue={user.email}
          size="small"
          variant="standard"
          onBlur={handleOnblur}
        />
            <TextField
            sx={{width:'90%',m:2}}
          
          id="standard-size-small"
          defaultValue='Your Phone Number'
          name='phone'
          size="small"
          variant="standard"
          onBlur={handleOnblur}
        />
            <TextField
            sx={{width:'90%',m:2}}
          disabled
          id="standard-size-small"
          defaultValue={date.toUTCString()}
          size="small"
          variant="standard"
        />
        <Button type='submit' style={{backgroundColor: '#12d0d9',boxShadow:'0px 0px',borderRadius:'0px'}} variant='contained'>Get Appoinment</Button>
           </form>
          </Box>
        </Fade>
      </Modal>
    
    );
};

export default BookingModal;