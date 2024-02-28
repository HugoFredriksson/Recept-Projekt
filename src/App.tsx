import React, { useState } from 'react';
import './App.css';
import ViewAllRecipes from './service/api/ViewAllRecipes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <div className="App">
      <Header></Header> 
      <main>
        <div className='grid-container'>
          <ViewAllRecipes></ViewAllRecipes>
        </div>
      </main>  
    </div>
  );
}

export default App;
