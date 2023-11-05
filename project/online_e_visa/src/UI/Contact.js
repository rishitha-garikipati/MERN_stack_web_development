import React from 'react';
import Navbar from './Navbar';
import { Stack, Paper, Grid, Typography, Card, CardContent, Divider } from '@mui/material';

const contacts = [
  {
    role: 'Middleware Devloper',
    name: 'M Venkata Sai Vamshi',
    number: '8639243604',
    email: 'vsv8639243604@gmail.com',
  },
  {
    role: 'Frontend Devloper',
    name: 'G Rishitha',
    number: '9701670129',
    email: 'Rishitha.Garikipati@gmail.com',
  },
  {
    role: 'Backend Devloper',
    name: 'Sravan Kumar',
    number: '7029757938',
    email: 'SravanKumar@gmail.com',
  },
  {
    role: 'Under The Guidance Of',
    name: 'Dr. Satish Thatavarthi',
    position: 'Associate Professor at KL University',
  },
];

export default function Contact() {
  return (
    <div>
      <Navbar />
      <Stack direction="row" spacing={2} style={{ marginLeft: 95, marginTop: 70, marginRight: 35 }}>
        <Paper elevation={6} style={{ marginRight: 15, width: '100%', backgroundColor: '#9EDDFF', padding: '20px' }}>
          <Grid container spacing={4}>
            {contacts.map((contact, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" color="primary">
                      {contact.role}
                    </Typography>
                    <Divider />
                    <Typography variant="h6" color="textSecondary">
                      Name: {contact.name}
                    </Typography>
                    <Divider />
                    <Typography variant="h6" color="textSecondary">
                      Contact Number: {contact.number}
                    </Typography>
                    <Divider />
                    {contact.email && (
                      <>
                        <Typography variant="h6" color="textSecondary">
                          Email: {contact.email}
                        </Typography>
                        <Divider />
                      </>
                    )}
                    {contact.position && (
                      <>
                        <Typography variant="h6" color="textSecondary">
                          Position: {contact.position}
                        </Typography>
                        <Divider />
                      </>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Stack>
    </div>
  );
}