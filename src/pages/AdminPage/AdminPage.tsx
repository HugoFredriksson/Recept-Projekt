import React from 'react'
import Footer from '../../components/Footer/Footer'
import YourComponent from '../../components/GetUserId/GetUserId'

interface Props {}

const AddRecipePage = (props: Props) => {
    return (
        <div className="App">
      <main>
        <div className='grid-container'>
            <h2>Admin</h2>
        </div>
      <YourComponent></YourComponent>
      </main>  
      <Footer></Footer>
    </div>
    )
}

export default AddRecipePage