import React from 'react'
import Footer from '../../components/Footer/Footer'
import LogIn from '../../components/LogIn/LogIn'
import CreateUserComponent from '../../components/CreateUser/CreateUser'
import LogoutComponent from '../../components/LogOut/LogOut'

interface Props {}

const LogInPage = (props: Props) => {
    return (
        <div className="App">
      <main>
        <h2>Logga In</h2>
        <div className='grid-container'>
            <LogIn></LogIn>
        <h2>Har du inte ett konto?</h2>
        <CreateUserComponent></CreateUserComponent>
        <LogoutComponent></LogoutComponent>´
        </div>
      </main>  
      <Footer></Footer>
    </div>
    )
}

export default LogInPage;