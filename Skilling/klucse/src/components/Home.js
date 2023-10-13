import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <Typography variant="h2">KLU-CSE(H) Website</Typography>
      <Button variant="contained" component={Link} to="/login">
        Login
      </Button>
      <Button variant="contained" component={Link} to="/registration">
        Registration
      </Button>
    </Container>
  );
}

export default Home;
