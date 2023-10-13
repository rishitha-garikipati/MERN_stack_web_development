import React from 'react'


import Navbar from './Navbar'
import { Stack } from '@mui/material'

export default function Home() {
  return (
  <Stack>
      <Stack><Navbar/></Stack>
      <Stack sx={{m:10}}><h1 align='center' style={{ color:'red' }}>welcome to online e visa processing System portal</h1></Stack>
      </Stack>
    
  )
}

