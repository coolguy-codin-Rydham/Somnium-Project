import React from 'react'
import Logo from '../assets/Logo.webp'

const Navbar = () => {
    return (
      <nav className="bg-gray-800 flex justify-between items-center p-5">
        <div className="flex justify-center item-center gap-10">  
          <a href="/courses" className='text-xl'>Courses</a>
          <a href="/courseslist" className='text-xl'>My Courses</a>
        </div>
        <a href='/' className="text-xl text-white">
          <img src={Logo} alt="LOGO" className='h-20 w-20' />
        </a>
        <div>
          <a href="/" className="mr-10 text-xl">Home</a>
          <a href="/about" className='mr-10 text-xl'>About</a> 
          <a href="/login" className="mr-10 text-xl">Login</a>
          <a href="/Signup" className="mr-10 text-xl">Signup</a>
        </div>
      </nav>
    );
  };

export default Navbar



