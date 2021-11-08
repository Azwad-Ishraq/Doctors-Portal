import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Navigation.css'
import {  NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { Drawer, SwipeableDrawer } from '@mui/material';
import DrawerItems from './DrawerItems/DrawerItems';
const Navigation = () => {
  const [openDrawer,setOpenDrawer] = useState(false)
  const {user,logOut} = useAuth()
  const linkStyle = {
    textDecoration: 'none',
    marginLeft: '10px',
   
    color:'black'
  }
  const activeLinkStyle = {
    backgroundColor: '#12d0d9',
    color:'white',
    borderRadius: '3px'
  }
 
    return (
        <Box style={{width:'100%'}} sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor: 'transparent',color:'black',boxShadow:'0px 0px'}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=> setOpenDrawer(true)}

            

          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
        
        
          
          <NavLink activeStyle={activeLinkStyle} style={linkStyle}  to='/home'>
          <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink activeStyle={activeLinkStyle} style={linkStyle}  to='/appoinment'>
          <Button color="inherit">Appoinment</Button>
          </NavLink>

            {
              user?.email ? 
              
          <Button onClick={logOut} color="inherit">Logout</Button>
          
          :
          <NavLink activeStyle={activeLinkStyle} style={linkStyle}  to='/login'>
          <Button color="inherit">Login</Button>
          </NavLink>
            }


         {
           user.email? <span></span>
           :
           <NavLink activeStyle={activeLinkStyle} style={linkStyle}  to='/register'>
           <Button color="inherit">Register</Button>
           </NavLink>
         }
         {
           user.email?
            <NavLink activeStyle={activeLinkStyle} style={linkStyle}  to='/dashboard'>
           <Button color="inherit">Dashboard</Button>
           </NavLink>
           :
           <span></span>
           
         }
         


          
         
        </Toolbar>
      </AppBar>
     <Box>
       <SwipeableDrawer
       
       anchor='left'
       open={openDrawer}
       onClose={()=> setOpenDrawer(false)}
       onOpen={()=> setOpenDrawer(true)}
       >
         <DrawerItems setOpenDrawer={setOpenDrawer}></DrawerItems>
       </SwipeableDrawer>
     </Box>
    </Box>
    );
};

export default Navigation;