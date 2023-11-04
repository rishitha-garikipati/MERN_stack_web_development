import React from 'react';
import Navbar from './Navbar';
import { Stack } from '@mui/material';

const centerImageStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
};

export default function Home() {
  return (
    <Stack>
      <Stack>
        <Navbar />
      </Stack>
      <Stack sx={{ m: 10 }}>
        <h1 align='center' style={{ color: 'red' }}>Welcome to the online e-visa processing System portal</h1>
      </Stack>
      <Stack sx={{ m: 'auto', textAlign: 'center' }}>
        <img
          src={require('../steps.png')}
          alt="Description"
          style={{ width: '50%', height: 'auto', ...centerImageStyle }}
        />
      </Stack>
    </Stack>
  );
}
