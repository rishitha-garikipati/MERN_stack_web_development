// UI/Register.js
import React, { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Avatar, Button, Card, Paper, Stack,Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
import HowToRegIcon from '@mui/icons-material/HowToReg';


export default function Register() {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState([]);
  const [Name, setName] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [age, setAge] = useState('');
  const [mobile,setMobile] = useState('');
  const [email,setEmail]=useState('');
  const [showAlert, setShowAlert] = useState(true);

  const onHandleClick = async (event) => {
    event.preventDefault();
    try {
      await Axios.post('https://cute-plum-scarab-wrap.cyclic.app/api/register', {
        Name:Name,
        Email:email,
        Password:newpassword,
        Mobileno:mobile,
        Age:age
      });
      setStatus(true);
      toast.success('Registered successfully');
    } catch (error) {
      console.log('error sending data', error);
      toast.error('Invalid registraion');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('https://cute-plum-scarab-wrap.cyclic.app/api/register');
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);


  return (
    <div>
      <ToastContainer/>
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
      <Paper elevation={12} sx={{ width: '97%', height: '450px flex' ,backgroundColor:'#E4F1FF'}}>
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
          <Button variant="contained" onClick={onHandleClick} sx={{backgroundColor: 'green',color:'white'}}  endIcon={<HowToRegIcon />}>
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
    </div>
  );
}