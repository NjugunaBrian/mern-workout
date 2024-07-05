import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
