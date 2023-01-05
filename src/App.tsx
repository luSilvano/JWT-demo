
import React from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Profile } from './pages/Profile';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Header</h1>
        <hr />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/user' element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
