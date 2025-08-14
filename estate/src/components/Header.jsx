import React from 'react'
import Navbar from '../components/Navbar'

const Header = () => {
  return (
    <div className="bg-[url('headerbg_img.png')] bg-cover bg-center h-screen w-full">
      <Navbar/>
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fits your dreams</h2>
        <div className='space-x-6 mt-16'>
            <a href="#Projects" className='border border-white px-8 py-3 rounded'>projects</a>
            <a href= "#Contactus" className='bg-blue-500 border-white px-8 py-3 rounded'>contact us</a>
        </div>
      </div>
    </div>
  )
}

export default Header
