import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Typography,Button } from '@mui/material';
import treatmentImg from '../../../images/treatment.png'

const Exeptional = () => {
    return (
        <Box sx={{mt:5,flexGrow: 1}}>

      <Grid container spacing={2}>


        <Grid item xs={12} sm={12} md={6}>
          <img style={{width:'70%',height:'100%'}} src={treatmentImg} alt=""/>
        </Grid>


        <Grid  item xs={12} sm={12} md={6}>
       <Box sx={{p:5}} style={{textAlign:'left',display:'flex',justifyContent:'center',flexDirection:'column',height:'100%',margin:'0 auto'}}>
       <Typography sx={{mb:5}} variant='h3'>
            Exeptional Dental 
            Care, on your terms
        </Typography>
        <Typography sx={{mb:5}} style={{fontWeight:'400'}} variant='h6'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sint saepe. Dignissimos, dicta laudantium iste, alias ab libero non tenetur eligendi animi, quidem eveniet. Molestiae maiores delectus rerum quam mollitia voluptatum quia ullam, amet praesentium quos dicta repellendus impedit sint consequatur voluptatem, aliquid nobis dolores aspernatur? Quasi ullam molestias, ipsum cupiditate architecto fugiat maxime animi saepe laudantium veniam beatae delectus reprehenderit sit accusantium vel consectetur debitis praesentium dicta omnis perferendis commodi odio alias! Quidem, temporibus cumque? Illum excepturi deleniti quod?
        </Typography>
        <Button variant='contained's style={{background: 'linear-gradient(to right, #18d2af 0%,#18d2af 52%,#0fcfe7 100%)',boxShadow:'0px 0px',borderRadius:'0',width:'40%'}} >Learn More</Button>
       </Box>
        
        </Grid>
        
      </Grid>

    </Box>
    );
};

export default Exeptional;