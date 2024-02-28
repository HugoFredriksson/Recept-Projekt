import React from 'react'
import Footer from '../../components/Footer/Footer'

interface Props {}

const ProfilePage = (props: Props) => {
    return (
        <div className="App">
      <main>
        <div className='grid-container'>
            <h2>Profil</h2>
        </div>
      </main>  
      <Footer></Footer>
    </div>
    )
}

export default ProfilePage