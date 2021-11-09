import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia, Grid } from '@mui/material';

const SingleService = (props) => {
    const {name,description,img} = props.service
    return (
        <Grid item xs={12} sm={12} md={4}>
             <Card sx={{ minWidth: 275,border: 0,boxShadow: 0 }}>

             
      <CardMedia
        component="img"
        style={{width:'auto',height:'80px',margin:'0 auto'}}
        image={img}
        alt="green iguana"
      />
            



      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          
        </Typography>
        <Typography variant="h5" component="div">
        {name}
        </Typography>
        
        <Typography style={{textAlign:'left'}} color='text.secondary' variant="body2">
         {description}
         
         
        </Typography>
      </CardContent>
      
    </Card>
        </Grid>
    );
};

export default SingleService;