import React, { useState } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { Pie, Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; 
import Footer from './footer';
import TransactionForm from './TransactionForm';
import HistoryList from './HistoryList';
import About from './About';

function Main() {
  const [history, setHistory] = useState([]);
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const handleAddTransaction = (type, source, amount) => {
    const transaction = {
      type,
      source,
      amount: parseFloat(amount),
      date: new Date().toLocaleDateString(), 
    };
    setHistory([...history, transaction]);

    if (type === 'income') {
      setIncome([...income, transaction]);
    } else {
      setExpenses([...expenses, transaction]);
    }
  };

  const calculateTotal = (transactions) =>
    transactions.reduce((total, item) => total + item.amount, 0);

  const chartData = (data, label) => ({
    labels: data.map((item) => item.source),
    datasets: [
      {
        label,
        data: data.map((item) => item.amount),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  });

  return (
    <Box p={3}>
      <Grid container spacing={3}>
        {/* Total Income and Expenses */}
        <Grid item xs={12}>
          <Paper elevation={3} className="section">
            <Typography variant="h6">Total Income and Expenses</Typography>
            <Typography variant="body1">Total Income: ${calculateTotal(income)}</Typography>
            <Typography variant="body1">Total Expenses: ${calculateTotal(expenses)}</Typography>
          </Paper>
        </Grid>

        {/* First Part - Income Chart */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} className="section">
            <Typography variant="h6">Income Chart</Typography>
            <Pie data={chartData(income, 'Income')} />
          </Paper>
        </Grid>

        {/* Second Part - Input Form */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} className="section">
            <Typography variant="h6">Add Transaction</Typography>
            <TransactionForm onAddTransaction={handleAddTransaction} />
            <HistoryList history={history} />
          </Paper>
        </Grid>

        {/* Third Part - Expenses Chart */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} className="section">
            <Typography variant="h6">Expenses Chart</Typography>
            <Doughnut data={chartData(expenses, 'Expenses')} />
          </Paper>
        </Grid>
      </Grid>

      <About />  
      <Footer />
    </Box>
  );
}

export default Main;
