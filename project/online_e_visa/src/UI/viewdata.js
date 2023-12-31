import { Button, Card, CardContent,  Grid, Paper, Stack, Typography } from '@mui/material';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function Course() {


  const [data, setData] = useState([]);
  const uri = "http://localhost:7000/api/client";

  useEffect(() => {
    // Fetch sellers data from the API
    Axios.get(uri)
      .then((res) => {
        setData(res.data);
      });
  }, []);


  

      
  

  return (
    <div> 
    <Stack direction="row" spacing={1} style={{ marginLeft: 35, marginTop: 35 }}>
      
      <Paper elevation={6} style={{ marginRight: 15 }} sx={{ flex:true, width: '95%' ,backgroundColor:'#9EDDFF' }}>
        <h1 align='center' style={{ color:''}}>Client Data</h1>
        <Grid container spacing={1} sx={{m:1}}>
        {
          data.map((item,index)=>{
            return(
              <Grid item sx={2} md={5} key={index} >
              <Card sx={{backgroundColor:'#9EDDFF'}}>
                <CardContent>
                  <Typography variant='h6' component="h5">
                      client name:{item.ClientName}
                  </Typography >
                  <Typography color="primary">
                  client number: {item.ClientNumber}
                  </Typography>
                  <Typography color="textsecondary">
                     Dob: {item.DOB}
                  </Typography>
                  <Typography color="textsecondary">
                     Email: {item.Email}
                  </Typography>
                  <Stack direction="row" spacing={1}>
                  </Stack>
                  
                </CardContent>
              </Card>
              </Grid>
            )
          })
         }
        </Grid>
      </Paper>
    </Stack>
    </div>
  )
}