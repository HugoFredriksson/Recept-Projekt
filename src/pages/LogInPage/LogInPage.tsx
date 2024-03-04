import React from 'react'
import Footer from '../../components/Footer/Footer'
import LogIn from '../../components/LogIn/LogIn'

interface Props {}

const LogInPage = (props: Props) => {
    return (
        <div className="App">
      <main>
        <h2>Logga In</h2>
        <div className='grid-container'>
            <LogIn></LogIn>
        </div>
      </main>  
      <Footer></Footer>
    </div>
    )
}

export default LogInPage;