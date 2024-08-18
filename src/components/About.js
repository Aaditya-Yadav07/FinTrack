import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { red } from '@mui/material/colors';

const About = () => {
  return (
    <Paper elevation={3} className='section' style={{ padding: '20px', marginTop: '20px'}}>
      <Typography variant="h4" gutterBottom>About FinTrack</Typography>
      <Typography variant="body1" paragraph>
        FinTrack is an intuitive expense tracking app designed to help you manage your finances efficiently. 
        With FinTrack, you can track your income and expenses, visualize your spending habits through charts, 
        and keep a history of all your transactions. Our goal is to provide you with a seamless way to understand 
        where your money is going and to help you budget better for your future.
      </Typography>
      <Typography variant="body1" paragraph>
        Whether you're managing personal finances or overseeing your business expenses, FinTrack offers the tools 
        you need to stay on top of your financial health. Keep track of every transaction, view real-time updates, 
        and gain insights through easy-to-read visual data.
      </Typography>
    </Paper>
  );
};

export default About;
