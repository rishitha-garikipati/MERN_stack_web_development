import { Alert, Button, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EmailSend() {
  const navigate = useNavigate();
  const [mail, setMail] = useState('');
  const [vmail, setVMail] = useState('');
  const [status, setStatus] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handleEmailChange = (e) => {
    setMail(e.target.value);
  };

  const handleVEmailChange = (e) => {
    setVMail(e.target.value);
  };

  const handleOtp = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:7000/api/emailotp', {
        email: mail,
      });
      setOtpSent(true); // Update state to indicate OTP is sent
    } catch (err) {
      console.log('error sending data', err);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:7000/api/emailotp/verify-otp', {
        otp: vmail,
      });
      console.log(res.data);
      if (res.data.status === 200) {
        navigate('/Home');
        setStatus(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack direction="column" alignItems="center" justifyContent="center" mt={10}>
      <Paper sx={{ width: 400, height: 'auto', padding: 3, backgroundColor: '#E4F1FF', marginLeft: 110 }}>
        <Typography variant="h4" align="center" color="primary" mb={2} style={{ marginBottom: '25px' }}>
          OTP Mail Authentication
        </Typography>
        <TextField
          label="Enter Mail Here"
          fullWidth
          onChange={handleEmailChange}
          style={{ marginBottom: '15px' }}
          variant="outlined"
        />
        {otpSent && (
          <TextField
            label="Enter OTP Here"
            fullWidth
            onChange={handleVEmailChange}
            style={{ marginBottom: '20px' }}
            variant="outlined"
          />
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={otpSent ? verifyOtp : handleOtp}
          fullWidth
          style={{ marginBottom: '25px' }}
        >
          {otpSent ? 'Verify OTP' : 'Send OTP'}
        </Button>
        {status && (
          <Alert severity="success" style={{ marginTop: '20px' }}>
            OTP Verified Successfully!
          </Alert>
        )}
      </Paper>
    </Stack>
  );
}

export default EmailSend;