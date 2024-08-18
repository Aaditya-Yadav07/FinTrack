import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';


function Footer() {
    const [dateTime, setDateTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setDateTime(new Date());
      }, 1000); 
      return () => clearInterval(interval);
    }, []);
  
    return (
      <footer style={footerStyle}>
        <Typography variant="body1">&copy; 2024 FinTrack. All rights reserved.</Typography>
        <Typography variant="body1">Contact us: adityadav0727@gmail.com</Typography>
        <Typography variant="body1">Current Date: {dateTime.toLocaleDateString()}</Typography>
        <Typography variant="body1">Current Time: {dateTime.toLocaleTimeString()}</Typography>
      </footer>
    );
  }

  const footerStyle = {
    textAlign: 'center',
    padding: '20px',
    marginTop: '30px',
    backgroundColor: 'gray',
    color: '#333',
  };
  
  
  export default Footer;