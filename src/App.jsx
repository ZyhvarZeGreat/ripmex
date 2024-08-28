import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Metrics from './components/Metrics'
import Usage from './components/Usage'
import Wallet from './components/Wallet'

function App() {


  return (
    <div className='w-full text-white px-4 bg-no-repeat bg-cover   bg-center  bg-[url("assets/bg.jpg")]  gap-24 flex flex-col items-center justify-center'>

      <div className='flex  w-full flex-col items-center justify-center max-w-screen-xl' >
        <Navbar />
        <Wallet />
        <Usage />
        <Metrics />
      </div>
      <Footer />
    </div>
  )
}

export default App
