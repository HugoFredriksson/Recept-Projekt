import React from 'react'
import Footer from '../../components/Footer/Footer'
import PostReviewFetch2 from '../../service/api/test';

interface Props {}

const AddRecipePage = (props: Props) => {
    return (
        <div className="App">
      <main>
        <div className='grid-container'>
            <h2>Admin</h2>
            <PostReviewFetch2></PostReviewFetch2>
        </div>
      </main>  
      <Footer></Footer>
    </div>
    )
}

export default AddRecipePage