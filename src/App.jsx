import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Products from './pages/Products';
import Contact_Us from './pages/Contact_Us';
import Explore_Us from './pages/Explore_Us';
import Services from './pages/Services';
import Consultant from './pages/Consultant';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contact-us" element={<Contact_Us/>} />
        <Route path="/explore-us" element={<Explore_Us/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/consultant" element={<Consultant/>} />
      </Routes>
    </>
  )
}

export default App