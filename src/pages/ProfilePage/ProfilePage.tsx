import React from 'react'
import Footer from '../../components/Footer/Footer'
import UserInfo from '../../components/GetUserInfo/GetUserInfo'

interface Props {}

const ProfilePage = (props: Props) => {
    return (
        <div className="Profile">
      <main>
        <div className='grid-container'>
            <h2>Profil</h2>
            <UserInfo></UserInfo>
        </div>
      </main>  
      <Footer></Footer>
    </div>
    )
}

export default ProfilePage