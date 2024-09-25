import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Products from './pages/Products';
import Contact_Us from './pages/Contact_Us';
import Explore_Us from './pages/Explore_Us';
import Services from './pages/Services';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/Contact-Us" element={<Contact_Us/>} />
        <Route path="/Explore-Us" element={<Explore_Us/>} />
        <Route path="/Services" element={<Services/>} />
      
        
      </Routes>
     
    </>
  )
}

export default App