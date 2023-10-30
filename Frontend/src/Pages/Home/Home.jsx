import React from 'react'
import Hero from './components/Hero'
import Intro from './components/Intro'
function Home() {
  return (
    <div id='home' className=' px-5 pb-10 bg-slate-900'>
      <div className='min-h-screen'>
        <Hero/>
      </div>
      <Intro/>
    </div>
  )
}

export default Home