import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import {  NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const linkStyle = {
    color: 'black',
    textDecoration: 'none'
}
const iconStyle = {
    
    fontSize: '25px'
}
const collapseLinkStyle = {
    color: 'black',
    textDecoration: 'none',

}
const collapseIconStyle = {
    
    fontSize: '20px'
}
const activeLinkStyle = {
    
    color:'#12d0d9',
    
  }

const DrawerItems = ({setOpenDrawer}) => {
    const [open, setOpen] = React.useState(true);
    const { admin,logOut,user } = useAuth()
    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <div style={{ width: '300px', height: '100%' }}>
            
            <List
                style={{position:'relative',height:'100%',paddingBottom:'0'}}
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader style={{display:'flex', justifyContent:'space-between',alignItems:'center',marginBottom:'30px'}} component="div" id="nested-list-subheader">
                        Menu
                        <i onClick={()=> setOpenDrawer(false)} style={iconStyle} class="fas fa-times"></i>
        </ListSubheader>
                }
            >
                <NavLink activeStyle={activeLinkStyle}  to='/home' style={linkStyle}>
                    <ListItemButton style={{ textAlign: 'left' }}>
                        <ListItemIcon>
                            <i style={iconStyle} class="fas fa-home"></i>
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </NavLink>

                <NavLink activeStyle={activeLinkStyle}  to='/appoinment' style={linkStyle}>
                    <ListItemButton style={{ textAlign: 'left' }}>
                        <ListItemIcon>
                            <i style={iconStyle} class="fas fa-calendar-check"></i>
                        </ListItemIcon>
                        <ListItemText primary="Appoinments" />
                    </ListItemButton>
                </NavLink>

                {
                    user?.email ?
                    <span></span>
                    :
                    <NavLink activeStyle={activeLinkStyle}  to='/register' style={linkStyle}>
                    <ListItemButton style={{ textAlign: 'left' }}>
                        <ListItemIcon>
                        <i style={iconStyle} class="fas fa-user-plus"></i>
                        </ListItemIcon>
                        <ListItemText primary="Register" />
                    </ListItemButton>
                </NavLink>
                }

                {
                   user?.email ? 
                   <ListItemButton onClick={logOut} style={{ textAlign: 'left' ,position:'absolute',bottom:'0px',width:'100%'}}>
                   <ListItemIcon>
                   <i style={iconStyle} class="fas fa-user-alt-slash"></i>
                   </ListItemIcon>
                   <ListItemText primary="Logout" />
               </ListItemButton>
               :
               <NavLink activeStyle={activeLinkStyle}  to='/login' style={linkStyle}>
                    <ListItemButton style={{ textAlign: 'left' }}>
                        <ListItemIcon>
                        <i style={iconStyle} class="fas fa-sign-in-alt"></i>
                        </ListItemIcon>
                        <ListItemText primary="Login" />
                    </ListItemButton>
                </NavLink>
               }
             



                


        
                <ListItemButton onClick={handleOpen}>
                    <ListItemIcon>
                        <i style={iconStyle} class="fas fa-chart-line"></i>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>


               


                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>

                        <NavLink activeStyle={activeLinkStyle}  to='/dashboard' style={collapseLinkStyle} >
                            <ListItemButton style={{ textAlign: 'left', paddingLeft: '25px' }}>
                                <ListItemIcon>
                                    <i style={collapseIconStyle} class="fas fa-clock"></i>
                                </ListItemIcon>
                                <ListItemText primary="Pending Appoinments" />
                            </ListItemButton>
                        </NavLink>

                        {admin &&
                            <NavLink activeStyle={activeLinkStyle}  to='/dashboard/makeAdmin' style={collapseLinkStyle} >
                                <ListItemButton style={{ textAlign: 'left', paddingLeft: '25px' }}>
                                    <ListItemIcon>
                                    <i style={collapseIconStyle} class="fas fa-users-cog"></i>
                                    </ListItemIcon>
                                    <ListItemText primary="Make Admin" />
                                </ListItemButton>
                            </NavLink>
                        }




                    </List>
                </Collapse>
            </List>
        </div>
    );
};

export default DrawerItems;