import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <div className='min-h-screen flex justify-center items-center'>
            this is home page
        </div>
        <Footer/>
    </div>
  )
}

export default Home
