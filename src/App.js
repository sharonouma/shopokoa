import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logo from './components/Logo.png';
import Signup from './components/SignUp';
import Signup1 from './components/SignUp1';
import Home from './components/HomePage';
import Login from './components/Login';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signup1' element={<Signup1 />} />
        <Route path='/logo' element={<Logo />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/selection' element={<Selection/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;