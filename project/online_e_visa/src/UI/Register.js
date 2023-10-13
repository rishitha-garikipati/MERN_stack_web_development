// UI/Register.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Avatar, Button, Card, Paper, Stack,Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Register() {
  const navigate = useNavigate();
  const [Name, setName] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [age, setAge] = useState('');
  const [mobile,setMobile] = useState('');
  const [email,setEmail]=useState('');
  const [showAlert, setShowAlert] = useState(true);

  function onHandleClick() {
    if (Name === 'vamshi' || newpassword === 'vamshi@130' || age === '19' || mobile === '8639243604' || email === 'venkatasaivamshi23@gmail.com') {
      setShowAlert(true);   
      navigate('/Login')
    } else {
      setShowAlert(false);   

    }
  }

  return (
    <Card
      elevation={12}
      style={{ marginLeft: '1000px', marginTop: '1rem' }}
      sx={{
        p: 3,
        backgroundColor: '#9EDDFF',
        width: '30%',
        height: '450px flex',
      }}
    >
      <Paper elevation={12} sx={{ width: '97%', height: '450px flex' }}>
        <Stack spacing={3} sx={{p:2}}>
          <Avatar 
            style={{
              marginLeft: '175px',
              marginTop: '55px',
              height: '75px',
              width: '75px',
            }}
          ></Avatar>
          <TextField
            label="Name" required fullWidth
            color="primary"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            label="Email" required fullWidth
            color="primary"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            type="password"
            label="Enter Password" required fullWidth
            color="primary"
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
          <TextField
           type="mobile Number"
           label="Mobile Number" required fullWidth
           color="primary"
           onChange={(e) => {
            setMobile(e.target.value);
           }}
          />
          <TextField
            label="Age" required fullWidth
            color="primary"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <Button variant="contained" onClick={onHandleClick}>
            Register
          </Button>
          <Typography variant="body2">
            Already an User? <a href="/">Login here</a>
          </Typography>
          {!showAlert && (
            <Alert
              severity="error"
              color="error" // Use "error" for the color
              onClose={() => setShowAlert(true)}
            >
              Invalid username or password
            </Alert>
          )}
        </Stack>
      </Paper>
    </Card>
  );
}
