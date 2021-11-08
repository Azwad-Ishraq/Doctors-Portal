import { Alert, Box, Grid, LinearProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import loginImg from '../../../images/login.png'
import { Button, Container, Typography } from '@mui/material';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Navigation/Navigation';

const boxStyle = {
    display:'flex',
    flexDirection:'column',
    alignItems: 'flex-start',
    justifyContent:'center',
    height:'100%',

}



const Login = () => {

    const {loginUser,loading,user,authError,signinWithGoogle} = useAuth()
   
    const [loginData,setLoginData] = useState({})
    const location = useLocation()
    const history = useHistory()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser(loginData.email,loginData.password,location,history)
    }
   
    const handleOnChange  = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field)
        const newLoginData = {...loginData}
        console.log(newLoginData)
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }
    const handleGoogleSignin = () => {
        signinWithGoogle(location,history)
    }
    return (
        <Box style={{width:'100%'}}>
            <Navigation></Navigation>
            <Container>


<Grid container spacing={2}>


    <Grid  item xs={12} sm={12} md={6}>

        <Box  style={boxStyle} sx={{ flexGrow: 1 ,m:5}}>
            { !loading && <Typography sx={{mb:5}} variant='h4'>Login</Typography>}
            { loading && <Typography sx={{mb:5}} variant='h4'>Please Wait</Typography>}


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
                 label="Your Email" variant="standard" 
                 name='email'
                 onChange={handleOnChange}
                 />



                <TextField 
                sx={{ width: '100%',mb:3 }} id="standard-basic" 
                label="Your Password"
                type='password'
                variant="standard" 
                name='password'
                onChange={handleOnChange}
                />


                <span style={{display:'flex',alignItems:'center'}}>


                <Button type='submit' style={{ backgroundColor: '#12d0d9', boxShadow: '0px 0px', borderRadius: '0px' }} variant='contained'>Login</Button>


                <i 
                onClick={handleGoogleSignin}
                style={{fontSize:'30px',marginLeft:"20px",color:'#2c3e50',cursor:'pointer'}}
                class="fab fa-google"
                >

                </i>
                </span>

            </form>}

            {loading && <LinearProgress style={{width:'100%'}} />}

            {user?.email &&  <Alert sx={{mt:5}} severity="success">Logged in Successfully</Alert>}

                        {authError && <Alert sx={{mt:5}} severity="error">{authError}</Alert>}



            <Link  style={{ textDecoration: 'none',color:'black',marginTop:"20px"}}  to='/register'>
<Button color="inherit">New User? Please Register</Button>
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

export default Login;