import { PhotoCamera } from '@mui/icons-material';
import { Box, Button,  IconButton,  TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import './AddDoctor.css'



const Input = styled('input')({
    display: 'none',
  });


const AddDoctor = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        if (!image) {
            return
        }

        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('image', image)
        fetch('https://morning-mountain-42778.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <Box>
            <Typography variant='h2'>
                Add A Doctor
            </Typography>

            <form style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:'50px'}} onSubmit={handleSubmit}>
                <TextField style={{width:'60%'}} onChange={(e) => setName(e.target.value)} id="filled-basic" label="Name" variant="filled" />
                <br />
                <TextField style={{width:'60%'}} onChange={(e) => setEmail(e.target.value)} id="filled-basic" label="Email" variant="filled" />
                <br />
                <label htmlFor="contained-button-file">

                <Input className='input'
                    accept="image/*"
                    onChange={e => setImage(e.target.files[0])}
                    type="file" id="contained-button-file" />
                     <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
          
        </IconButton>

                    </label>
                <Button style={{borderRadius:'0px',boxShadow:'0px 0px'}} sx={{mt:3}} variant="contained" type='submit'>
                    Add Doctor 
  </Button>
            </form>

            {/* <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label> */}
        </Box>
    );
};

export default AddDoctor;