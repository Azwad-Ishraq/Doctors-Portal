import { Alert, Box, Grid, LinearProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import loginImg from '../../../images/login.png'
import { Button, Container, Typography } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Navigation/Navigation';

const boxStyle = {
    display:'flex',
    flexDirection:'column',
    alignItems: 'flex-start',
    justifyContent:'center',
    height:'100%',

}
const Register = () => {
    const {registerUser,loading,user,authError} = useAuth()
   
    const [loginData,setLoginData] = useState({})

    const history = useHistory()
    


    const handleSubmit = (e) => {
        e.preventDefault()
        registerUser(loginData.email, loginData.password,loginData.name, history)
    }
    const handleOnBlur  = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field)
        const newLoginData = {...loginData}
        console.log(newLoginData)
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }
    return (
        <Box style={{width:'100%'}}>
            <Navigation></Navigation>

            <Container>

            <Grid container spacing={2}>


                <Grid  item xs={12} sm={12} md={6}>

                    <Box  style={boxStyle} sx={{ flexGrow: 1 ,m:5}}>
                        <Typography sx={{mb:5}} variant='h4'>Register</Typography>


                       { !loading && <form style={
                            {
                                display:'flex',
                                flexDirection:'column',
                                alignItems:'flex-start',
                                justifyContent:'center',
                                width:'100%'
                            }
                        }

                         onSubmit={handleSubmit}

                         >
                            <TextField
                             sx={{ width: '100%',mb:3 }} id="standard-basic" 
                             label="Your Name" variant="standard" 
                             name='name'
                             onBlur={handleOnBlur}
                             />
                            <TextField
                             sx={{ width: '100%',mb:3 }} id="standard-basic" 
                             label="Your Email" variant="standard" 
                             name='email'
                             onBlur={handleOnBlur}
                             />



                            <TextField 
                            sx={{ width: '100%',mb:3 }} id="standard-basic" 
                            label="Your Password"
                            type='password'
                            variant="standard" 
                            name='password'
                            onBlur={handleOnBlur}
                            />


                            <Button type='submit' style={{ backgroundColor: '#12d0d9', boxShadow: '0px 0px', borderRadius: '0px' }} variant='contained'>Register</Button>

                        </form>}

                        {loading && <LinearProgress style={{width:'100%'}} />}

                        {user?.email &&  <Alert sx={{mt:5}} severity="success">Your Account Has been Created Successfully</Alert>}

                        {authError && <Alert sx={{mt:5}} severity="error">{authError}</Alert>}
                        



                        <Link  style={{ textDecoration: 'none',color:'black',marginTop:"20px"}}  to='/login'>

          <Button color="inherit">Already Registered? Please Login</Button>

          </Link>
                    </Box>


                </Grid>


                <Grid  item xs={12} sm={12} md={6}>

                    <img style={{ width: '100%', }} src={loginImg} alt="" />
                </Grid>

            </Grid>
        </Container>
        </Box>
    );
};

export default Register;