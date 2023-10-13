import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Registration() {
  return (
    <Container>
      <Typography variant="h4">Registration Page</Typography>
      {/* Add your registration form here */}
      <Button variant="contained" component={Link} to="/">
        Back to Home
      </Button>
    </Container>
  );
}

export default Registration;
