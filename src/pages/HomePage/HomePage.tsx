import React from 'react'
import Header from '../../components/Header/Header'
import ViewAllRecipes from '../../service/api/ViewAllRecipes'
import Footer from '../../components/Footer/Footer'
import { defer } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

interface Props {}

const HomePage = (props: Props) => {
    return (
    <div className="App">
      <main>
        <div className='grid-container'>
          <ViewAllRecipes></ViewAllRecipes>
        </div>
      </main>  
      <Footer></Footer>
    </div>
    )
}

export default HomePage