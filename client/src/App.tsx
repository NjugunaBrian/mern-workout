import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='max-w-4xl my-0 mx-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />


          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
