import React, { useState } from 'react';
import { TextField, Button, Typography, Alert, Avatar, Card, Paper, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(true);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login/token", {
        username,
        password,
      });
      const token = response.data.token;
      console.log(token);
      localStorage.setItem("jwtToken", token);
      setStatus(true); // Set status to indicate successful login
      setShowAlert(true);
      navigate('/dashboard'); // Navigate to Dashboard
    } catch (error) {
      setShowAlert(false); // Show the error alert
      alert("Error logging in. Please try again.");
    }
  }

  return (
    <div>
      <Card
        elevation={12}
        style={{ marginLeft: '1000px', marginTop: '1rem' }}
        sx={{
          p: 3,
          backgroundColor: '#EAD7BB',
          width: '30%',
          height: '350px flex',
        }}
      >
        <h1 align='center'>
          ONLINE E VISA PORTAL
        </h1>
        <Paper elevation={10} sx={{ width: '97%', height: '350px flex', backgroundColor: '#E4F1FF' }}>
          <Stack spacing={5} sx={{ p: 2 }}>
            <Avatar
              style={{
                backgroundImage: 'url("/src/avatar.jpeg")',
                marginLeft: '175px',
                marginTop: '55px',
                height: '75px',
                width: '75px',
              }}
              alt="vemy Sharp" src="/static/images/avatar/1.jpg"
            >
            </Avatar>
            <TextField
              label="Username"
              required
              fullWidth
              color="primary"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <TextField
              type="password"
              label="Password"
              required
              fullwidth
              color="primary"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button
              endIcon={<LoginIcon />}
              type="submit"
              variant='contained'
              onClick={handleSubmit}
              sx={{ backgroundColor: 'green', color: 'white' }}
            >
              Login
            </Button>
            {status && (
              <Alert severity="success" style={{ marginTop: '35px' }}>
                OTP Verified Successfully!
              </Alert>
            )}

            <Typography variant="body2">
              Don't have an account? <a href="/register">Register here</a>
            </Typography>

            <Typography variant="body2">
              If you are an admin? <a href="/adminlogin">Admin Login</a>
            </Typography>

            <Typography variant="body2">
              Forgot your password? <a href="/forgetpassword">Click Here</a>
            </Typography>

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
    </div>
  );
}

export default Login;
