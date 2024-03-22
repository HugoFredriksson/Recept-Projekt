import React from 'react'
import Footer from '../../components/Footer/Footer'
import { defer } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


interface Props {}

const AddRecipePage = (props: Props) => {
    return (
      <div className="App">
        <main>
          <div className='grid-container'>
            <h2>Admin</h2>

          </div>
        </main>  
      <Footer></Footer>
    </div>
    )
}

export default AddRecipePage