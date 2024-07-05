import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='max-w-3xl p-5 my-0 mx-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
