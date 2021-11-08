import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AdminRoute from '../../AdminRoute/AdminRoute'
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    
    Switch,
    Route,
    
    
    useRouteMatch
  } from "react-router-dom";


import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddDoctor from '../AddDoctor/AddDoctor';

const drawerWidth = 240;
const listItemIconStyle= {
    color:'white',
    fontSize:"25px"
}
const linkStyle = {
    color:'white',
    textDecoration:'none'
}
function Dashboard(props) {
    const {logOut,admin} = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    
    let { path, url } = useRouteMatch();

    
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    

    const drawer = (
        <div  style={{height:"100%",background: 'linear-gradient(to bottom, #18d2af 0%,#18d2af 52%,#0fcfe7 100%)'}}>
            <Toolbar />
            <Divider />
            <List style={{height:'90%',position:'relative'}}>
               
                   <Link style={linkStyle} to='/home'>
                   <ListItem button >
                        <ListItemIcon>
                        <i style={listItemIconStyle} class="fas fa-home"></i>
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                   </Link>


                   <Link style={linkStyle} to={`${url}`}>
                   <ListItem button >
                        <ListItemIcon>
                        <i style={listItemIconStyle} class="fas fa-chart-line"></i>
                        </ListItemIcon>
                        <ListItemText primary='Dashboard' />
                    </ListItem>
                   </Link>

                   {admin && 
                   <Link style={linkStyle} to={`${url}/makeAdmin`}>
                   <ListItem button >
                        <ListItemIcon>
                        <i style={listItemIconStyle} class="fas fa-users-cog"></i>
                        </ListItemIcon>
                        <ListItemText primary='Make Admin' />
                    </ListItem>
                   </Link>
                   }


                   {admin && 
                   <Link style={linkStyle} to={`${url}/addDoctor`}>
                   <ListItem button >
                        <ListItemIcon>
                        <i style={listItemIconStyle} class="fas fa-user-md"></i>
                        </ListItemIcon>
                        <ListItemText primary='Add Doctor' />
                    </ListItem>
                   </Link>
                   }
                   <Link style={linkStyle} to='/home'>
                   <ListItem button >
                        <ListItemIcon>
                        <i style={listItemIconStyle} class="fas fa-users"></i>
                        </ListItemIcon>
                        <ListItemText primary='Patients' />
                    </ListItem>
                   </Link>


                  
                   <ListItem style={{color:'white',position:'absolute',bottom:'0'}} onClick={logOut} button >
                        <ListItemIcon>
                        <i style={listItemIconStyle} class="fas fa-sign-out-alt"></i>
                        </ListItemIcon>
                        <ListItemText primary='Logout' />
                    </ListItem>
                   


                
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box  sx={{ display: 'flex' }}>
            
            <CssBaseline />
            <AppBar
                
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
                style={{backgroundColor:'transparent',boxShadow:"none"}}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography sx={{color:'#12d0d9'}} variant="h6" noWrap component="div">
                        Appoinments
          </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    
                >
                    {drawer}
                </Drawer>
                <Drawer

                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Typography paragraph>
                    
                </Typography>
                <Switch>
        <Route exact path={path}>
          <DashboardHome></DashboardHome>
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/addDoctor`}>
          <AddDoctor></AddDoctor>
        </AdminRoute>
      </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
