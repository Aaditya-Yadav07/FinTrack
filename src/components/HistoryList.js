import React from "react";
import { Box, Typography } from '@mui/material';

function HistoryList({ history }) {
  return (
    <Box mt={3}>
      <Typography variant="h6">History</Typography>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            {item.type === 'income' ? '💰' : '🛒'} {item.source}: ${item.amount} 
            <br />
            <span style={{ fontSize: '12px', color: 'gray' }}>Date: {item.date}</span>
          </li>
        ))}
      </ul>
    </Box>
  );
}


  export default HistoryList;