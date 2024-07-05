import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className='bg-white'>
        <div className='max-w-3xl mx-auto my-0 p-5 flex items-center justify-between'>
            <Link to="/" className='text-gray-700 no-underline'>
                <h1 className='text-2xl font-bold'>WorkOut Buddy</h1>
            </Link>
        </div>
    </header>
  )
}

export default Navbar