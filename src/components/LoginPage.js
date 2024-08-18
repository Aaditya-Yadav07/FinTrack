import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import logo from './logo.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      navigate('/dashboard');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <Box className="login-container">
      <Paper elevation={3} className="login-paper">
        <img src={logo} alt="FinTrack Logo" style={{ height: '80px', marginBottom: '20px' }} />
        <Typography variant="h4" gutterBottom>Login</Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          style={{ marginTop: '20px' }}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginPage;
