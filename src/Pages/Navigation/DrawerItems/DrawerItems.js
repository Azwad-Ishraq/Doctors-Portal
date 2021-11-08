import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { Link } from 'react-router-dom';
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

const DrawerItems = ({setOpenDrawer}) => {
    const [open, setOpen] = React.useState(true);
    const { admin } = useAuth()
    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <div style={{ width: '300px', height: '100%' }}>
            <List
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
                <Link to='/home' style={linkStyle}>
                    <ListItemButton style={{ textAlign: 'left' }}>
                        <ListItemIcon>
                            <i style={iconStyle} class="fas fa-home"></i>
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </Link>

                <Link to='/appoinment' style={linkStyle}>
                    <ListItemButton style={{ textAlign: 'left' }}>
                        <ListItemIcon>
                            <i style={iconStyle} class="fas fa-calendar-check"></i>
                        </ListItemIcon>
                        <ListItemText primary="Appoinments" />
                    </ListItemButton>
                </Link>


                <ListItemButton onClick={handleOpen}>
                    <ListItemIcon>
                        <i style={iconStyle} class="fas fa-chart-line"></i>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>



                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>

                        <Link to='/dashboard' style={collapseLinkStyle} >
                            <ListItemButton style={{ textAlign: 'left', paddingLeft: '25px' }}>
                                <ListItemIcon>
                                    <i style={collapseIconStyle} class="fas fa-clock"></i>
                                </ListItemIcon>
                                <ListItemText primary="Pending Appoinments" />
                            </ListItemButton>
                        </Link>

                        {admin &&
                            <Link to='/dashboard/makeAdmin' style={collapseLinkStyle} >
                                <ListItemButton style={{ textAlign: 'left', paddingLeft: '25px' }}>
                                    <ListItemIcon>
                                    <i style={collapseIconStyle} class="fas fa-users-cog"></i>
                                    </ListItemIcon>
                                    <ListItemText primary="Make Admin" />
                                </ListItemButton>
                            </Link>
                        }




                    </List>
                </Collapse>
            </List>
        </div>
    );
};

export default DrawerItems;