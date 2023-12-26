import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Login from './Page/Login'
import Signup from './Page/Signup';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App;