import { createTheme } from "@mui/material";
import { ThemeProvider } from '@emotion/react';
import {
  BrowserRouter ,
  Switch,
  Route
  
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider";
import Appoinment from "./Pages/Appoinment/Appoinment/Appoinment";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Navigation from "./Pages/Navigation/Navigation";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";


const theme = createTheme({
  palette:{
    primary:{
      main:'#11d0da',
      dark:'#11d0da',
      contrastText: '#ffffff'
    }
  }
})


function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
    <AuthProvider>
    <BrowserRouter>
    
    
    <Switch>
   <Route exact path='/'>
     <Home></Home>
   </Route>
   <Route  path='/home'>
     <Home></Home>
   </Route>

   <PrivateRoute  path='/appoinment'>
     <Appoinment></Appoinment>
   </PrivateRoute>


   <PrivateRoute  path='/dashboard'>
     <Dashboard></Dashboard>
   </PrivateRoute>


   <Route  path='/login'>
    <Login></Login>
   </Route>

   <Route  path='/register'>
    <Register></Register>
   </Route>
    </Switch>


    </BrowserRouter>
    </AuthProvider>
    </ThemeProvider>
    </div>
  );
}

export default App;
