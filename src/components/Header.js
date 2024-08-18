import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import logo from './logo.png';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <img src={logo} alt="FinTrack Logo" style={{ height: '60px', marginRight: '15px' }} />
          <Typography variant="h6" component="div">
            FinTrack
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
