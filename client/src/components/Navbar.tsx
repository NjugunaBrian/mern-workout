import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className='bg-white'>
        <div className='max-w-4xl mx-auto my-0 p-5 flex items-center justify-between'>
            <Link to="/" className='text-gray-700 no-underline'>
                <h1 className='text-2xl font-bold'>WorkOut Buddy</h1>
            </Link>
            <nav className='flex items-center'>
              <div>
                <Link to="/signup" className='ml-2'>Sign Up</Link>
                <Link to="/login" className='ml-2'>Login</Link>
              </div>
            </nav>
        </div>
    </header>
  )
}

export default Navbar