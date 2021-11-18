import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import people3 from '../../../images/people-3.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';






const Testimonial = () => {
    const reviews = [
        {
            userName: 'Winson Herry',
            address: 'California',
            img: people1,
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic unde impedit rerum itaque porro, amet molestias adipisci eveniet, aliquid nisi mollitia laboriosam cum beatae veritatis? Voluptate, incidunt dignissimos praesentium repudiandae a distinctio itaque ducimus maxime, vero dolore quasi non exercitationem provident temporibus, sint commodi earum eveniet voluptatum. Quisquam, dicta!'
        },
        {
            userName: 'Winson Herry',
            address: 'California',
            img: people2,
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic unde impedit rerum itaque porro, amet molestias adipisci eveniet, aliquid nisi mollitia laboriosam cum beatae veritatis? Voluptate, incidunt dignissimos praesentium repudiandae a distinctio itaque ducimus maxime, vero dolore quasi non exercitationem provident temporibus, sint commodi earum eveniet voluptatum. Quisquam, dicta!'
        },
        {
            userName: 'Winson Herry',
            address: 'California',
            img: people3,
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic unde impedit rerum itaque porro, amet molestias adipisci eveniet, aliquid nisi mollitia laboriosam cum beatae veritatis? Voluptate, incidunt dignissimos praesentium repudiandae a distinctio itaque ducimus maxime, vero dolore quasi non exercitationem provident temporibus, sint commodi earum eveniet voluptatum. Quisquam, dicta!'
        },
    ]
    return (
      <Container sx={{mt:5,mb:5}}>
          <Typography style={{textAlign:'left',color:'#12d0d9'}} sx={{mb:5}} variant='h5'>
            TESTIMONIAL
          </Typography>
          <Typography style={{textAlign:'left'}} sx={{mb:5}} variant='h3'>
            What's Our Patients Says
          </Typography>

          <Grid  container spacing={2}>
            {
                reviews.map(item =>  <Grid item xs={12} md={4}>


<Card sx={{ minWidth: 275 }}>
      <CardContent data-aos='zoom-in-up' sx={{p:2}}>
        <Typography sx={{ fontSize: 14 ,mb:5}} color="text.secondary" gutterBottom>
          {item.des}
        </Typography>
      
      
        <Box style={{display:'flex',alignItems:'center'}}>
            <img  style={{height:'50px',marginRight:'20px'}} src={item.img} alt=""/>
          <Typography sx={{color:'#12d0d9'}} style={{textAlign:'left'}} variant='h6'>
          {item.userName}
          <br/>
          <Typography sx={{color:'gray',fontWeight:400}} variant='p'>
          {item.address}
          </Typography>
          </Typography>
         
        </Box>
      </CardContent>
     
    </Card>



                    </Grid>)
            }
       
        
      </Grid>
      </Container>
    );
};

export default Testimonial;