import React, { useState } from 'react';
import { Box } from '@mui/material';

function TransactionForm({ onAddTransaction }) {
  const [type, setType] = useState('income');
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (source && amount) {
      onAddTransaction(type, source, amount);
      setSource('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={2}>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </Box>
      <Box mb={2}>
        <input
          type="text"
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />
      </Box>
      <Box mb={2}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </Box>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;