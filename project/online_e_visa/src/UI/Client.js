import { Button, Card, Paper, Stack, TextField } from '@mui/material';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Course() {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState([]);
  const [clientname, setClientName] = useState('');
  const [clientnumber, setClientNumber] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');

  const handlename = (e) => {
    setClientName(e.target.value);
  };
  const handlenumber = (e) => {
    setClientNumber(e.target.value);
  };
  const handledob = (e) => {
    setDob(e.target.value);
  };
  const handlemail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await Axios.post('http://localhost:7000/api/client', {
        ClientName: clientname,
        ClientNumber: clientnumber,
        DOB: dob,
        Email: email
      });
      setStatus(true);
      toast.success('Data posted successfully');
    } catch (error) {
      console.log('error sending data', error);
      toast.error('Error sending data');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('http://localhost:7000/api/client');
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <ToastContainer />

      <Stack direction="row" spacing={1} style={{ marginLeft: 500, marginTop: 40 }}>
        <Stack direction="column">
          <Paper sx={{ m: 2, backgroundColor: '#9EDDFF' }}>
            <Card sx={{ m: 2, backgroundColor: '#9EDDFF' }}>
              <Stack direction="column" spacing={3} sx={{ m: 3 }}>
                <TextField label="Client name" onChange={handlename} />
                <TextField label="Client number" onChange={handlenumber} />
                <TextField label="Dob" onChange={handledob} />
                <TextField label="email" onChange={handlemail} />
                <Button variant="contained" onClick={handleSubmit}>
                  Post
                </Button>
              </Stack>
            </Card>
          </Paper>
        </Stack>
      </Stack>
    </div>
  );
}
