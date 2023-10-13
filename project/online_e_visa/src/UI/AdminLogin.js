// UI/Login.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Avatar, Button, Card, Paper, Stack ,Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(true);

  function onHandleClick() {
    if (username !== '' && password !== '') {
      navigate('/Admin');
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
        <Stack spacing={5} sx={{p:2}}>
          <Avatar
            style={{
              marginLeft: '175px',
              marginTop: '55px',
              height: '75px',
              width: '75px',
            }}
          ></Avatar>
          <TextField
            label="Username" required fullWidth
            color="primary"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            type="password"
            label="Password"  required fullwidth
            color="primary"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button   endIcon={<LoginIcon />} type="submit"  variant='contained' onClick={onHandleClick}>
            Login
          </Button>
  


          {!showAlert && (
            <Alert
              severity="error"
              color="error"
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