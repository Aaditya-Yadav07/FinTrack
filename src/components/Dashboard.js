import React from 'react';
import { Navigate } from 'react-router-dom';
import Main from './main';
import Header from './Header';

const Dashboard = () => {
  const isLoggedIn = true;  

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return(
     <>
    <Header />
    <Main />
    </>
  );
};

export default Dashboard;
