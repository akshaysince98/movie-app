import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='p-6 bg-black'>

      <Link to='/home' className='mr-4 cursor-pointer p-6 text-2xl inline text-white hover:bg-blue-800'>IMDB</Link>
      <Link to='/login' className='cursor-pointer p-6 text-xl inline text-white hover:bg-blue-800'>Login</Link>
    </nav>
  )
}

export default Navbar