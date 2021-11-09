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