import React from 'react'
import Footer from '../../components/Footer/Footer'

interface Props {}

const AddRecipePage = (props: Props) => {
    return (
        <div className="App">
      <main>
        <div className='grid-container'>
            <h2>Lägg Till Recept</h2>
        </div>
      </main>  
      <Footer></Footer>
    </div>
    )
}

export default AddRecipePage