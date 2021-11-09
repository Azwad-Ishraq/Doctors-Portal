import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const Appoinments = ({date}) => {
    const {user,token} = useAuth()
    const [appoinments,setAppoinments] = useState([])
    console.log(date)

    useEffect(()=>{
        fetch(`https://morning-mountain-42778.herokuapp.com/appoinments?email=${user.email}&date=${date}`,{
          headers:{
            'authorization': `Bearer ${token}`
          }
        })
        .then(res=>res.json())
        .then(data => {
           setAppoinments(data)
        })
    },[date,user.email,token])
    return (
        <TableContainer sx={{p:5}} style={{boxShadow:'5px 5px 10px gray'}} component={Paper}>
           <Typography style={{textAlign:'left',color:'#16d1bd'}} variant='h5'>
            Appoinments
          </Typography>
        <Table sx={{  }} aria-label="simple table">
         
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Schedule</TableCell>
              <TableCell align="right">Date</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {appoinments.map((row) => (
              <TableRow
                key={row.patientName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.patientName}
                </TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default Appoinments;