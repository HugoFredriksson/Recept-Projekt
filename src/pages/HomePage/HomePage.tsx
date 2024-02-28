import React from 'react'
import Header from '../../components/Header/Header'
import ViewAllRecipes from '../../service/api/ViewAllRecipes'
import Footer from '../../components/Footer/Footer'

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