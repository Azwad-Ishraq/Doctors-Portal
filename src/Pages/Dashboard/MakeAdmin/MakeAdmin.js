import { Alert, Button, Container, Grid, Snackbar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import adminImg from '../../../images/admin.svg'
import useAuth from '../../../hooks/useAuth'
const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success,setSuccess] = useState(false)
    const {token} = useAuth()
    const handleSubmit = (e) => {
        const user = { email }
        fetch(`http://localhost:5000/users/admin`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
               
                if(data.modifiedCount){
                    console.log(data)
                    setSuccess(true)
                }
            })
        e.preventDefault()
    }
    const handleOnBlur = (e) => {
        setEmail(e.target.value)
    }
    return (
        <Container>
            <Typography variant='h3'>
                Make Admin
            </Typography>

            <Grid sx={{ mt: 5 }} container spacing={8}>
                <Grid item xs={12} sm={12} md={6}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={12}>
                                <TextField
                                    style={{width:'100%'}}
                                    type='email'
                                    id="standard-basic"
                                    label="Enter Email"
                                    variant="standard"
                                    onBlur={handleOnBlur}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <Button
                                    type='submit'
                                    style={{
                                        background: 'linear-gradient(to right, #18d2af 0%,#18d2af 52%,#0fcfe7 100%)',
                                        boxShadow: '0px 0px',
                                        borderRadius: '0px'
                                    }}
                                    variant='contained'>
                                    <i style={{
                                        marginRight:'10px'
                                    }} class="fas fa-user-plus"></i>
                                    Make Admin
                        </Button>
                            </Grid>


                        </Grid>








                    </form>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <img style={{ width: '100%' }} src={adminImg} alt="" />
                </Grid>


            </Grid>
            <Snackbar open={success} autoHideDuration={6000} onClose={()=>setSuccess(false)}>
        <Alert onClose={()=>setSuccess(false)} severity="success" sx={{ width: '100%' }}>
          Admin Addes Sucessfully
        </Alert>
      </Snackbar>
        </Container>
    );
};

export default MakeAdmin;