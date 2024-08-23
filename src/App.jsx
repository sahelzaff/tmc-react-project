import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Products from './pages/Products';
import Contact_Us from './pages/Contact_Us';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/Contact-Us" element={<Contact_Us/>} />
      
        
      </Routes>
     
    </>
  )
}

export default App