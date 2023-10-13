import { AppBar, Toolbar,Button } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
export default function NavBarDesign() {
  return (
   <AppBar>
    <Toolbar>
        <Button color="inherit" to='/home' LinkComponent={Link}> Home </Button>
        <Button color="inherit" to='/Client' LinkComponent={Link}>Client</Button>
        <Button color="inherit"to='/hr' LinkComponent={Link}>Hr</Button>
        <Button color="inherit" to='/contact' LinkComponent={Link}>Contactus</Button>
        <Button color="inherit" to="/viewdata" LinkComponent={Link}>viewdata</Button>
    </Toolbar>
   </AppBar>
  )
}
