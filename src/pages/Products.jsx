import React from 'react'
import Topbar from '../Components/Topbar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero_Homepage from '../Components/Hero_Homepage'
import ProductPageMain from '../Components/Products_Components/ProductPageMain'

const Products = () => {
  return (
    <>
        <Topbar/>
        <Navbar/>
       <Hero_Homepage
       heading="Explore Our Range of Advanced Continuous Casting Machines" 
       paragraph="And Major Equipment Designed for Optimal Performance" 
       buttonText="Contact Us for More Details" 
       />
       <ProductPageMain/>
        <Footer/>
        
    </>
  )
}

export default Products