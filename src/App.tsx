import React, { useState } from 'react';
import './App.css';
import ViewAllRecipes from './service/api/ViewAllRecipes';
import Header from './components/Header/Header';
import styles from "./App.module.scss";

function App() {

  return (
    <div className="App">
      
      <header>
      <Header></Header>  
      </header>
      <ViewAllRecipes ></ViewAllRecipes>
    </div>
  );
}

export default App;
