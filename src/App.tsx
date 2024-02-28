import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Outlet } from 'react-router';


function App() {
  return (
    <>
    <Header />
    <Outlet />
    </>
  );
}

export default App;
