import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { useAuthContext } from './hooks/useAuthContext';


function App() {

  const { user } = useAuthContext();

  return (
    <div className='min-h-screen bg-[#CDCDCD]'>
      <BrowserRouter>
        <Navbar />
        <div className='max-w-4xl mx-auto my-0'>
          <Routes>
            <Route path='/' element={ user ? <Home /> : <Navigate to="/login" />} />
            <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/" />} />
            <Route path='/login' element={ !user ? <Login /> : <Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
