import React from 'react'
import Footer from '../../components/Footer/Footer'

interface Props {}

const LogInPage = (props: Props) => {
    return (
        <div className="App">
      <main>
        <div className='grid-container'>
            <h2>Logga In</h2>
        </div>
      </main>  
      <Footer></Footer>
    </div>
    )
}

export default LogInPage