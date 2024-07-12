import React from 'react'
import { Link } from 'react-router-dom'
import useLogOut from '../hooks/useLogOut'
import { useAuthContext } from '../hooks/useAuthContext';

function Navbar() {
  const { logOut } = useLogOut();
  const { user } = useAuthContext();

  const handleClick = () => {
    logOut();
  }

  return (
    <header className='bg-white'>
      <div className='max-w-4xl mx-auto my-0 p-5 flex items-center justify-between'>
        <Link to="/" className='text-gray-700 no-underline'>
          <h1 className='text-2xl font-bold'>WorkOut Buddy</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick} className='py-1 px-2 ml-2 rounded-xl text-base cursor-pointer text-[#1aac83] bg-white border-[2px] border-[#1aac83]'>Log Out</button>
            </div>
          )}
          {! user && (
            <div>
              <Link to="/signup" className='ml-2'>Sign Up</Link>
              <Link to="/login" className='ml-2'>Login</Link>
            </div>
          )}

        </nav>
      </div>
    </header>
  )
}

export default Navbar