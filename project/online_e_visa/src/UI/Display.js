import { Card, CardContent, Grid, Paper, Stack, Typography } from '@mui/material';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from "./Navbar"

export default function Course() {
  const [data, setData] = useState([]);
  const uri = "http://localhost:7000/api/client";

  useEffect(() => {
    Axios.get(uri)
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Stack direction="row" spacing={2} style={{ marginLeft: 95, marginTop: 70, marginRight: 35 }}>
        <Paper elevation={6} style={{ marginRight: 15, width: '100%', backgroundColor: '#9EDDFF', padding: '20px' }}>
          <Typography variant="h4" align="center" style={{ marginBottom: '20px', color: '#007BFF' }}>
            Client Data
          </Typography>
          <Grid container spacing={3}>
            {data.map((item, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card sx={{ backgroundColor: '#E4F1FF', height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" component="div" style={{ marginBottom: '10px' }}>
                      Client Name: {item.ClientName}
                    </Typography>
                    <Typography color="primary" style={{ marginBottom: '10px' }}>
                      Client Number: {item.ClientNumber}
                    </Typography>
                    <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                      DOB: {item.DOB}
                    </Typography>
                    <Typography color="textSecondary">
                      Email: {item.Email}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Stack>
    </div>
  )
}